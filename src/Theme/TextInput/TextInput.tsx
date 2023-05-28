/* eslint-disable react-native/no-inline-styles */
import { ColorsCommon } from '@/Assets/Color';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React, { LegacyRef } from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
type Props = {
  containerStyle?: StyleProp<ViewStyle>;
  LeftIcon?: ImageSourcePropType;
  leftIconStyle?: StyleProp<ImageStyle>;
  RightIcon?: ImageSourcePropType;
  rightIconStyle?: StyleProp<ImageStyle>;
  inputProps: TextInputProps;
  innerRef?: LegacyRef<TextInput>;
};
export const NormalTextInput = ({
  containerStyle,
  leftIconStyle,
  rightIconStyle,
  LeftIcon,
  RightIcon,
  innerRef,
  inputProps,
}: Props) => {
  const { style, placeholderTextColor, placeholder, ...others } = inputProps;
  const [_sercureText, setSercureText] = React.useState(
    inputProps.secureTextEntry ? true : false,
  );
  return (
    <View style={[styles.container, containerStyle]}>
      {!!LeftIcon && (
        <Image
          source={LeftIcon}
          resizeMode={'contain'}
          style={[styles.leftIcon, leftIconStyle]}
        />
      )}
      <TextInput
        placeholder={placeholder ? placeholder : ''}
        ref={innerRef}
        placeholderTextColor={
          placeholderTextColor ? placeholderTextColor : ColorsCommon.Grey
        }
        style={[
          {
            fontSize: moderateScale(32),
            flex: 1,
            padding: 0,
          },
          style,
        ]}
        {...others}
        secureTextEntry={_sercureText}
      />
      {!!RightIcon && (
        <TouchableOpacity onPress={() => setSercureText(!_sercureText)}>
          <Image
            source={RightIcon}
            resizeMode={'contain'}
            style={[styles.rightIcon, rightIconStyle]}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    // height: moderateScale(100),
    width: '100%',
    flexDirection: 'row',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(12),
    borderColor: 'rgba(78, 89, 111, 0.2)',
    borderRadius: moderateScale(25),
    borderWidth: 1,
    alignItems: 'center',
  },
  leftIcon: {
    marginRight: moderateScale(20),
  },
  rightIcon: {
    marginLeft: moderateScale(20),
  },
});
