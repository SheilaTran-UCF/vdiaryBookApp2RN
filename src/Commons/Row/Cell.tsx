import React from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { StyleSheet, View } from 'react-native';

interface CellProps {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}

const Cell = (props: CellProps) => {
  return <View style={[styles.cell, props.style]}>{props.children}</View>;
};

export default Cell;

const styles = StyleSheet.create({
  cell: { flex: 1 },
});
