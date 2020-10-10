import React from "react";
import { GetAbsolutWidthPosition, GetAbsolutHeightPosition } from "./Constants";

const LevelUp = (props) => {
  const width = GetAbsolutWidthPosition(30);
  const x = GetAbsolutWidthPosition(50) - width / 2;

  return (
    <div
      style={{
        position: "absolute",
        width: width,
        left: x,
        top: 0,
      }}
    >
      <svg viewBox="-100 -100 710 710" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF">
          <path d="m30 0v70.132c0 59.686 35.926 112.847 90.417 135.419 2.74 34.937 19.003 67.626 45.568 90.938 14.578 12.793 24.234 29.942 27.642 48.511h-43.627v60h-30v75h-30v30h330v-30h-30v-75h-30v-60h-43.627c3.407-18.569 13.064-35.717 27.642-48.51 26.566-23.313 42.828-56.002 45.568-90.939 54.491-22.572 90.417-75.733 90.417-135.419v-70.132zm30 70.132v-40.132h60v142.104c-36.586-20.273-60-58.999-60-101.972zm300 409.868h-210v-45h210zm-30-75h-150v-30h150zm-5.773-131.059c-21.098 18.515-34.58 43.825-38.227 71.059h-62c-3.646-27.234-17.129-52.544-38.227-71.059-22.734-19.951-35.773-48.724-35.773-78.941v-165h210v165c0 30.217-13.039 58.99-35.773 78.941zm125.773-203.809c0 42.974-23.414 81.7-60 101.972v-142.104h60z" />
          <path d="m255 79.226-23.264 47.136-52.02 7.559 37.643 36.691-8.886 51.809 46.527-24.461 46.526 24.46-8.886-51.809 37.643-36.691-52.02-7.559zm6.683 88.354-6.683-3.514-6.683 3.513 1.276-7.441-5.406-5.27 7.471-1.086 3.342-6.771 3.342 6.771 7.471 1.086-5.406 5.27z" />
        </g>
      </svg>
      <button
        className="btn btn-outline-secondary"
        onClick={props.continue}
        style={styles.button}
      >
        Nächschti Seso spilä
      </button>
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

export default LevelUp;
