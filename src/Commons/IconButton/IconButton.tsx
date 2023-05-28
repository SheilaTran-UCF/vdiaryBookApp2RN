import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { NormalText } from '@/Theme';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import Image, { ImageStyle, Source } from 'react-native-fast-image';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import AppIcon from '../AppIcon/AppIcon';
import { TIcon } from '@/Types';

type Props = {
  source?: Source;
  width?: number;
  height?: number;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  text?: string;
  tintColor?: string;
  onPress?: () => void;
  hasNotBelowText?: boolean;
  component?: any;
  icon?: TIcon;
};

export const CommonIconButton: React.FC<Props> = ({
  onPress,
  text,
  source,
  width = 0,
  height = 0,
  imageStyle,
  tintColor,
  containerStyle,
  style,
  hasNotBelowText,
  component,
  icon,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ flexDirection: 'row', alignItems: 'center' }, containerStyle]}>
      {!!source && (
        <Image
          source={source}
          resizeMode={'contain'}
          style={[
            {
              width: moderateScale(width),
              height: moderateScale(height),
            },
            imageStyle,
          ]}
          tintColor={tintColor}
        />
      )}
      {!!icon && <AppIcon {...icon} />}
      {!!text && (
        <NormalText
          text={text}
          style={[hasNotBelowText ? {} : styles.belowText, style]}
        />
      )}
      {component}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  belowText: {
    fontSize: moderateScale(27),
    color: ColorsCommon.DarkGrey,
    marginLeft: moderateScale(20),
    marginRight: moderateScale(50),
  },
});
