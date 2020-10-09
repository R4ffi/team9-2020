import Background from "./Entities/background";
import Ball from "./Entities/ball";
import Constants, {
  GetAbsolutHeightPosition,
  GetAbsolutWidthPosition,
} from "./Constants";
import Floor from "./Entities/floor";
import Matter from "matter-js";
import Physics from "./Physics/Physics";
import React, { PureComponent } from "react";
import YbPlayer from "./Entities/ybPlayer";
import { GameEngine } from "react-game-engine";
import { addEnemies } from "./Entities/enemies";
import { club } from "./Constants/club";
import { skinColor } from "./Constants/skinColor";

export default class SimpleGame extends PureComponent {
  constructor(props) {
    super(props);
    this.playerHeight = 10;
    this.isGoal = false;
    this.state = {
      running: true,
      score: 0,
    };

    this.gameEngine = null;

    this.entities = this.setupWorld();
  }

  setupWorld = () => {
    let engine = Matter.Engine.create();
    let world = engine.world;
    world.gravity.y = Constants.GRAVITY;
    let ball = Matter.Bodies.circle(
      Constants.MAX_WIDTH / 2,
      0,
      GetAbsolutHeightPosition(3)
    );
    const stadium = Matter.Bodies.rectangle(0, 0, 0, 0);
    const city = Matter.Bodies.rectangle(0, 0, 0, 0);

    ball.label = "ball";
    ball.isNotFixed = false;

    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - GetAbsolutHeightPosition(10),
      Constants.MAX_WIDTH + 4,
      GetAbsolutHeightPosition(10),
      { isStatic: true }
    );
    floor1.label = "floor";
    let player1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - GetAbsolutHeightPosition(20),
      GetAbsolutWidthPosition(10),
      GetAbsolutHeightPosition(20),
      {
        inertia: Infinity,
      }
    );
    player1.label = "player1";

    Matter.World.add(world, [ball, floor1, player1]);
    Matter.Events.on(engine, "collisionStart", (event) => {
      if (event.pairs.filter((element) => this.bodiesAreColliding(element, "player1", "ball")).length !== 0) {
        if (this.isGoal) {
          ball.isNotFixed = true;
          Matter.Body.setVelocity(ball, {
            x: GetAbsolutWidthPosition(1),
            y: ball.velocity.y
          });
        } else {
          Matter.Body.setVelocity(ball, {
            x: ball.velocity.x,
            y: -GetAbsolutWidthPosition(1),
          });
        }
        this.gameEngine.dispatch({ type: "score" });
      } else if (event.pairs.filter((element) => this.bodiesAreColliding(element, "floor", "ball")).length !== 0 && !this.isGoal) {
        //The ball collided with the floor.
        this.gameEngine.dispatch({ type: "game-over" });
      }
    });

    const enemies = addEnemies(engine);

    return {
      ...enemies,
      physics: { engine: engine, world: world },
      ball: { body: ball, renderer: Ball },
      floor1: { body: floor1, renderer: Floor },
      player1: {
        body: player1,
        stadium,
        city,
        renderer: YbPlayer,
        skinColor: skinColor.latin,
        club: club.yb,
      },
      enemy1: {
        body: enemy1,
        renderer: EnemyPlayer,
        skinColor: skinColor.black,
        club: club.luzern,
      },
      bg: { stadium, city, goalReached: () => { this.gameEngine.dispatch({ type: "goal-reached" }); console.log("goal reached") }, renderer: Background },
    };
  };

  onEvent = (e) => {
    if (e.type === "game-over") {
      //Alert.alert("Game Over");
      this.setState({
        running: false,
      });
    } else if (e.type === "score") {
      //Alert.alert("Score!");
      this.setState({
        score: this.state.score + 1,
      });
    } else if (e.type === "goal-reached") {
      this.isGoal = true;
    }
  };

  render() {
    return (
      <GameEngine
        className="game"
        ref={(ref) => {
          this.gameEngine = ref;
        }}
        running={this.state.running}
        systems={[Physics]}
        onEvent={this.onEvent}
        entities={this.entities}
      >
        <div>
          <div style={styles.score}>{this.state.score}</div>
          {!this.state.running && (
            <div onClick={this.reset} style={styles.fullScreen}>
              <div style={styles.gameOverText}>Game Over</div>
              <div style={styles.gameOverSubText}>Try Again</div>
            </div>
          )}
        </div>
      </GameEngine>
    );
  }
  reset = () => {
    this.gameEngine.swap(this.setupWorld());
    this.setState({
      running: true,
      score: 0,
    });
  };

  bodiesAreColliding(pair, nameA, nameB) {
    return (
      (pair.bodyB.label === nameA && pair.bodyA.label === nameB) ||
      (pair.bodyB.label === nameB && pair.bodyA.label === nameA)
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  backgroundImage: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: Constants.MAX_WIDTH,
    height: Constants.MAX_HEIGHT,
  },
  gameContainer: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  gameOverText: {
    color: "white",
    fontSize: 48,
    fontFamily: "04b_19",
  },
  gameOverSubText: {
    color: "white",
    fontSize: 24,
    fontFamily: "04b_19",
  },
  fullScreen: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "black",
    opacity: 0.8,
    justifyContent: "center",
    alignItems: "center",
  },
  score: {
    position: "absolute",
    color: "white",
    fontSize: 72,
    top: 50,
    left: Constants.MAX_WIDTH / 2 - 20,
    textShadowColor: "#444444",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: "04b_19",
  },
  fullScreenButton: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    flex: 1,
  },
};
