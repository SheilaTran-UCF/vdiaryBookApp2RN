import { Dimensions, Platform, PixelRatio } from 'react-native';

let { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

if (SCREEN_WIDTH > SCREEN_HEIGHT) {
  const h = SCREEN_HEIGHT;
  SCREEN_HEIGHT = SCREEN_WIDTH;
  SCREEN_WIDTH = h;
}

const scale = SCREEN_WIDTH / 375;
// const THEME_BASE_WIDTH = 320;

export function actuatedNormalize(size: number) {
  const newSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
}

export function moderateScale(size: number, factor = 0.7) {
  const newSize = size * scale;
  const newPixelRatioSize = Platform.OS === 'ios' ? newSize : newSize - 2;
  return size + (newPixelRatioSize - size) * factor;
}
