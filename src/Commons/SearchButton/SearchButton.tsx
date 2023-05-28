import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  TouchableOpacity,
} from 'react-native';
type Props = {
  source: ImageSourcePropType;
  width: number;
  height: number;
  containerStyle?: StyleProp<ImageStyle>;
};
export const CommonSearchButton = ({
  source,
  width,
  height,
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity>
      <Image
        source={source}
        resizeMode={'contain'}
        style={[
          {
            width: moderateScale(width),
            height: moderateScale(height),
          },
          containerStyle,
        ]}
      />
    </TouchableOpacity>
  );
};
