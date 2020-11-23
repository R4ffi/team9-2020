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

const ButtonScreen = ({
  imageSource, textButton1, onClickButton1, textButton2, onClickButton2,
}) => {
  const isButton2Visible = !!onClickButton2;
  const width = isButton2Visible ? '50%' : styles.button.width;
  const buttonStyle = { ...styles.button, ...{ width } };
  const button2 = isButton2Visible
    ? (
      <button type="button" onClick={onClickButton2} style={buttonStyle}>
        {textButton2}
      </button>
    )
    : <></>;

  return (
    <div style={styles.wrapper}>
      <img src={imageSource} alt={textButton1} style={styles.logo} />
      <div style={styles.buttonContainer}>
        <button type="button" onClick={onClickButton1} style={buttonStyle}>
          {textButton1}
        </button>
        {button2}
      </div>
    </div>
  );
};

ButtonScreen.propTypes = {
  imageSource: PropTypes.string.isRequired,
  textButton1: PropTypes.string.isRequired,
  onClickButton1: PropTypes.func.isRequired,
  textButton2: PropTypes.string,
  onClickButton2: PropTypes.func,
};

ButtonScreen.defaultProps = {
  textButton2: undefined,
  onClickButton2: undefined,
};

export default ButtonScreen;
