import Constants from "../Constants";
import Matter from "matter-js";
import React, { useRef } from "react";
import city from "../Assets/Images/city.png";
import stadium from "../Assets/Images/stadium.png";

const Background = (props) => {
  const stadiumImage = useRef(null);
  const cityImage = useRef(null);
  let stadiumX = props.stadium.position.x - Constants.SPEED_STADIUM;
  let cityX = props.city.position.x - Constants.SPEED_CITY;
  if (
    stadiumImage.current && stadiumImage.current.width > 0 &&
    stadiumX - Constants.MAX_WIDTH*2 < -stadiumImage.current.width
  ){
    props.goalReached();
  }

  if (
    stadiumImage.current && stadiumImage.current.width > 0 &&
    stadiumX - Constants.MAX_WIDTH < -stadiumImage.current.width
  ) {
    //stadiumX = 0;
    props.endReached();
  }

  if (
    cityImage.current &&
    cityX - Constants.MAX_WIDTH < -cityImage.current.width
  ) {
    cityX = 0;
  }
  Matter.Body.setPosition(props.stadium, {
    x: stadiumX,
    y: props.stadium.position.y,
  });

  Matter.Body.setPosition(props.city, {
    x: cityX,
    y: props.city.position.y,
  });

  return (
    <React.Fragment>
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: -110,
          height: "31%",
          left: `${cityX}px`,
        }}
      >
        <img ref={cityImage} src={city} alt="field" height="100%" />
      </div>
      <div
        style={{
          position: "absolute",
          width: "100%",
          zIndex: -100,
          height: "100%",
          left: `${stadiumX}px`,
        }}
      >
        <img ref={stadiumImage} src={stadium} alt="field" height="100%" />
      </div>
    </React.Fragment>
  );
};

export default Background;
