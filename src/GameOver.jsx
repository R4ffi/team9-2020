import PropTypes from 'prop-types';
import React from 'react';
import ButtonScreen from './ButtonScreen';
import gameOverImage from './Assets/Images/game-over.svg';

const GameOver = ({ onReset }) => (
  <ButtonScreen
    buttonText="Neuer Versuch"
    imageSource={gameOverImage}
    onClick={onReset}
  />
);

GameOver.propTypes = {
  onReset: PropTypes.func.isRequired,
};

export default GameOver;
