import PropTypes from 'prop-types';
import React from 'react';
import ButtonScreen from './ButtonScreen';
import levelUpImage from './Assets/Images/level-up.svg';

const LevelUp = ({ onContinue }) => (
  <ButtonScreen
    buttonText="Nächste Saison spielen"
    imageSource={levelUpImage}
    onClick={onContinue}
  />
);

LevelUp.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default LevelUp;
