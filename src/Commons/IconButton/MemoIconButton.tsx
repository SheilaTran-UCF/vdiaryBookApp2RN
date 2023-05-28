import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import { NormalText } from '@/Theme';
import Image, { ImageStyle, Source } from 'react-native-fast-image';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';

type Props = {
  source: Source;
  width: number;
  height: number;
  imageStyle?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  content: string;
  onPress: () => void;
};

export const ButtonMemoIcon = ({
  onPress,
  content,
  source,
  width,
  height,
  imageStyle,
  containerStyle,
  style,
}: Props) => {
  const TextComponent = React.useMemo(() => {
    return <NormalText text={content} style={[styles.belowText, style]} />;
  }, [content]);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[{ flexDirection: 'row', alignItems: 'center' }, containerStyle]}>
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
      />
      {TextComponent}
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
