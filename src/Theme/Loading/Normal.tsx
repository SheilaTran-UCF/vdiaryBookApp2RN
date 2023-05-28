import { AppColors } from '@/Assets';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { MaterialIndicator } from 'react-native-indicators';
import { NormalLoadingProps } from '../types';

export const NormalLoading: React.FC<NormalLoadingProps> = props => {
  const { isLoading, mini = false, borderRadius = 0 } = props;
  if (isLoading) {
    return (
      <View style={[styles.container, { borderRadius: borderRadius }]}>
        <View
          style={[
            {
              flexDirection: 'row',
            },
            mini ? { backgroundColor: 'transparent' } : {},
          ]}>
          <MaterialIndicator size={moderateScale(25)} color={AppColors.main} />
        </View>
      </View>
    );
  } else {
    return null;
  }
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(51,51,51,0.3)',
    zIndex: 10,
  },
  indicatorStyle: {
    height: moderateScale(60),
    width: moderateScale(60),
    borderRadius: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    backgroundColor: 'rgba(214, 214, 229, 0.87)',
    flexDirection: 'row',
  },
  text: {
    fontSize: moderateScale(20),
  },
});
