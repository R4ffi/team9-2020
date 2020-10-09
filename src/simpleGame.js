import Ball from "./Entities/ball";
import Constants from "./Constants";
import Floor from "./Entities/floor";
import Matter from "matter-js";
import MovingEntity from "./Entities/movingEntity";
import Physics from "./Physics/Physics";
import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
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
      30,
    );
    ball.label = 'ball';

    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - 300,
      Constants.MAX_WIDTH + 4,
      200,
      { isStatic: true }
    );

    floor1.label = 'floor';

    let player1 = Matter.Bodies.rectangle(
      0,
      Constants.MAX_HEIGHT - 500,
      60,
      120,
    );

    player1.label = 'player1';
    Matter.World.add(world, [ball, floor1, player1]);

    Matter.Events.on(engine, "collisionStart", (event) => {
      if(event.pairs.filter(element => this.bodiesAreColliding(element, "player1" ,"ball")).length !== 0){
        Matter.Body.setVelocity(ball, {
          x: ball.velocity.x,
          y: -15,
        });
      }else if(event.pairs.filter(element =>this.bodiesAreColliding(element, "floor" ,"ball")).length !== 0){
        Matter.Body.setVelocity(ball, {
          x: ball.velocity.x,
          y: -5,
        });
      }
    });

    return {
        physics: { engine: engine, world: world },
        ball: {body: ball, renderer: Ball},
        floor1: { body: floor1, renderer: Floor },
        player1: { body: player1, renderer: MovingEntity,  skinColor: skinColor.black, club: club.stGallen },
    }
  }
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

  bodiesAreColliding(pair, nameA, nameB) {
    return (pair.bodyB.label === nameA && pair.bodyA.label === nameB) || (pair.bodyB.label === nameB && pair.bodyA.label === nameA);
  }
}
