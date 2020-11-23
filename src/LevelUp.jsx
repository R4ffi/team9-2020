import PropTypes from 'prop-types';
import React from 'react';
import ButtonScreen from './ButtonScreen';
import levelUpImage from './Assets/Images/level-up.svg';

const LevelUp = ({ onContinue }) => (
  <ButtonScreen
    imageSource={levelUpImage}
    textButton1="Nächste Saison spielen"
    onClickButton1={onContinue}
  />
);

LevelUp.propTypes = {
  onContinue: PropTypes.func.isRequired,
};

export default LevelUp;
