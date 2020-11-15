import PropTypes from 'prop-types';
import React from 'react';
import { getAbsolutWidthPosition, getAbsolutHeightPosition } from './Constants/gameWorld';

const styles = {
  button: {
    fontSize: getAbsolutHeightPosition(3),
    width: '100%',
    height: '100%',
    fontFamily: '"04b_19", "Courier New"',
  },
  buttonContainer: {
    margin: 'auto',
    position: 'relative',
    top: '0%',
    width: '50%',
    height: '10%',
  },
  logo: {
    margin: 'auto',
    position: 'relative',
    top: '0%',
    width: '100%',
    height: '80%',
  },
  wrapper: {
    width: getAbsolutWidthPosition(100),
    height: getAbsolutHeightPosition(90),
    margin: '0 auto',
  },
};

const ButtonScreen = ({ buttonText, imageSource, onClick }) => (
  <div style={styles.wrapper}>
    <img src={imageSource} alt={buttonText} style={styles.logo} />
    <div style={styles.buttonContainer}>
      <button type="button" onClick={onClick} style={styles.button}>
        {buttonText}
      </button>
    </div>
  </div>
);

ButtonScreen.propTypes = {
  onClick: PropTypes.func.isRequired,
  imageSource: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default ButtonScreen;
