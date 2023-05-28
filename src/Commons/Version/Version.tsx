// import { ColorsCommon, FontsFamily } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NormalText } from '@/Theme';
import React from 'react';
import { StyleSheet, View } from 'react-native';

export const VersionElement = () => {
  return (
    <View style={styles.container}>
      <NormalText text={'Version 1'} style={styles.text} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: moderateScale(10),
  },
  text: {
    fontFamily: FontsFamily.Roboto_Regular,
    color: ColorsCommon.Grey,
    fontSize: moderateScale(12),
  },
});
