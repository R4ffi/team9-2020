import React from 'react';
import Matter from 'matter-js';
import PropTypes from 'prop-types';

const Floor = (props) => {
  const { body } = props;

  const width = body.bounds.max.x - body.bounds.min.x;
  const height = body.bounds.max.y - body.bounds.min.y;
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  return (
    <div
      style={{
        position: 'absolute',
        width,
        height,
        left: x,
        top: y,
      }}
    />
  );
};

Floor.propTypes = {
  body: PropTypes.instanceOf(Matter.Body).isRequired,
};

export default Floor;
