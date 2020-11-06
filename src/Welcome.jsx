import PropTypes from 'prop-types';
import React from 'react';
import welcomeImage from './Assets/Images/welcome.svg';
import { getAbsolutWidthPosition, getAbsolutHeightPosition } from './Constants/gameWorld';

const styles = {
  button: {
    fontSize: getAbsolutHeightPosition(3),
    width: '100%',
    height: '100%',
    fontFamily: '"04b_19", "Courier New"',
  },
  wrapper: {
    width: getAbsolutWidthPosition(100),
    height: getAbsolutHeightPosition(90),
    margin: '0 auto',
    borderStyle: 'solid',
    backgrundColor: 'red',
    padding: getAbsolutHeightPosition(10),
  },
  logo: {
    margin: 'auto',
    position: 'relative',
    top: '0%',
    width: '100%',
    height: '90%',
  },
  buttonContainer: {
    margin: 'auto',
    position: 'relative',
    top: '0%',
    width: '50%',
    height: '10%',
  },
};

const Welcome = ({ onStart }) => (
  <div style={styles.wrapper}>
    <img src={welcomeImage} alt="welcome" style={styles.logo} />
    <div style={styles.buttonContainer}>
      <button className="btn btn-outline-secondary" type="button" onClick={onStart} style={styles.button}>
        Spiel starten
      </button>
    </div>
  </div>
);

Welcome.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Welcome;
