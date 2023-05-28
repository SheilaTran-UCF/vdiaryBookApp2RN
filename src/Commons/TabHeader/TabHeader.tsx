/* eslint-disable react-native/no-inline-styles */
// import { AppImages, ColorsCommon, FontsFamily } from '@/Assets';
import { CommonIconButton } from '@/Commons';
import React, { ReactNode } from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { NormalText } from '@/Theme';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import { NormalButton } from '@/Theme/Button';
import { Source } from 'react-native-fast-image';
import { AppImages } from '@/Assets';
import { NavigationController } from '@/Navigators/Services';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
// import { NavigationController } from '@/Navigators/NavigationController';

type Props = {
  title: string;
  canGoBack?: boolean;
  goBack?: () => void;
  cancel?: () => void;
  cancelText?: string;
  function1?: () => void;
  function2?: () => void;
  imageSource1?: Source;
  imageSource2?: Source;
  image1Width?: number;
  image1Height?: number;
  image2Width?: number;
  image2Height?: number;
  image1Style?: StyleProp<ImageStyle>;
  image2Style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  tintColor?: string;
  renderRight?: ReactNode;
};
export const CommonTabHeader = ({
  title,
  titleStyle,
  canGoBack,
  goBack,
  cancel,
  cancelText,
  imageSource1,
  imageSource2,
  image1Width,
  image1Height,
  image2Width,
  image2Height,
  image1Style,
  image2Style,
  containerStyle,
  function1,
  function2,
  tintColor,
  renderRight,
}: Props) => {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        {canGoBack && (
          <CommonIconButton
            source={AppImages.backBtn}
            width={30}
            height={30}
            onPress={() => {
              goBack ? goBack() : NavigationController.goBack();
            }}
            containerStyle={{ marginRight: moderateScale(17) }}
          />
        )}
        <NormalText text={title} style={[styles.title, titleStyle]} />
        {!!imageSource2 && (
          <CommonIconButton
            source={imageSource2}
            width={image2Width}
            height={image2Height}
            containerStyle={[{ marginRight: moderateScale(40) }, image2Style]}
            onPress={function2}
          />
        )}
        {!!imageSource1 && (
          <CommonIconButton
            source={imageSource1}
            width={image1Width}
            height={image1Height}
            containerStyle={image1Style}
            tintColor={tintColor}
            onPress={function1}
          />
        )}
        {!!cancel && (
          <NormalButton
            btnText={cancelText}
            onPress={cancel}
            containerStyle={styles.cancelBtn}
            style={styles.btnText}
          />
        )}
        {renderRight}
      </View>
      <View
        style={{
          height: 3,
          width: '100%',
          backgroundColor: 'rgba(78, 89, 111, 0.1)',
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: moderateScale(15),
    alignItems: 'center',
    paddingHorizontal: moderateScale(17),
  },
  title: {
    fontSize: moderateScale(21),
    color: ColorsCommon.DarkGrey,
    flex: 1,
    fontFamily: FontsFamily.Roboto_Medium,
  },
  cancelBtn: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 0,
    paddingVertical: 0,
    borderWidth: 0,
  },
  btnText: {
    fontSize: moderateScale(15),
    color: ColorsCommon.BlueText,
    fontWeight: '400',
  },
});
