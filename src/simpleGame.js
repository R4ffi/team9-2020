import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems";
import Matter from "matter-js";
import Constants from "./Constants";

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
    world.gravity.y = 0.0;

    let ball = Matter.Bodies.rectangle( Constants.MAX_WIDTH / 2, Constants.MAX_HEIGHT / 2, 30, 30);

    let floor1 = Matter.Bodies.rectangle(
        Constants.MAX_WIDTH / 2,
        Constants.MAX_HEIGHT - 25,
        Constants.MAX_WIDTH + 4,
        50,
        { isStatic: true }
    );

    let floor2 = Matter.Bodies.rectangle(
        Constants.MAX_WIDTH + (Constants.MAX_WIDTH / 2),
        Constants.MAX_HEIGHT - 25,
        Constants.MAX_WIDTH + 4,
        50,
        { isStatic: true }
    );


    Matter.World.add(world, [ball, floor1, floor2]);
    Matter.Events.on(engine, 'collisionStart', (event) => {
        this.gameEngine.dispatch({ type: "game-over"});
    });

    return {
        physics: { engine: engine, world: world },
        //floor1: { body: floor1, renderer: Floor },
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
        systems={[MoveBox]}
        entities={{
          //-- Notice that each entity has a unique id (required)
          //-- and a renderer property (optional). If no renderer
          //-- is supplied with the entity - it won't get displayed.
          box1: { x: 100,  y: 100, renderer: <Box />},
          box2: { x: 300,  y: 300, renderer: <Box />}
        }}>

      </GameEngine>
    );
  }
}