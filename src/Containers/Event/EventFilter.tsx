import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ColorsCommon } from '@/Assets/Color';
import { CommonIconButton } from '@/Commons/IconButton';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import _ from 'lodash';
import { ICondition } from '@/Types/AppInterface';

interface Props {
  listTypeEvent: any[];
  listFilterCondition?: any[];
  condition: ICondition;
  onDoneFilter: (condition: ICondition) => void;
}

const EventFilter = (props: Props) => {
  const { listTypeEvent, listFilterCondition, condition, onDoneFilter } = props;

  const onChangeTypeEvent = (item: any) => () => {
    let editedCondition = {
      ...condition,
      value_1: item?.value,
    };
    onDoneFilter(editedCondition);
  };

  const renderTypeEvent = () => {
    const arrButton: JSX.Element[] = [];
    _.forEach(listTypeEvent, (item: any, index: number) => {
      arrButton.push(
        <TouchableOpacity
          onPress={onChangeTypeEvent(item)}
          key={`btn-${index}`}
          style={{
            paddingVertical: 2,
            paddingHorizontal: 5,
          }}>
          <Text
            style={{
              fontSize: moderateScale(13),
              color:
                item?.value?.toUpperCase() === condition?.value_1?.toUpperCase()
                  ? ColorsCommon.blue
                  : ColorsCommon.black,
            }}>
            {item?.name}
          </Text>
        </TouchableOpacity>,
      );
    });
    return <View style={styles.buttonWrapper}>{arrButton}</View>;
  };

  return (
    <View style={styles.container}>
      {renderTypeEvent()}
      <CommonIconButton
        icon={{
          name: 'filter-outline',
          type: 'ios',
          size: moderateScale(18),
          color: ColorsCommon.black,
        }}
      />
    </View>
  );
};

export default EventFilter;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
