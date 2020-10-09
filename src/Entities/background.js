import Constants from "../Constants";
import Matter from "matter-js";
import React, { useRef } from "react";
import field from "../Assets/Images/field.png";

const Background = (props) => {
  const bgImage = useRef(null);
  let x = props.body.position.x - Constants.BG_SPEED;

  if (bgImage.current) {
    if (x - Constants.MAX_WIDTH < -bgImage.current.width) {
      x = 0;
    }
  }

  Matter.Body.setPosition(props.body, {
    x: x,
    y: props.body.position.y,
  });

  return (
    <div
      style={{
        position: "absolute",
        width: "100%",
        zIndex: -100,
        height: "100%",
        left: `${x}px`,
      }}
    >
      <img ref={bgImage} src={field} alt="field" height="100%" />
    </div>
  );
};

export default Background;
