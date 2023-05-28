import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React from 'react';
import { View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { NormalText } from '../Text';

type Props = {
  textHelper: string;
  textAction: string;
  onPressAction: () => void;
};

export const AlertStatus = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPressAction}>
      <View style={style.container}>
        <NormalText size={moderateScale(30)} color="#ffffff">
          <NormalText>
            {props.textHelper}
            {', '}
          </NormalText>
          <NormalText fontWeight="700">{props.textAction}</NormalText>
        </NormalText>
      </View>
    </TouchableWithoutFeedback>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    backgroundColor: 'rgba(139, 113, 227, 0.6)',
    bottom: 0,
    right: 0,
    left: 0,
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
});
