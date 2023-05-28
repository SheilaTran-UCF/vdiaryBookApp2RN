import { AppImages } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { translate } from '@/Translation/i18n';
import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';
import { CommonIconButton } from '../IconButton';
import { NormalTextInput } from '../TextInput';

type Props = {
  placeholder?: string;
  onSearch?: (key: string) => void;
  containerStyle?: StyleProp<ViewStyle>;
  onChangeText?: (name: string) => void;
};

export const SearchBarButton = ({
  placeholder,
  onSearch,
  containerStyle,
  onChangeText,
}: Props) => {
  const [value, setValue] = React.useState('');

  const _onChangeText = (name: string) => {
    setValue(name);
    onChangeText && onChangeText(name);
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <NormalTextInput
        icon={{
          name: 'search-outline',
          type: 'ios',
          size: moderateScale(18),
          color: ColorsCommon.black,
        }}
        inputProps={{
          placeholder: placeholder || `${translate('DefaultPlaceholder')}`,
          style: styles.text,
          value: value,
          onChangeText: _onChangeText,
          onEndEditing: () => onSearch?.(value),
        }}
        containerStyle={{
          backgroundColor: '#e2e2e2',
          borderWidth: 0,
          paddingVertical: 0,
          flex: 1,
        }}
      />
      {/* <CommonIconButton
        source={AppImages.SearchIcon}
        width={15.32}
        height={15.58}
        onPress={() => onSearch?.(value)}
      /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#e2e2e2',
    borderRadius: moderateScale(100),
    paddingHorizontal: moderateScale(15),
    paddingVertical: moderateScale(12),
    alignItems: 'center',
    marginVertical: moderateScale(16),
    marginHorizontal: moderateScale(16),
  },
  icon: {
    width: moderateScale(15.32),
    height: moderateScale(15.587),
  },
  text: {
    fontSize: moderateScale(15),
    color: ColorsCommon.MiddleGrey,
  },
});
