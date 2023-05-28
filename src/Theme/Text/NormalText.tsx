/* eslint-disable react-native/no-inline-styles */
import { AppColors, AppFonts } from '@/Assets';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React from 'react';
import { Text } from 'react-native';
import { NormalTextProps } from '../types';

export const NormalText: React.FC<NormalTextProps> = (
  props: NormalTextProps,
) => {
  const { text, size, color, fontWeight, style, children, ...others } = props;

  return (
    <Text
      {...others}
      style={[
        {
          fontFamily: AppFonts.Roboto_Regular,
          fontSize: size ? size : moderateScale(20),
          fontWeight: fontWeight ? fontWeight : '400',
          color: color ? color : AppColors.BlueText,
        },
        style,
      ]}>
      {text ? text : ''}
      {children ? children : ''}
    </Text>
  );
};
