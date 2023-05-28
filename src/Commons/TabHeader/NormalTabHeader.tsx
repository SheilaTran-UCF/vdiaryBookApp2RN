/* eslint-disable react-native/no-inline-styles */
// import { ColorsCommon, CtButton } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NormalText } from '@/Theme';
import { translate } from '@/Translation/i18n';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

type Props = {
  title: string;
  goBack: () => void;
  containerStyle?: StyleProp<ViewStyle>;
  titleStyle?: StyleProp<TextStyle>;
  rightText?: string;
};

export const NormalTabHeader = ({
  title,
  titleStyle,
  containerStyle,
  goBack,
}: Props) => {
  //   const [t] = useTranslation();
  return (
    <View>
      <View style={[styles.container, containerStyle]}>
        <NormalText text={title} style={[styles.title, titleStyle]} />
        <TouchableOpacity
          style={{ flex: 1, justifyContent: 'flex-end' }}
          onPress={goBack}>
          <NormalText text={translate('Cancel')} style={styles.text} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          height: 2,
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
    alignItems: 'flex-end',
    paddingHorizontal: moderateScale(19),
  },
  title: {
    fontSize: moderateScale(21),
    color: ColorsCommon.DarkGrey,
    flex: 1,
  },
  text: {
    fontSize: moderateScale(15),
  },
});
