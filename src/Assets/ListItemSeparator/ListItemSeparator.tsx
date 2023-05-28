import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const ListItemSeparator = (props: Props) => {
  const { style } = props;

  return (
    <View
      style={[{ width: '100%', height: 1, backgroundColor: '#d0d0d0' }, style]}
    />
  );
};

export default ListItemSeparator;
