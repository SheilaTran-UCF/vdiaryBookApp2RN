/* eslint-disable react-native/no-inline-styles */
// import { moderateScale } from '@/Utils/ScaleDimensions';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { GradientButtonProps } from '../types';
// import { GradientButtonProps } from '../type';

export const GradientButton = ({
  onPress,
  useAngel,
  angel,
  start,
  end,
  location,
  color,
  containerStyle,
  style,
  btnText,
}: GradientButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={color || ['#0956A3', '#00BAFF']}
        locations={location || [-0.6364, 1.1263]}
        start={start || { x: 1, y: 1 }}
        end={end || { x: 1, y: 0 }}
        angle={angel || 360}
        useAngle={useAngel}
        style={[
          {
            marginHorizontal: moderateScale(40),
            // height: moderateScale(100),
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: moderateScale(25),
          },
          containerStyle,
        ]}>
        <Text
          style={[
            {
              color: '#FFFFFF',
              fontSize: moderateScale(25),
              fontWeight: '700',
            },
            style,
          ]}>
          {btnText}
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
