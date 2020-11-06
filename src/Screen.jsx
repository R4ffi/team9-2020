import React from "react";

const Welcome = (props) => {
  return (
    <div
    >
        <h1>window.screen.width: {window.screen.width}</h1>
        <h1>window.screen.height: {window.screen.height}</h1>
        <h1>window.innerWidth: {window.innerWidth}</h1>
        <h1>window.innerHeight: {window.innerHeight}</h1>
    </div>
  );
};


export default Welcome;
