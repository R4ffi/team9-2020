import Matter from 'matter-js';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import clubColor from '../Constants/clubColor';
import clubName from '../Constants/club';
import gameWorld from '../Constants/gameWorld';
import skinColor from '../Constants/skinColor';

const EnemyPlayer = ({ body, club }) => {
  const [currentSkinColor, setCurrentSkinColor] = useState(skinColor.randomSkinColor());

  const sizeY = body.bounds.max.y - body.bounds.min.y;
  const sizeX = body.bounds.max.x - body.bounds.min.x;
  const { primaryColor, secondaryColor, pantsColor } = clubColor[club];

  let x = body.position.x - gameWorld.SPEED;
  if (x <= 0) {
    setCurrentSkinColor(skinColor.randomSkinColor());
    x = gameWorld.MAX_WIDTH;
  }
  if (x > gameWorld.MAX_WIDTH) {
    x = gameWorld.MAX_WIDTH;
  }

  const y = body.position.y - sizeY / 2;
  Matter.Body.setPosition(body, {
    x,
    y: body.position.y,
  });
  return (
    <div
      style={{
        position: 'absolute',
        width: sizeX,
        height: sizeY,
        left: x - sizeX / 2,
        top: y,
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-31 0 380 512.00486">
        <path
          d="m 294.59886,220.20703 c 9.84375,-7.58594 11.67187,-21.71484 4.08203,-31.55469 L 242.80198,116.16016 C 238.9387,111.15234 233.14964,108 226.84886,107.47656 l -31.1211,-2.58984 -21.0039,19.88281 21.0039,25.26953 17.4961,1.45703 49.82031,64.62891 c 7.57422,9.82812 21.69922,11.68359 31.55469,4.08203 z m 0,0"
          id="path2"
          fill={currentSkinColor}
        />
        <path
          d="M 107.73167,120.13672 C 108.76292,107.75 119.63401,98.542969 132.02073,99.578125 l 63.71094,5.308595 v 45.15625 l -67.44531,-5.61719 c -12.38282,-1.03125 -21.58594,-11.90625 -20.55469,-24.28906 z m 0,0"
          id="path4"
          fill={secondaryColor}
        />
        <path
          d="m 335.05198,430.39844 c 7.39453,-12.72657 3.07031,-29.03907 -9.65234,-36.42969 l -75.73047,-44.00391 -0.64453,-5.78515 -30.42578,-20.50782 -22.16016,31.58594 1.32031,13.08594 c 0.75,8.64453 5.66016,16.38672 13.16407,20.75 l 87.69921,50.95703 c 12.69922,7.37891 29.01954,3.09766 36.42969,-9.65234 z m 0,0"
          id="path6"
          fill={currentSkinColor}
        />
        <path
          d="m 131.39183,487.67187 11.01562,-126.21484 2.08594,-6.19922 -19.55469,-31.58594 -32.953124,20.50782 -1.109374,3.30078 c -0.671876,2 -1.105469,4.07422 -1.289063,6.17578 L 78.29417,483.03516 c -1.28125,14.66406 9.566406,27.58593 24.23047,28.86718 14.75,1.28516 27.59375,-9.64843 28.86719,-24.23047 z m 0,0"
          id="path8"
          fill={currentSkinColor}
        />
        <path
          d="m 188.47386,276.50391 c -1.26563,-14.66016 10.94922,-27.63282 25.61328,-28.89844 14.65625,-1.26563 25.57812,12.76172 25.57812,12.76172 l 9.35938,83.8125 -52.58594,11.07812 z m 0,0"
          id="path10"
          fill={pantsColor}
        />
        <path
          d="M 144.49339,355.25781 91.985576,344.17969 125.49339,244.53906 c 4.6914,-13.94922 19.80078,-21.45703 33.7539,-16.76562 13.94922,4.6914 21.45704,19.80468 16.76563,33.7539 z m 0,0"
          id="path12"
          fill={pantsColor}
        />
        <path
          d="m 180.47776,286.50781 59.1875,-26.14062 -67.125,-151.98047 C 165.3137,92.023438 146.19651,84.621094 129.83714,91.847656 L 77.009014,115.17578 c -16.359375,7.22656 -23.765625,26.34766 -16.539062,42.70703 l 43.769528,99.09766 c 12.89844,29.20703 47.03125,42.42578 76.23828,29.52734 z m 0,0"
          id="path14"
          fill={primaryColor}
        />
        <path
          d="M 51.087139,4.085938 C 75.305889,-6.609375 103.61058,4.351562 114.30589,28.570312 125.0012,52.792969 114.04026,81.097656 89.821514,91.792969 65.602764,102.48828 37.298076,91.523438 26.602764,67.304688 15.903545,43.085938 26.868389,14.78125 51.087139,4.085938 Z m 0,0"
          id="path16"
          fill={currentSkinColor}
        />
        <path
          d="m 32.438702,269.26562 75.300778,-37.05468 c 6.40235,-3.14844 10.9336,-9.14844 12.20703,-16.17188 l 4.99219,-27.52734 -19.71484,-22.00781 -24.410158,13.15234 -3.121094,17.1875 -65.121094,32.04297 c -11.1484383,5.48437 -15.7382813,18.97265 -10.2539063,30.12109 5.5,11.17969 19.0000003,15.72656 30.1210943,10.25781 z m 0,0"
          id="path18"
          fill={currentSkinColor}
        />
        <path
          d="m 124.9387,188.51172 -44.124998,-8.85547 8.464843,-46.66797 c 2.21875,-12.22656 13.929685,-20.33984 26.156245,-18.12109 12.22657,2.21484 20.33985,13.92578 18.1211,26.15234 z m 0,0"
          id="path20"
          fill={secondaryColor}
        />
      </svg>
    </div>
  );
};

EnemyPlayer.propTypes = {
  body: PropTypes.instanceOf(Matter.Body).isRequired,
  club: PropTypes.oneOf([clubName.basel, clubName.luzern, clubName.stGallen]).isRequired,
};

export default EnemyPlayer;
