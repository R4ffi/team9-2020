import React from 'react';
import Matter from 'matter-js';
import PropTypes from 'prop-types';
import soccerBall from '../Assets/Images/soccer-ball.svg';
import Constants from '../Constants';

const Ball = (props) => {
  const { body } = props;

  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  let x = Constants.MAX_WIDTH / 2;
  if (body.isNotFixed) {
    x = body.position.x;
  }
  const y = body.position.y - height / 2;
  Matter.Body.setPosition(body, { x, y: body.position.y });

  return (
    <div
      style={{
        position: 'absolute',
        width,
        height,
        left: x,
        top: y,
      }}
    >
      <img src={soccerBall} className="ball" alt="soccer ball" />
    </div>
  );
};

Ball.propTypes = {
  body: PropTypes.instanceOf(Matter.Body).isRequired,
};

export default Ball;
