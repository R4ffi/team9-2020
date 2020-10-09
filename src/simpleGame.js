import Ball from "./Entities/ball";
import Constants from "./Constants";
import Floor from "./Entities/floor";
import Matter from "matter-js";
import Physics from "./Physics/Physics";
import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { MoveBox } from "./systems";
import { Player } from "./Entities/player";
import { club } from "./Constants/club";
import { skinColor } from "./Constants/skinColor";

export default class SimpleGame extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      running: true,
      score: 0,
    };

    this.gameEngine = null;

    this.entities = this.setupWorld();
  }

  setupWorld = () => {
    let engine = Matter.Engine.create({ enableSleeping: false });
    let world = engine.world;
    world.gravity.y = 0.5;

    let ball = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT / 2,
      30,
      30
    );

    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - 300,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );

    Matter.World.add(world, [ball, floor1]);
    Matter.Events.on(engine, "collisionStart", (event) => {
      //TODO here velocity zum Ball hinzufügen
      Matter.Body.setVelocity(ball, {
        x: ball.velocity.x,
        y: -15,
      });
      //this.gameEngine.dispatch({ type: "game-over"});
    });

    return {
      physics: { engine: engine, world: world },
      ball: { body: ball, renderer: Ball },
      floor1: { body: floor1, renderer: Floor },
      //floor2: { body: floor2, renderer: Floor },
      //bird: { body: ball, pose: 1, renderer: Bird},
      //TODO BALL
      player1: {
        x: 300,
        y: 300,
        skinColor: skinColor.black,
        club: club.stGallen,
        renderer: <Player />,
      },
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
    }
  };

  render() {
    return (
      <GameEngine
        className="game"
        style={{ backgroundColor: "blue" }}
        systems={[Physics]}
        entities={this.entities}
      ></GameEngine>
    );
  }
}
