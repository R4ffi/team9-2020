import React, { PureComponent } from "react";
import { GameEngine } from "react-game-engine";
import { Box } from "./renderers";
import { MoveBox } from "./systems"

export default class SimpleGame extends PureComponent {
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
          box1: { x: 200,  y: 200, renderer: <Box />},
          box2: { x: 300,  y: 300, renderer: <Box />}
        }}>

      </GameEngine>
    );
  }
}