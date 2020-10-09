import Constants from "./Constants";
import Matter from "matter-js";
import React, { PureComponent } from "react";
import { Box } from "./renderers";
import { GameEngine } from "react-game-engine";
import { MoveBox } from "./systems";
import { Player } from "./Entities/player";
import Ball from "./Entities/ball"
import Physics from "./Physics/Physics";
import Floor from "./Entities/floor";
import MovingEntity from "./Entities/movingEntity";

export default class SimpleGame extends PureComponent {
 
  constructor(props){
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

    let ball = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT / 2, 30, 30);

    let floor1 = Matter.Bodies.rectangle(
      Constants.MAX_WIDTH / 2,
      Constants.MAX_HEIGHT - 300,
      Constants.MAX_WIDTH + 4,
      50,
      { isStatic: true }
    );

    let movingEntity1 = Matter.Bodies.rectangle(
      0,
      300,
      50,
      50,
      { isStatic: false }
    );
    Matter.World.add(world, [ball, floor1]);
    Matter.Events.on(engine, 'collisionStart', (event) => {
      //TODO here velocity zum Ball hinzufügen  
      debugger;
      Matter.Body.setVelocity(ball, {
        x: ball.velocity.x,
        y: -15
      })
      //this.gameEngine.dispatch({ type: "game-over"});
    });

    return {
        physics: { engine: engine, world: world },
        ball: {body: ball, renderer: Ball},
        floor1: { body: floor1, renderer: Floor },
        movingEntity1: { body: movingEntity1, renderer: MovingEntity },
        //floor2: { body: floor2, renderer: Floor },
        //bird: { body: ball, pose: 1, renderer: Bird}, 
        //TODO BALL
    }
  }

  onEvent = (e) => {
    if (e.type === "game-over"){
        //Alert.alert("Game Over");
        this.setState({
            running: false
        });
    } else if (e.type === "score") {
      //Alert.alert("Score!");  
      this.setState({
            score: this.state.score + 1
        })
    }
  }

  render() {
    return (
      <GameEngine
        className="game"
        style={{ backgroundColor: "blue" }}
        systems={[Physics]}
        entities={
          this.entities
          //{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          //box1: { x: 100, y: 100, renderer: <Box /> },
          //box2: { x: 300, y: 300, renderer: <Player /> },
        }
      ></GameEngine>
    );
  }
}
