/* eslint-disable react-native/no-inline-styles */
import { AppImages } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NormalText } from '@/Theme';
import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { CommonIconButton } from '@/Commons';

type Props = {
  title: string;
  goBack: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
};

export const CommonTabHeader2: React.FC<Props> = ({
  title,
  titleStyle,
  containerStyle,
  goBack,
}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: moderateScale(17),
      }}>
      <View style={[styles.container, containerStyle]}>
        <CommonIconButton
          source={AppImages.backBtn}
          width={30}
          height={30}
          onPress={goBack}
          containerStyle={{ marginRight: moderateScale(17) }}
        />
        <NormalText text={title} style={[styles.title, titleStyle]} />
      </View>
      <NormalText
        text={'v1.1.5(08)'}
        style={{
          color: 'gray',
          fontSize: moderateScale(12),
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: moderateScale(21),
    color: ColorsCommon.DarkGrey,
    flex: 1,
    fontFamily: FontsFamily.Roboto_Medium,
  },
});
