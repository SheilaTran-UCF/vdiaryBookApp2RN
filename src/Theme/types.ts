import {
  StyleProp,
  TextProps,
  ViewProps,
  ViewStyle,
  ImageSourcePropType,
  TextStyle,
} from 'react-native';
import { Source } from 'react-native-fast-image';

export type NormalTextProps = TextProps & {
  text?: string;
  size?: number;
  color?: string;
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900';
};

export type TransTextProps = NormalTextProps & {
  textKey: string;
};

export type GradientButtonProps = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  color?: Array<string>;
  location?: Array<number>;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<ViewStyle | TextStyle>;
  btnText: string;
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  angel?: number;
  useAngel?: boolean;
  onPress: () => void;
};
export type ModalAction = {
  icon: ImageSourcePropType | Source | any;
  content: string;
  onPress: string;
  width: number;
  height: number;
};

export interface NormalLoadingProps extends ViewProps {
  isLoading: boolean;
  color?: string;
  mini?: boolean;
  borderRadius?: number;
  text?: string;
}
export type TopButton = {
  image: ImageSourcePropType;
  text: string;
  id: string;
  width: number;
  height: number;
  navigate: string;
};
