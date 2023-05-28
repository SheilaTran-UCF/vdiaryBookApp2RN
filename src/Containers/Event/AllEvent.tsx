import React, { useEffect, useMemo } from 'react';
import { FlatList, RefreshControl, StyleSheet, View } from 'react-native';
import ListItemSeparator from '@/Assets/ListItemSeparator/ListItemSeparator';
import Empty from '@/Commons/Empty/Empty';
import Loading from '@/Commons/Loading/Loading';
import { useMergeState } from '@/Helper/Utils/CustomHooks';
import { ICondition } from '@/Types/AppInterface';
import EventComponent from './components/EventComponent';
import EventFilter from './EventFilter';
import _ from 'lodash';
import { translate } from '@/Translation/i18n';

const listTypeEvent = [
  {
    name: 'Hàng đầu',
    value: 'top',
    isDefault: true,
  },
  {
    name: 'Tuần này',
    value: 'week',
  },
];

const listFilterCondition = [
  {
    name: 'Value 1',
    value: '1',
  },
  {
    name: 'Value 2',
    value: '2',
  },
  {
    name: 'value 3',
    value: '3',
  },
  {
    name: 'Value 4',
    value: '4',
  },
];

const AllEvent = () => {
  const [state, setState] = useMergeState({
    loading: true,
    condition: {
      value_1: 'top',
    },
  });

  const loadData = () => {
    setTimeout(() => {
      setState({
        loading: false,
      });
    }, 2000);
  };

  useEffect(() => {
    loadData();
  }, []);

  const refresh = () => {
    setState({ loading: true });
    loadData();
  };

  const onDoneFilter = _.debounce((condition: ICondition) => {
    setState({
      loading: true,
      condition: condition,
    });
    loadData();
  }, 300);

  const renderHeader = () => {
    return (
      <EventFilter
        listTypeEvent={listTypeEvent}
        listFilterCondition={listFilterCondition}
        condition={state?.condition}
        onDoneFilter={onDoneFilter}
      />
    );
  };

  const renderItem = (item: any, index: number) => {
    return <EventComponent key={`${index}`} />;
  };

  const renderItemSeparator = () => {
    return <ListItemSeparator style={{ height: 5 }} />;
  };

  const renderBody = () => {
    if (state?.loading) {
      return <Loading />;
    }
    return (
      <FlatList
        style={{ flex: 1, backgroundColor: '#eee', paddingHorizontal: 6 }}
        contentContainerStyle={{ flexGrow: 1 }}
        data={[1, 2, 3, 4]}
        removeClippedSubviews
        legacyImplementation
        initialNumToRender={5}
        windowSize={5}
        keyboardShouldPersistTaps="always"
        renderItem={({ item, index }) => renderItem(item, index)}
        ItemSeparatorComponent={() => renderItemSeparator()}
        keyExtractor={(item, index) => index.toString()}
        ListEmptyComponent={() => <Empty text={translate('Nodata')} />}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={refresh} />
        }
      />
    );
  };

  return useMemo(() => {
    return (
      <View style={styles.container}>
        {renderHeader()}
        {renderBody()}
      </View>
    );
  }, [state?.condition, state?.loading]);
};

export default AllEvent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
