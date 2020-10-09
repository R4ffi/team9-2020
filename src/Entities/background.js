import Constants from "../Constants";
import Matter from "matter-js";
import React, { Component } from "react";
import field from "../Assets/Images/field.png";

export default class Background extends Component {
  render() {
    const x = this.props.body.position.x - Constants.BG_SPEED;

    Matter.Body.setPosition(this.props.body, {
      x: x,
      y: this.props.body.position.y,
    });

    return (
      <div
        style={{
          position: "absolute",
          backgroundImage: { field },
          width: "100%",
          zIndex: -100,
          height: "100%",
          left: `${x}px`,
        }}
      >
        <img src={field} alt="field" height="100%" />
      </div>
    );
  }
}
