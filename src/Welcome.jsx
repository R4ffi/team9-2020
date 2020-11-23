import PropTypes from 'prop-types';
import React, { useState } from 'react';
import ButtonScreen from './ButtonScreen';
import Impressum from './Impressum';
import welcomeImage from './Assets/Images/welcome.svg';

const Welcome = ({ onStart }) => {
  const [isImpressumVisible, showImpressum] = useState(false);

  if (isImpressumVisible) {
    return (
      <Impressum
        onClose={() => showImpressum(false)}
      />
    );
  }

  return (
    <ButtonScreen
      imageSource={welcomeImage}
      textButton1="Spiel starten"
      onClickButton1={onStart}
      textButton2="Impressum"
      onClickButton2={() => showImpressum(true)}
    />
  );
};

Welcome.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Welcome;
