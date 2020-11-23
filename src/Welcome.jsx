import PropTypes from 'prop-types';
import React from 'react';
import ButtonScreen from './ButtonScreen';
import welcomeImage from './Assets/Images/welcome.svg';

const Welcome = ({ onStart }) => (
  <ButtonScreen
    imageSource={welcomeImage}
    textButton1="Spiel starten"
    onClickButton1={onStart}
  />
);

Welcome.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Welcome;
