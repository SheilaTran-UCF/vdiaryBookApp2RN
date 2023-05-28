// import { AppImages, ColorsCommon, FontsFamily } from '@/Assets';
import { CommonIconButton } from '@/Commons';
import React from 'react';
import {
  ImageStyle,
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import { NormalText } from '@/Theme';
import { AppImages } from '@/Assets';
import { Source } from 'react-native-fast-image';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
// import { moderateScale } from '@/Utils/ScaleDimensions';
// import { NormalButton } from '@/Theme/Button';

type Props = {
  title: string;
  function1?: () => void;
  function2?: () => void;
  function3?: () => void;
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
};
export const PersonalHeader = ({
  title,
  titleStyle,
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
  function3,
}: Props) => {
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <CommonIconButton
          source={AppImages.SearchIcon}
          width={25}
          height={25}
          containerStyle={styles.btnSearch}
          onPress={function3}
        />
        <TouchableOpacity style={styles.txtSearch} onPress={function3}>
          <NormalText text={title} style={[styles.title, titleStyle]} />
        </TouchableOpacity>
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
            onPress={function1}
          />
        )}
      </View>
      <View style={styles.line} />
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
    textAlignVertical: 'center',
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
  btnSearch: {
    marginRight: moderateScale(10),
  },
  txtSearch: {
    flex: 1,
    justifyContent: 'center',
  },
  line: {
    height: 3,
    width: '100%',
    backgroundColor: 'rgba(78, 89, 111, 0.1)',
  },
});
