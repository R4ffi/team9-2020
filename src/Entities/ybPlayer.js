import React, { Component } from "react";
import Constants from "../Constants";
import Matter from "matter-js";
import { clubColor } from "../Constants/clubColor";

export default class YbPlayer extends Component {

  render() {
    const sizeY = this.props.body.bounds.max.y - this.props.body.bounds.min.y;
    const sizeX = this.props.body.bounds.max.x - this.props.body.bounds.min.x;
    const { club, skinColor } = this.props;
    const { primaryColor, pantsColor } = clubColor[club];

    let x = this.props.body.position.x - Constants.SPEED;
    if (x <= 0) {
      x = Constants.MAX_WIDTH;
    }
    if (x >= Constants.MAX_WIDTH - sizeX / 2) {
      x = Constants.MAX_WIDTH - sizeX / 2;
    }

    const y = this.props.body.position.y - sizeY / 2;
    Matter.Body.setPosition(this.props.body, {
      x: x,
      y: this.props.body.position.y,
    });
    return (
      <div
        style={{
          position: "absolute",
          width: sizeX,
          height: sizeY,
          left: x - sizeX / 2,
          top: y,
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 512.00486">
        <path
          d="m 289.01244,469.20199 -9.20156,-26.99303 -26.11012,-80.70257 -4.54542,-6.64579 9.63488,-34.41631 35.59073,13.4356 2.08151,3.04841 c 1.22604,1.7909 2.20767,3.74142 2.91333,5.78926 l 28.61313,84.20962 9.71533,27.51621"
          id="path4-5"
          fill={pantsColor}
          />
        <path
          d="m 179.79719,429.78812 6.20413,25.50759 6.20413,25.50759 c 3.1814,13.0891 -4.97907,26.24829 -18.23689,29.39403 -13.33668,3.16132 -26.59844,-5.00282 -29.76407,-18.01017 l -6.53035,-26.85174 -6.53036,-26.85173"
          id="path43-8"
          fill={pantsColor}/>
        <path
          d="m 179.79719,429.78812 6.20413,25.50759 m 0,0 6.20413,25.50759 c 3.1814,13.0891 -4.97907,26.24829 -18.23689,29.39403 -13.33668,3.16132 -26.59844,-5.00282 -29.76407,-18.01017 l -6.53035,-26.85174 m 0,0 -6.53036,-26.85173"
          id="path43-7"
          fill={primaryColor}/>
        <path
          id="path43"
          fill={pantsColor}
          d="m 179.79719,429.78812 6.20413,25.50759 m 0,0 6.20413,25.50759 m 0,0 c 3.1814,13.0891 -4.97907,26.24829 -18.23689,29.39403 -13.33668,3.16132 -26.59844,-5.00282 -29.76407,-18.01017 m 0,0 -6.53035,-26.85174 m 0,0 -6.53036,-26.85173" />
        <path
          d="m 131.14378,438.48369 -6.53035,-26.85173 -6.53035,-26.85174 c -0.86083,-3.53958 -0.91067,-7.22197 -0.14193,-10.7843 l 4.36803,-20.04245 32.83508,-17.57801 15.93856,25.45406 -3.69389,16.94342 6.20413,25.50759 6.20413,25.50759"
          id="path2-2"
          fill={primaryColor}
          />
        <path
          id="path2"
          fill={skinColor}
          d="m 131.14378,438.48369 -6.53035,-26.85173 m 0,0 -6.53035,-26.85174 c -0.86083,-3.53958 -0.91067,-7.22197 -0.14193,-10.7843 l 4.36803,-20.04245 32.83508,-17.57801 15.93856,25.45406 -3.69389,16.94342 6.20413,25.50759 m 0,0 6.20413,25.50759" />
        <path
          d="m 337.70425,454.44339 8.48982,24.19916 c 4.38774,12.74649 -2.51516,26.59089 -15.42212,30.92796 -12.93456,4.34488 -28.42545,-0.518 -32.8053,-13.23724 0,0 8.94897,24.09171 -8.95421,-27.13128"
          fill={primaryColor}
         id="path165-5" />
        <path
          id="path165"
          fill={pantsColor}
          d="m 337.70425,454.44339 8.48982,24.19916 m 0,0 c 4.38774,12.74649 -2.51516,26.59089 -15.42212,30.92796 -12.93456,4.34488 -28.42545,-0.518 -32.8053,-13.23724" />
        <path
          d="m 289.01244,469.20199 -9.20156,-26.99303 m 0,0 -26.11012,-80.70257 -4.54542,-6.64579 9.63488,-34.41631 35.59073,13.4356 2.08151,3.04841 c 1.22604,1.7909 2.20767,3.74142 2.91333,5.78926 l 28.61313,84.20962 m 0,0 9.71533,27.51621"
          id="path4-6"
          fill={primaryColor}/>
        <path
          id="path4"
          fill={skinColor}
          d="m 289.01244,469.20199 -9.20156,-26.99303 m 0,0 -10.56851,-32.89162 m 2.48655,6.96235 -18.02816,-54.7733 -4.54542,-6.64579 9.63488,-34.41631 35.59073,13.4356 2.08151,3.04841 c 1.22604,1.7909 22.10009,61.42945 22.80575,63.47729 m 0,0 8.72071,26.52159 m 0,0 9.71533,27.51621" />
        <path
          id="path6"
          fill={pantsColor}
          d="m 171.08282,361.82952 19.46688,-89.27998 c 2.84631,-13.16696 -5.6532,-26.1198 -18.98198,-28.93073 -13.33273,-2.81093 -26.44863,5.57902 -29.29494,18.746 l -19.9636,91.58866 z m 0,0" />
        <path
          id="path8"
          fill={pantsColor}
          d="m 294.38095,333.87989 -59.75678,-87.38396 c -7.62433,-11.15806 -22.96761,-14.09747 -34.26613,-6.56013 -11.29851,7.53344 -14.27098,22.68596 -6.64271,33.84402 l 55.44394,81.08078 z m 0,0" />
        <path
          id="path10"
          fill={skinColor}
          d="m 312.10535,247.48481 c 11.14871,-2.14908 18.42612,-12.81657 16.25,-23.83057 L 313.7611,149.78763 c -1.09201,-5.54399 -4.47446,-10.3833 -9.33133,-13.36553 L 222.59239,86.206985 c -4.69523,-2.881001 -10.3642,-3.776448 -15.7375,-2.479997 L 99.58204,109.60541 c -5.21561,1.25752 -9.72555,4.48113 -12.56792,8.98173 l -42.13883,66.69524 c -2.10122,3.32482 -3.1814,7.17526 -3.11437,11.09186 l 1.50988,89.66152 c 0.18923,11.2398 9.57969,20.15923 20.90975,19.97236 11.35765,-0.19077 20.41301,-9.43334 20.22379,-20.64979 l -1.41134,-83.66202 28.59323,-45.25123 23.6851,95.75835 c 6.34309,25.63703 32.52758,41.34241 58.48736,35.07816 l 58.8343,-14.19478 -35.18073,-142.22815 57.69103,35.39741 12.87543,65.18077 c 2.17613,11.01011 12.97792,18.19315 24.12663,16.04797 z m 0,0" />
        <path
        fill={primaryColor}
          id="path12"
          d="M 275.7104,118.80126 222.59239,86.206985 c -4.69523,-2.881001 -10.3642,-3.776448 -15.7375,-2.479997 l -31.81404,7.67359 c 4.56907,16.336072 -9.29585,29.386242 -22.96367,29.386242 -11.48774,0 -20.40908,-7.95001 -23.08982,-18.27491 L 94.942,110.72277 c -2.2392,0.54116 -4.1788,1.92716 -5.40089,3.8621 l -35.00334,55.40093 36.84043,18.43842 20.20408,-31.97914 26.85468,108.55545 c 4.59274,18.57079 23.555,29.94298 42.35959,25.40735 l 71.79644,-17.32107 -35.18073,-142.22815 c 0,0 37.34503,22.72099 37.49483,22.72099 z m 0,0" />
        <path
          id="path14"
          fill={skinColor}
          d="M 181.44308,32.702071 C 175.8569,10.117333 152.78678,-3.7192709 129.91774,1.7974647 107.04474,7.3142003 93.03394,30.097485 98.62407,52.682222 c 5.58618,22.588625 28.6563,36.425237 51.52534,30.908501 22.86906,-5.52063 36.88379,-28.300028 31.29367,-50.888652 z m 0,0" />
              </svg>
            </div>
    );
  }
}
