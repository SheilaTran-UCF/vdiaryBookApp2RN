import { ColorsCommon } from '@/Assets/Color';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ActivityIndicator,
  ViewStyle,
} from 'react-native';

interface Props {
  text?: string;
  style?: ViewStyle;
}

const Loading = (props: Props) => {
  return (
    <View style={[styles.loading, props.style]}>
      <ActivityIndicator color={ColorsCommon.blue} />
      {props.text && <Text style={{ marginTop: 10 }}>{props.text}</Text>}
    </View>
  );
};

export default Loading;

Loading.defaultProps = {
  text: 'Đang tải dữ liệu...',
};

const styles = StyleSheet.create({
  loading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
