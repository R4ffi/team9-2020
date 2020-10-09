import React, { PureComponent } from "react";

class Player extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div style={{ position: "absolute", width: size, height: size, backgroundColor: "green", left: x, top: y }} />
    );
  }
}

export { Player };
