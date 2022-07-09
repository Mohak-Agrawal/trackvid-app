import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const COLORS = {
  primary: '#0099cb',
  secondary: '#0c4f95',
  gray: '#6A6A6A',
  lightGray: '#EFEFEF',
  red: 'red',
  green: 'green',
  black: '#000000',
  white: '#FFFFFF',
};

export const SIZES = {
  // global sizes
  margin: 10,
  iconSize: 24,
  radius: 5,
  padding: 15,

  // font sizes
  h1: 48,
  h2: 36,
  h3: 20,
  h4: 12,
  body1: 48,
  body2: 36,
  body3: 20,
  body4: 12,

  // app dimensions
  width,
  height,
};

export const FONTS = {
  h1: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h1, lineHeight: 52},
  h2: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h2, lineHeight: 40},
  h3: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h3, lineHeight: 26},
  h4: {fontFamily: 'Nunito-Bold', fontSize: SIZES.h4, lineHeight: 18},
  body1: {
    fontFamily: 'Nunito-Medium',
    fontSize: SIZES.body1,
    lineHeight: 52,
  },
  body2: {
    fontFamily: 'Nunito-Medium',
    fontSize: SIZES.body2,
    lineHeight: 40,
  },
  body3: {
    fontFamily: 'Nunito-Medium',
    fontSize: SIZES.body3,
    lineHeight: 26,
  },
  body4: {
    fontFamily: 'Nunito-Medium',
    fontSize: SIZES.body4,
    lineHeight: 18,
  },
};

const theme = {COLORS, SIZES, FONTS};

export default theme;
