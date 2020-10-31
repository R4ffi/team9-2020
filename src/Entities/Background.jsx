import Matter from 'matter-js';
import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import stadiumImageSource from '../Assets/Images/stadium.png';
import Constants from '../Constants';
import cityImageSource from '../Assets/Images/city.png';

const Background = ({
  city, stadium, goalReached, endReached,
}) => {
  const stadiumImage = useRef(null);
  const cityImage = useRef(null);

  let cityX = city.position.x - Constants.SPEED_CITY;
  const stadiumX = stadium.position.x - Constants.SPEED_STADIUM;

  if (stadiumImage.current && stadiumImage.current.width > 0
    && stadiumX - Constants.MAX_WIDTH * 2 < -stadiumImage.current.width) {
    goalReached();
  }

  if (stadiumImage.current && stadiumImage.current.width > 0
    && stadiumX - Constants.MAX_WIDTH < -stadiumImage.current.width) {
    // stadiumX = 0;
    endReached();
  }

  if (cityImage.current && cityX - Constants.MAX_WIDTH < -cityImage.current.width) {
    cityX = 0;
  }
  Matter.Body.setPosition(stadium, {
    x: stadiumX,
    y: stadium.position.y,
  });

  Matter.Body.setPosition(city, {
    x: cityX,
    y: city.position.y,
  });

  return (
    <>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: -110,
          height: '31%',
          left: `${cityX}px`,
        }}
      >
        <img ref={cityImage} src={cityImageSource} alt="field" height="100%" />
      </div>
      <div
        style={{
          position: 'absolute',
          width: '100%',
          zIndex: -100,
          height: '100%',
          left: `${stadiumX}px`,
        }}
      >
        <img ref={stadiumImage} src={stadiumImageSource} alt="field" height="100%" />
      </div>
    </>
  );
};

Background.propTypes = {
  city: PropTypes.instanceOf(Matter.Body).isRequired,
  stadium: PropTypes.instanceOf(Matter.Body).isRequired,
  endReached: PropTypes.func.isRequired,
  goalReached: PropTypes.func.isRequired,
};

export default Background;
