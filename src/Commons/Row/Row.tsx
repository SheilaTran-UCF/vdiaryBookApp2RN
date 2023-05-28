import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface RowProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Row = (props: RowProps) => {
  const { children, style } = props;
  return <View style={[styles.row, style]}>{children}</View>;
};

export default Row;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 5,
  },
});
