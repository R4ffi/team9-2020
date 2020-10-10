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
import levelUpSound from "./Assets/Sounds/levelup.mp3";
import gameOverSound from "./Assets/Sounds/gameOver.mp3";
import headerSound from "./Assets/Sounds/header.mp3";
import pokal from "./Assets/Images/Pokal.jpg";
import GameOver from "./gameOver";

const clubOrder = [
  club.luzern,
  club.basel,
  club.stGallen
];

export default class SimpleGame extends PureComponent {
  constructor(props) {
    super(props);
    this.playerHeight = 10;
    this.clubPointer = 0;
    this.isGoal = false;
    this.state = {
      running: true,
      score: 0,
      trophy: 0,
      year: 2018,
    };

    this.gameEngine = null;

    this.entities = this.setupWorld();
  }

  levelUpAudio = new Audio(levelUpSound);
  gameOverAudio = new Audio(gameOverSound);
  headerAudio = new Audio(headerSound);

  setupWorld = () => {
    this.isGoal = false;
    this.endreached = false;
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
    player1.mass = 1;
    player1.inverseMass = 1;

    Matter.World.add(world, [ball, floor1, player1]);
    Matter.Events.on(engine, "collisionStart", (event) => {
      if (
        event.pairs.filter((element) =>
          this.bodiesAreColliding(element, "player1", "ball")
        ).length !== 0
      ) {
        if (this.isGoal) {
          ball.isNotFixed = true;
          Matter.Body.setVelocity(ball, {
            x: GetAbsolutWidthPosition(1),
            y: ball.velocity.y,
          });
        } else {
          Matter.Body.setVelocity(ball, {
            x: ball.velocity.x,
            y: -GetAbsolutWidthPosition(1),
          });
        }
        this.headerAudio.play();
        this.gameEngine.dispatch({ type: "score" });
      } else if (
        event.pairs.filter((element) =>
          this.bodiesAreColliding(element, "floor", "ball")
        ).length !== 0 &&
        !this.isGoal
      ) {
        //The ball collided with the floor.
        this.gameEngine.dispatch({ type: "game-over" });
      }
    });
    const enemies = addEnemies(engine, clubOrder[this.clubPointer]);

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

      bg: {
        stadium,
        city,
        endReached: () => {
          this.gameEngine.dispatch({ type: "end-reached" });
        },
        goalReached: () => {
          this.gameEngine.dispatch({ type: "goal-reached" });
        },
        renderer: Background,
      },
    };
  };

  onEvent = (e) => {
    if (e.type === "game-over") {
      //Alert.alert("Game Over");
      this.gameOverAudio.play();
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
    } else if (e.type === "end-reached") {
      this.endreached = true;
      this.levelUpAudio.play();
      this.setState({
        running: false,
      });
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
          <div style={styles.year}>{this.state.year}</div>
          <div style={styles.trophy}>
            {this.state.trophy}
            <img src={pokal} alt="field" style={styles.trophyImage}></img>
          </div>

          <div style={styles.score}>{this.state.score}</div>
          {!this.state.running && !this.endreached && (
            <div style={styles.fullScreen}>
              <GameOver reset={this.reset} />
            </div>
          )}
          {this.endreached && (
            <div style={styles.fullScreen}>
              <div style={styles.gameOverText}>Level Reached</div>
              <button
                class="btn btn-outline-secondary"
                onClick={this.continue}
                style={styles.gameOverSubText}
              >
                Continue...
              </button>
            </div>
          )}
        </div>
      </GameEngine>
    );
  }
  continue = () => {
    this.setState({
      running: true,
      score: this.state.score + 100,
      year: this.state.year + 1,
      trophy: this.state.trophy + 1,
    });
    if(++this.clubPointer >= clubOrder.length){
      this.clubPointer = 0;
    }
    this.gameEngine.swap(this.setupWorld());
  };
  reset = () => {
    this.gameEngine.swap(this.setupWorld());
    this.setState({
      running: true,
      score: 0,
      year: 2018,
      trophy: 0,
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
    top: 30,
    left: Constants.MAX_WIDTH / 2 - 20,
    textShadowColor: "#444444",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: "04b_19",
  },
  trophy: {
    position: "absolute",
    color: "#FFD700",
    fontSize: 72,
    top: 30,
    left: Constants.MAX_WIDTH - (Constants.MAX_WIDTH / 4 - 20),
    textShadowColor: "#FFD700",
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 2,
    fontFamily: "04b_19",
  },
  trophyImage: {
    height: 80,
  },
  year: {
    position: "absolute",
    color: "#FFD700",
    fontSize: 72,
    top: 30,
    left: Constants.MAX_WIDTH / 4 - 80,
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
