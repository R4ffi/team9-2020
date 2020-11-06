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


export default Welcome;
