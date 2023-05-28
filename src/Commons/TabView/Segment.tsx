import React, { forwardRef, useState } from 'react';
import { useImperativeHandle } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleProp,
  ViewStyle,
  TextStyle,
  StyleSheet,
} from 'react-native';
import _ from 'lodash';
import { ColorsCommon } from '@/Assets/Color';

const { width } = Dimensions.get('window');

interface Item {
  name: string;
}

interface Props {
  options: Item[];
  activeTab?: number;
  style?: StyleProp<ViewStyle>;
  itemStyle?: StyleProp<ViewStyle>;
  textItemStyle?: StyleProp<TextStyle>;
  color?: string;
  onChangePage?: (tab: number) => void;
}

const Segment = forwardRef((props: Props, ref: any) => {
  const { options, style, itemStyle, textItemStyle, color } = props;
  const [active, setActive] = useState(props.activeTab);

  const setActiveTab = (tab: number) => {
    setActive(tab);
  };

  useImperativeHandle(ref, () => ({
    setActiveTab: setActiveTab,
  }));

  const onChangePage = (tab: number) => () => {
    setActive(tab);
    props.onChangePage && props.onChangePage(tab);
  };

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        {_.map(options, (item: any, index: number) => {
          let radiusStyle = {};
          if (index === 0) {
            radiusStyle = {
              borderTopLeftRadius: 5,
              borderBottomLeftRadius: 5,
            };
          } else if (index === options.length - 1) {
            radiusStyle = {
              borderTopRightRadius: 5,
              borderBottomRightRadius: 5,
            };
          }
          return (
            <TouchableOpacity
              key={'Segment-' + index}
              onPress={onChangePage(index)}
              style={[
                {
                  minWidth: 120,
                  borderBottomWidth: 2,
                  borderBottomColor: active === index ? color : '#fff',
                  alignItems: 'center',
                  paddingVertical: 7.5,
                  justifyContent: 'center',
                },
                radiusStyle,
                itemStyle,
              ]}>
              <Text
                style={[
                  {
                    color: active === index ? color : ColorsCommon.grayScale,
                    backgroundColor: 'transparent',
                    fontWeight: active === index ? '700' : 'normal',
                  },
                  textItemStyle,
                ]}>
                {_.get(item, 'name')}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
});

Segment.displayName = 'Segment';
Segment.defaultProps = {
  activeTab: 0,
  color: ColorsCommon.blue,
};

const styles = StyleSheet.create({
  container: {
    width,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginVertical: 5,
  },
  wrapper: { flexDirection: 'row' },
});

export default Segment;
