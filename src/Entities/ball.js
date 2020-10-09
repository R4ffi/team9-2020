import Constants from "../Constants";
import React, { Component } from "react";
import soccerBall from "../Assets/Images/soccer-ball.svg";

export default class Ball extends Component {
  render() {
    const width = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    const height = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    const x = Constants.MAX_WIDTH / 2;
    const y = this.props.body.position.y - height / 2;

    return (
      <div
        style={{
          position: "absolute",
          width: width,
          height: height,
          left: x,
          top: y,
        }}
      >
        <img src={soccerBall} className="ball" alt="soccer ball" />
      </div>
    );
  }
}
