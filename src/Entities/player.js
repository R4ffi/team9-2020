import React, { PureComponent } from "react";
import player from "../assets/player.svg";

class Player extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: size,
          height: size,
          left: x,
          top: y,
        }}
      >
        <img src={player} alt="here is a player" height={size} width={size} />
      </div>
    );
  }
}

export { Player };
