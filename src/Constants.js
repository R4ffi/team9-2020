const Constants = {
    MAX_WIDTH: window.screen.width,
    MAX_HEIGHT: window.screen.height,
    SPEED: 7
}

export function GetAbsolutWidthPosition(numberInPercent){
    return window.screen.width / 100 * numberInPercent;
}

export function GetAbsolutHeightPosition(numberInPercent){
    return window.screen.height / 100 * numberInPercent;
}

export default Constants;