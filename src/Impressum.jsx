import PropTypes from 'prop-types';
import React from 'react';
import ButtonScreen from './ButtonScreen';
import impressumImage from './Assets/Images/impressum.svg';

const Impressum = ({ onClose }) => (
  <ButtonScreen
    imageSource={impressumImage}
    textButton1="Zurück"
    onClickButton1={onClose}
  />
);

Impressum.propTypes = {
  onClose: PropTypes.func.isRequired,
};

export default Impressum;
