const Constants = {
    MAX_WIDTH: window.screen.width,
    MAX_HEIGHT: window.screen.height,
    SPEED: window.screen.width * 0.005,
    SPEED_STADIUM: window.screen.width * 0.005 * 1,
    SPEED_CITY: window.screen.width * 0.005 * 0.5 * 0.25,
    GRAVITY: window.screen.width * 0.0005
};

export function GetAbsolutWidthPosition(numberInPercent) {
    return (window.screen.width / 100) * numberInPercent;
}

export function GetAbsolutHeightPosition(numberInPercent) {
    return (window.screen.height / 100) * numberInPercent;
}

export default Constants;