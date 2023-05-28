/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  StyleProp,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  TextStyle,
} from 'react-native';

type Prop = {
  width?: number;
  height?: number;
  backgroundColor?: string;
  borderRadius?: number;
  color?: string;
  fontSize?: number;
  containerStyle?: StyleProp<ViewStyle>;
  style?: StyleProp<TextStyle>;
  btnText?: string;
  disable?: boolean;
  onPress: () => void;
  skipStyleContainerDefault?: boolean;
};

export const NormalButton = ({
  onPress,
  width,
  height,
  backgroundColor,
  borderRadius,
  color,
  fontSize,
  containerStyle,
  style,
  btnText,
  disable,
  skipStyleContainerDefault,
}: Prop) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={disable} activeOpacity={0.5}>
      <View
        style={[
          skipStyleContainerDefault
            ? {}
            : {
                backgroundColor: backgroundColor || 'red',
                width: width,
                height: height,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: borderRadius || 8,
                alignSelf: 'center',
                opacity: disable ? 0.5 : 1,
              },
          containerStyle,
        ]}>
        <Text
          style={[
            {
              color: color ? color : '#FFFFFF',
              fontSize: fontSize ? fontSize : 25,
              fontWeight: '700',
            },
            style,
          ]}>
          {btnText}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
