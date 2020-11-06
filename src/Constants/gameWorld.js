const screenWidth = window.screen.width > window.screen.height 
  ? window.screen.width
  : window.screen.height;
const screenHeight = window.screen.width > window.screen.height 
  ? window.screen.height
  : window.screen.width;

const gameWorld = {
  MAX_WIDTH: screenWidth,
  MAX_HEIGHT: screenHeight,
  SPEED: screenWidth * 0.005,
  SPEED_STADIUM: screenWidth * 0.005 * 1,
  SPEED_CITY: screenWidth * 0.005 * 0.5 * 0.25,
  GRAVITY: screenWidth * 0.0005,
};

export function getAbsolutWidthPosition(numberInPercent) {
  return (screenWidth / 100) * numberInPercent;
}

export function getAbsolutHeightPosition(numberInPercent) {
  return (screenHeight / 100) * numberInPercent;
}

export default gameWorld;
