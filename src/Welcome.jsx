import React from 'react';
import PropTypes from 'prop-types';
import { GetAbsolutWidthPosition, GetAbsolutHeightPosition } from './Constants';

const styles = {
  button: {
    fontSize: GetAbsolutHeightPosition(3),
    width: '100%',
    fontFamily: '"04b_19", "Courier New"',
  },
};

const Welcome = ({ onStart }) => {
  const width = GetAbsolutWidthPosition(30);
  const x = GetAbsolutWidthPosition(50) - width / 2;

  return (
    <div
      style={{
        position: 'absolute',
        width,
        left: x,
        top: 0,
      }}
    >
      <svg viewBox="-100 -100 710 710" xmlns="http://www.w3.org/2000/svg">
        <g fill="#FFF" transform="translate(7.0291146,-1.0814023)">
          <path d="m 61.360665,37.84908 v 58.30974 c 0,49.62464 31.177606,93.82421 78.466455,112.59121 2.37785,29.04762 16.49135,56.22619 39.54522,75.60845 12.6512,10.63646 21.03096,24.89463 23.98852,40.33342 H 165.5001 v 49.88571 h -26.03486 v 62.35714 H 113.43038 V 461.8776 H 399.81382 V 436.93475 H 373.77896 V 374.57761 H 347.74411 V 324.6919 h -37.86076 c 2.95669,-15.43879 11.33731,-29.69613 23.98852,-40.33259 23.05473,-19.38309 37.16736,-46.56166 39.54521,-75.60928 47.28885,-18.767 78.46646,-62.96657 78.46646,-112.59121 V 37.84908 Z M 87.395521,96.15882 V 62.79193 H 139.46524 V 180.94125 C 107.71486,164.0857 87.395521,131.8878 87.395521,96.15882 Z M 347.74411,436.93475 H 165.5001 V 399.52046 H 347.74411 Z M 321.70925,374.57761 H 191.53496 v -24.94285 h 130.17429 z m -5.00998,-108.96618 c -18.30944,15.39389 -30.00951,36.43735 -33.17448,59.08047 H 229.71942 C 226.55531,302.04878 214.85438,281.00532 196.54493,265.61143 176.81572,249.0236 165.5001,225.10091 165.5001,199.97763 V 62.79193 h 182.24401 v 137.1857 c 0,25.12328 -11.31562,49.04597 -31.04484,65.6338 z M 425.84868,96.15882 c 0,35.72981 -20.31934,67.92771 -52.06972,84.78243 V 62.79193 h 52.06972 z" />
          <path d="m 255,79.226 -23.264,47.136 -52.02,7.559 37.643,36.691 -8.886,51.809 46.527,-24.461 46.526,24.46 -8.886,-51.809 37.643,-36.691 -52.02,-7.559 z m 6.683,88.354 -6.683,-3.514 -6.683,3.513 1.276,-7.441 -5.406,-5.27 7.471,-1.086 3.342,-6.771 3.342,6.771 7.471,1.086 -5.406,5.27 z" />
        </g>
        <g fill="#FFF" transform="scale(0.9047171,1.1053179)">
          <path
            d="m -24.96704,-25.877935 h -4.556402 l -15.330392,-34.884949 h -0.759401 v 47.557441 h 7.35669 q 1.423876,0 2.040888,0.56955 0.617013,0.522088 0.617013,1.423876 0,0.854325 -0.617013,1.4238751 -0.617012,0.5695502 -2.040888,0.5695502 h -14.71338 q -1.423875,0 -2.040888,-0.5695502 -0.617012,-0.5695501 -0.617012,-1.4238751 0,-0.901788 0.617012,-1.423876 0.617013,-0.56955 2.040888,-0.56955 h 3.369839 v -47.557441 h -2.515513 q -1.423876,0 -2.040888,-0.522087 -0.617013,-0.56955 -0.617013,-1.471338 0,-0.901788 0.617013,-1.423876 0.617012,-0.56955 2.040888,-0.56955 h 9.777278 l 15.09308,34.362861 14.855767,-34.362861 h 9.7772784 q 1.471338,0 2.08835069,0.56955 0.61701271,0.522088 0.61701271,1.423876 0,0.901788 -0.61701271,1.471338 -0.61701269,0.522087 -2.08835069,0.522087 h -2.4680508 v 47.557441 h 3.3223761 q 1.47133797,0 2.08835067,0.56955 0.61701271,0.522088 0.61701271,1.423876 0,0.854325 -0.61701271,1.4238751 -0.6170127,0.5695502 -2.08835067,0.5695502 H -16.423788 q -1.423875,0 -2.08835,-0.5695502 -0.617013,-0.5695501 -0.617013,-1.4238751 0,-0.901788 0.617013,-1.423876 0.617012,-0.56955 2.08835,-0.56955 h 7.3566903 V -60.762884 H -9.921423 Z"
            id="path73"
          />
          <path
            d="M 52.254473,-28.820611 H 11.62656 q 1.044175,7.73639 6.454902,12.482642 5.458189,4.698789 13.479354,4.698789 4.461477,0 9.350116,-1.471338 4.888639,-1.471338 7.973703,-3.891926 0.901787,-0.711938 1.566263,-0.711938 0.7594,0 1.32895,0.617013 0.56955,0.56955 0.56955,1.376413 0,0.806862 -0.7594,1.566263 -2.278201,2.373125 -8.11609,4.4614762 -5.790427,2.0408881 -11.913092,2.0408881 -10.251903,0 -17.133968,-6.6922143 -6.8346019,-6.739678 -6.8346019,-16.279643 0,-8.685641 6.4074399,-14.90323 6.454902,-6.21759 15.947405,-6.21759 9.777278,0 16.089793,6.40744 6.312514,6.359977 6.217589,16.516955 z m -4.034314,-4.034313 q -1.186563,-6.59729 -6.265052,-10.726529 -5.031026,-4.129239 -12.008016,-4.129239 -6.97699,0 -12.008017,4.081777 -5.031026,4.081776 -6.265052,10.773991 z"
            id="path75"
          />
          <path
            d="m 90.936424,-70.777474 v 10.299366 h -5.885352 v -10.299366 z m 0.142388,20.456344 v 37.115687 h 15.662628 q 1.47134,0 2.08835,0.56955 0.61702,0.522088 0.61702,1.423876 0,0.854325 -0.61702,1.4238751 -0.61701,0.5695502 -2.08835,0.5695502 H 71.42933 q -1.423875,0 -2.040888,-0.5695502 -0.617013,-0.5695501 -0.617013,-1.4238751 0,-0.901788 0.617013,-1.423876 0.617013,-0.56955 2.040888,-0.56955 H 87.09196 V -46.286816 H 75.463644 q -1.423875,0 -2.088351,-0.569551 -0.617012,-0.56955 -0.617012,-1.423875 0,-0.901788 0.617012,-1.471338 0.617013,-0.56955 2.088351,-0.56955 z"
            id="path77"
          />
          <path
            d="m 160.42155,-47.710692 q 0,-1.376413 0.56955,-1.993425 0.56955,-0.617013 1.42388,-0.617013 0.90178,0 1.47134,0.617013 0.56955,0.617012 0.56955,2.08835 v 6.834602 q 0,1.423876 -0.56955,2.040889 -0.56956,0.617012 -1.47134,0.617012 -0.80687,0 -1.37642,-0.522087 -0.52208,-0.522088 -0.61701,-1.708651 -0.28477,-2.847751 -2.94267,-4.698789 -3.89193,-2.657901 -10.29937,-2.657901 -6.69222,0 -10.39429,2.705364 -2.80029,2.040888 -2.80029,4.556401 0,2.847751 3.32238,4.746252 2.2782,1.32895 8.63817,2.040888 8.30594,0.901788 11.5334,2.040888 4.60386,1.661188 6.8346,4.603864 2.2782,2.942676 2.2782,6.359977 0,5.078489 -4.88864,9.065341 -4.88864,3.9393883 -14.33368,3.9393883 -9.44504,0 -15.47278,-4.7937143 0,1.613726 -0.18985,2.088351 -0.18985,0.4746251 -0.71194,0.8068627 -0.47462,0.3322376 -1.09164,0.3322376 -0.85432,0 -1.42387,-0.6170127 -0.56955,-0.6170126 -0.56955,-2.0408886 v -8.211015 q 0,-1.423875 0.52209,-2.040888 0.56955,-0.617013 1.47133,-0.617013 0.85433,0 1.42388,0.617013 0.61701,0.56955 0.61701,1.566263 0,2.183276 1.09164,3.654614 1.66119,2.278201 5.26834,3.797001 3.65461,1.471338 8.92295,1.471338 7.78385,0 11.58086,-2.895213 3.797,-2.895214 3.797,-6.122665 0,-3.702076 -3.84447,-5.932814 -3.89192,-2.230739 -11.34354,-2.990139 -7.40415,-0.7594 -10.6316,-1.993426 -3.22745,-1.234025 -5.03103,-3.702076 -1.80357,-2.468051 -1.80357,-5.315801 0,-5.125952 5.03102,-8.116091 5.03103,-3.037601 12.00802,-3.037601 8.25848,0 13.43189,4.034314 z"
            id="path79"
          />
          <path
            d="m 197.34739,-50.32113 h 21.6429 q 1.42388,0 2.04089,0.56955 0.61701,0.56955 0.61701,1.471338 0,0.854325 -0.61701,1.423875 -0.61701,0.569551 -2.04089,0.569551 h -21.6429 v 26.531546 q 0,3.464763 2.75282,5.790427 2.80029,2.325663 8.16355,2.325663 4.03432,0 8.73311,-1.186563 4.69879,-1.234025 7.30922,-2.752826 0.94925,-0.617012 1.56627,-0.617012 0.7594,0 1.32895,0.617012 0.56955,0.56955 0.56955,1.376413 0,0.711938 -0.61701,1.328951 -1.51881,1.566263 -7.40416,3.4173007 -5.83789,1.8035756 -11.20115,1.8035756 -6.97699,0 -11.10623,-3.2749133 -4.12924,-3.274914 -4.12924,-8.828028 v -26.531546 h -7.35669 q -1.42387,0 -2.04089,-0.569551 -0.61701,-0.56955 -0.61701,-1.471337 0,-0.854326 0.61701,-1.423876 0.61702,-0.56955 2.04089,-0.56955 h 7.35669 v -11.770704 q 0,-1.423875 0.56955,-2.040888 0.56955,-0.617013 1.42388,-0.617013 0.90179,0 1.47134,0.617013 0.56955,0.617013 0.56955,2.040888 z"
            id="path81"
          />
          <path
            d="m 285.39036,-28.820611 h -40.62791 q 1.04418,7.73639 6.4549,12.482642 5.45819,4.698789 13.47936,4.698789 4.46147,0 9.35011,-1.471338 4.88864,-1.471338 7.97371,-3.891926 0.90178,-0.711938 1.56626,-0.711938 0.7594,0 1.32895,0.617013 0.56955,0.56955 0.56955,1.376413 0,0.806862 -0.7594,1.566263 -2.2782,2.373125 -8.11609,4.4614762 -5.79043,2.0408881 -11.91309,2.0408881 -10.25191,0 -17.13397,-6.6922143 -6.8346,-6.739678 -6.8346,-16.279643 0,-8.685641 6.40744,-14.90323 6.4549,-6.21759 15.9474,-6.21759 9.77728,0 16.08979,6.40744 6.31252,6.359977 6.21759,16.516955 z m -4.03431,-4.034313 q -1.18656,-6.59729 -6.26505,-10.726529 -5.03103,-4.129239 -12.00802,-4.129239 -6.97699,0 -12.00801,4.081777 -5.03103,4.081776 -6.26506,10.773991 z"
            id="path83"
          />
          <path
            d="m 317.33263,-50.32113 v 10.062053 q 7.78386,-7.024452 11.62832,-9.017878 3.89193,-2.040888 7.16684,-2.040888 3.55969,0 6.59729,2.420588 3.08506,2.373126 3.08506,3.607152 0,0.901787 -0.61701,1.5188 -0.56955,0.56955 -1.47134,0.56955 -0.47462,0 -0.80686,-0.142387 -0.33224,-0.18985 -1.23403,-1.091638 -1.66118,-1.661188 -2.89521,-2.278201 -1.23402,-0.617013 -2.42059,-0.617013 -2.61044,0 -6.31251,2.088351 -3.65462,2.088351 -12.71996,10.204441 v 21.832757 h 17.65606 q 1.47134,0 2.08835,0.56955 0.61701,0.522088 0.61701,1.423876 0,0.854325 -0.61701,1.4238751 -0.61701,0.5695502 -2.08835,0.5695502 h -31.2778 q -1.42387,0 -2.04089,-0.5220877 -0.61701,-0.5695506 -0.61701,-1.4238756 0,-0.806863 0.56955,-1.32895 0.61701,-0.56955 2.08835,-0.56955 h 9.63489 v -33.223761 h -7.35669 q -1.42387,0 -2.04089,-0.569551 -0.61701,-0.56955 -0.61701,-1.471337 0,-0.854326 0.56955,-1.423876 0.61701,-0.56955 2.08835,-0.56955 z"
            id="path85"
          />
          <path
            d="m 377.75241,-46.286816 v 33.081373 h 17.51367 q 1.42388,0 2.04089,0.56955 0.61701,0.522088 0.61701,1.423876 0,0.854325 -0.61701,1.4238751 -0.61701,0.5695502 -2.04089,0.5695502 h -31.18287 q -1.42388,0 -2.04089,-0.5695502 -0.61701,-0.5695501 -0.61701,-1.4238751 0,-0.901788 0.61701,-1.423876 0.61701,-0.56955 2.04089,-0.56955 h 9.63489 v -33.081373 h -8.63818 q -1.42387,0 -2.04089,-0.569551 -0.61701,-0.56955 -0.61701,-1.471337 0,-0.854326 0.61701,-1.423876 0.61702,-0.56955 2.04089,-0.56955 h 8.63818 v -6.02774 q 0,-5.031026 4.08178,-8.733102 4.08177,-3.702077 10.82145,-3.702077 5.64804,0 12.05548,1.044176 2.42059,0.3797 2.89521,0.901787 0.52209,0.522088 0.52209,1.376413 0,0.854326 -0.56955,1.423876 -0.56955,0.522088 -1.5188,0.522088 -0.3797,0 -1.28149,-0.142388 -7.16684,-1.091638 -12.10294,-1.091638 -5.22088,0 -8.06863,2.562976 -2.80029,2.562976 -2.80029,5.837889 v 6.02774 h 18.65277 q 1.42388,0 2.04089,0.56955 0.61701,0.56955 0.61701,1.471338 0,0.854325 -0.61701,1.423875 -0.61701,0.569551 -2.04089,0.569551 z"
            id="path87"
          />
          <path
            d="m 443.58292,-33.377012 v 14.428605 h 6.54983 q 3.51222,0 4.98356,1.376413 1.5188,1.32895 1.5188,3.512226 0,2.135813 -1.5188,3.512226 -1.47134,1.3289503 -4.98356,1.3289503 h -22.82947 q -3.46477,0 -4.98357,-1.3289503 -1.47134,-1.376413 -1.47134,-3.559689 0,-2.135813 1.47134,-3.464763 1.5188,-1.376413 4.98357,-1.376413 h 6.54982 v -14.428605 l -16.08979,-23.636333 q -3.22745,0 -4.74625,-1.376413 -1.47134,-1.376413 -1.47134,-3.512226 0,-2.183276 1.47134,-3.512226 1.5188,-1.376413 5.03103,-1.376413 l 8.82802,0.04746 q 3.51223,0 4.98357,1.328951 1.5188,1.32895 1.5188,3.512226 0,3.274914 -3.84447,4.888639 l 9.20773,13.57428 9.01788,-13.57428 q -2.13581,-0.806863 -3.0376,-2.040888 -0.90179,-1.234025 -0.90179,-2.847751 0,-2.183276 1.47134,-3.512226 1.5188,-1.328951 5.03103,-1.376413 l 9.16026,0.04746 q 3.51223,0 4.98357,1.328951 1.5188,1.32895 1.5188,3.512226 0,2.183276 -1.5188,3.559689 -1.5188,1.32895 -4.93611,1.32895 z"
            id="path89"
          />
          <path
            d="m 477.09145,-18.948407 v -38.064938 h -1.5188 q -3.51222,0 -5.03102,-1.32895 -1.47134,-1.376413 -1.47134,-3.559689 0,-2.183276 1.47134,-3.512226 1.5188,-1.376413 5.03102,-1.376413 h 24.39573 q 8.73311,0 14.04891,4.888639 5.3158,4.841177 5.3158,11.533391 0,3.179989 -1.23402,5.980277 -1.23403,2.800289 -3.74954,5.173414 4.60386,2.752826 6.88206,6.454903 2.32567,3.654613 2.32567,8.30594 0,3.702076 -1.66119,6.882065 -1.23403,2.420588 -3.0376,3.844463 -2.42059,1.993426 -5.93282,3.274914 -3.51222,1.2340253 -8.78056,1.2340253 h -28.57244 q -3.51222,0 -5.03102,-1.3289503 -1.47134,-1.376413 -1.47134,-3.559689 0,-2.135813 1.5188,-3.464763 1.5188,-1.376413 4.98356,-1.376413 z m 9.72982,-23.921108 h 10.67906 q 5.74297,0 9.53997,-2.895214 2.56298,-1.945963 2.56298,-4.841176 0,-2.562976 -2.42059,-4.461477 -2.42059,-1.945963 -7.68893,-1.945963 h -12.67249 z m 0,23.921108 H 503.623 q 5.93281,0 8.3534,-1.756113 1.85104,-1.328951 1.85104,-3.797002 0,-2.942676 -3.65461,-5.790427 -3.65462,-2.847751 -10.48922,-2.847751 h -12.86234 z"
            id="path91"
          />
          <path
            d="m 576.81022,-28.820611 h -40.62791 q 1.04418,7.73639 6.4549,12.482642 5.45819,4.698789 13.47936,4.698789 4.46147,0 9.35011,-1.471338 4.88864,-1.471338 7.97371,-3.891926 0.90178,-0.711938 1.56626,-0.711938 0.7594,0 1.32895,0.617013 0.56955,0.56955 0.56955,1.376413 0,0.806862 -0.7594,1.566263 -2.2782,2.373125 -8.11609,4.4614762 -5.79043,2.0408881 -11.91309,2.0408881 -10.25191,0 -17.13397,-6.6922143 -6.8346,-6.739678 -6.8346,-16.279643 0,-8.685641 6.40744,-14.90323 6.4549,-6.21759 15.9474,-6.21759 9.77728,0 16.0898,6.40744 6.31251,6.359977 6.21758,16.516955 z m -4.03431,-4.034313 q -1.18656,-6.59729 -6.26505,-10.726529 -5.03103,-4.129239 -12.00802,-4.129239 -6.97699,0 -12.00801,4.081777 -5.03103,4.081776 -6.26506,10.773991 z"
            id="path93"
          />
          <path
            d="m 608.75246,-50.32113 v 10.062053 q 7.78386,-7.024452 11.62832,-9.017878 3.89193,-2.040888 7.16684,-2.040888 3.55969,0 6.59729,2.420588 3.08506,2.373126 3.08506,3.607152 0,0.901787 -0.61701,1.5188 -0.56955,0.56955 -1.47134,0.56955 -0.47462,0 -0.80686,-0.142387 -0.33224,-0.18985 -1.23403,-1.091638 -1.66118,-1.661188 -2.89521,-2.278201 -1.23402,-0.617013 -2.42059,-0.617013 -2.61044,0 -6.31251,2.088351 -3.65462,2.088351 -12.71996,10.204441 v 21.832757 h 17.65606 q 1.47134,0 2.08835,0.56955 0.61701,0.522088 0.61701,1.423876 0,0.854325 -0.61701,1.4238751 -0.61701,0.5695502 -2.08835,0.5695502 h -31.2778 q -1.42387,0 -2.04089,-0.5220877 -0.61701,-0.5695506 -0.61701,-1.4238756 0,-0.806863 0.56955,-1.32895 0.61701,-0.56955 2.08835,-0.56955 h 9.63489 v -33.223761 h -7.35669 q -1.42387,0 -2.04088,-0.569551 -0.61702,-0.56955 -0.61702,-1.471337 0,-0.854326 0.56955,-1.423876 0.61702,-0.56955 2.08835,-0.56955 z"
            id="path95"
          />
        </g>
      </svg>
      <button className="btn btn-outline-secondary" type="button" onClick={onStart} style={styles.button}>
        Spiu starte
      </button>
    </div>
  );
};

Welcome.propTypes = {
  onStart: PropTypes.func.isRequired,
};

export default Welcome;
