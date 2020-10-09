import React, { Component } from "react";
import Constants from "../Constants";
import Matter from "matter-js";

export default class MovingEntity extends Component {
  render() {
    const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    let x = this.props.body.position.x - width / 2 + Constants.SPEED;
    if (x <= 0) {
      x = Constants.MAX_WIDTH;
    }
    const y = 450;
    Matter.Body.setPosition(this.props.body, { x: x, y: y });

    return (
      <div
        style={{
          position: "absolute",
          width: width,
          height: height,
          backgroundColor: "green",
          left: x,
          top: y,
        }}
      />
      // <Animated.Image
    );
  }
}
