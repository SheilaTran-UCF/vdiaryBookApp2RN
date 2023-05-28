import { ColorsCommon } from './Color';
import { App } from './Image/App';
import { SplashScreen } from './Image/SplashScreen';

export const AppImages = {
  ...SplashScreen,
  ...App,
};

export const AppFonts = {
  Roboto_Black: 'Roboto-Black',
  Roboto_BlackItalic: 'Roboto-BlackItalic',
  Roboto_Bold: 'Roboto-Bold',
  Roboto_BoldItalic: 'Roboto-BoldItalic',
  Roboto_: 'Roboto-Black',
  Roboto_Italic: 'Roboto-Italic',
  Roboto_Light: 'Roboto-Light',
  Roboto_LightItalic: 'Roboto-LightItalic',
  Roboto_Medium: 'Roboto-Medium',
  Roboto_MediumItalic: 'Roboto-MediumItalic',
  Roboto_Regular: 'Roboto-Regular',
  Roboto_Thin: 'Roboto-Thin',
  Roboto_ThinItalic: 'Roboto-ThinItalic',
};

export const AppConstants = {
  APP_NAME: 'Vdiary Book',
};

export const AppColors = { ...ColorsCommon };
