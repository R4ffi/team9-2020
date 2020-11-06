import React from "react";
import { GetAbsolutWidthPosition, GetAbsolutHeightPosition } from "./Constants";

const Welcome = (props) => {
  const width = GetAbsolutWidthPosition(100);
  const height = GetAbsolutHeightPosition(100)

  return (
    <div
    >
        <h1>Screen Width: {width}</h1>
        <h1>Screen Height: {height}</h1>
    </div>
  );
};

const styles = {
  button: {
    fontSize: GetAbsolutHeightPosition(3),
    width: "100%",
    fontFamily: '"04b_19", "Courier New"',
  },
};

export default Welcome;
