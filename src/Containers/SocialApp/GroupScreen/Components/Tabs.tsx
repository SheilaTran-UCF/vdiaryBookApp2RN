import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import React, { useEffect, useState } from 'react';
import {
  Text,
  StyleSheet,
  View,
  useWindowDimensions,
  TouchableOpacity,
} from 'react-native';

interface ITabProps {
  tab: number;
  listTab: Array<ITabItem>;
  onChooseTab: (id: number) => void;
}

interface ITabItem {
  id: number;
  name: string;
}

export const Tabs = (props: ITabProps) => {
  const renderItem = (item: ITabItem) => {
    return (
      <TouchableOpacity
        style={[
          styles.itemContainer,
          { width: useWindowDimensions().width / props.listTab.length },
        ]}
        key={item.id}
        onPress={() => props.onChooseTab(item.id)}>
        <Text
          style={props.tab == item.id ? styles.txtTabSelected : styles.txtTab}
          numberOfLines={1}
          ellipsizeMode="tail">
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      {props.listTab.map((item: ITabItem) => renderItem(item))}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    height: moderateScale(60),
    flexDirection: 'row',
  },
  itemContainer: {
    height: moderateScale(50),
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomTabSelect: {
    borderBottomColor: '#1F2F98',
    borderBottomWidth: moderateScale(2),
  },
  txtTab: {
    color: 'black',
    fontSize: moderateScale(17),
    marginHorizontal: moderateScale(5),
    paddingVertical: moderateScale(10),
  },
  txtTabSelected: {
    color: '#1F2F98',
    fontSize: moderateScale(17),
    marginHorizontal: moderateScale(5),
    paddingVertical: moderateScale(10),
    borderBottomColor: '#1F2F98',
    borderBottomWidth: moderateScale(3),
  },
});
