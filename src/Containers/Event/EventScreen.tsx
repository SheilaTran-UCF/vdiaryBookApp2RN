import React, { useRef } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { SearchBarButton } from '@/Commons/SearchButton';
import _ from 'lodash';
import { ColorsCommon } from '@/Assets/Color';
import { CommonIconButton } from '@/Commons/IconButton';
import TabView from '@/Commons/TabView/TabView';
import MyEvent from './MyEvent';
import AllEvent from './AllEvent';
import { translate } from '@/Translation/i18n';

const EventScreen = () => {
  const refTabView = useRef<any>(null);
  const onSearch = _.debounce(() => {
    console.log('hihi');
  }, 300);

  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <View style={styles.row}>
          <CommonIconButton
            icon={{
              name: 'chevron-back',
              type: 'ios',
              size: moderateScale(20),
              color: ColorsCommon.black,
            }}
          />
          <SearchBarButton
            placeholder={translate('SearchEvent')}
            onSearch={onSearch}
            containerStyle={{ flex: 1 }}
          />
        </View>
        <Text style={styles.title}>{translate('Event')}</Text>
      </View>
    );
  };

  const renderBody = () => {
    return (
      <TabView
        ref={refTabView}
        tabbarPosition="top"
        tabbar={[
          { name: translate('AllEvent'), icon: '' },
          { name: translate('MyEvent'), icon: '' },
        ]}>
        <AllEvent />
        <MyEvent />
      </TabView>
    );
  };

  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderBody()}
    </View>
  );
};

export default EventScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingHorizontal: 5,
  },
  title: {
    fontSize: moderateScale(26),
    fontWeight: 'bold',
    color: ColorsCommon.black,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
