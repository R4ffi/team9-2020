import React, { Component } from "react";
import field from "../Assets/Images/field.png";

export default class Background extends Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          backgroundImage: { field },
          width: "100%",
          zIndex: -100,
          height: "100%",
        }}
      >
        <img src={field} alt="field" height="100%" />
      </div>
    );
  }
}
