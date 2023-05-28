import React, { forwardRef, useRef, useState } from 'react';
import {} from 'react-native';
import { ScrollableTabView } from '@valdio/react-native-scrollable-tabview';
import Segment from './Segment';
import { useImperativeHandle } from 'react';

interface TabItem {
  name: string;
  icon: string;
}

interface Props {
  tabbarPosition?: string;
  children: JSX.Element[] | React.Component[];
  tabbar: TabItem[];
  onChangeTab?: (index: number) => void;
  prerenderingSiblingsNumber?: number;
}

const TabView = forwardRef((props: Props, ref: any) => {
  const refScrollableTabView = useRef<any>(null);
  const { tabbarPosition, children, tabbar, prerenderingSiblingsNumber } =
    props;
  const [state, setState] = useState({ activeTab: 0 });

  const onChangePage = (page: unknown) => {
    refScrollableTabView && refScrollableTabView.current.goToPage(page);
  };

  const onActivePage = (page: number) => {
    if (page !== state.activeTab) {
      refScrollableTabView && refScrollableTabView.current.goToPage(page);
    }
  };

  useImperativeHandle(ref, () => ({
    onActivePage: onActivePage,
  }));

  const onChangeTab = (currentPage: { i: number }) => {
    if (state.activeTab !== currentPage.i) {
      setState({ activeTab: currentPage.i });
      props.onChangeTab && props.onChangeTab(currentPage.i);
    }
  };

  const renderTabbar = () => {
    // if (tabbarPosition === 'bottom') {
    //   return (
    //     <BottomTab
    //       style={{ height: 50 }}
    //       onChangePage={onChangePage}
    //       activeTab={state.activeTab}
    //       options={tabbar}
    //     />
    //   );
    // }
    if (tabbarPosition === 'top') {
      return (
        <Segment
          activeTab={state.activeTab}
          options={tabbar}
          onChangePage={onChangePage}
        />
      );
    }
    return null;
  };

  return (
    <ScrollableTabView
      ref={refScrollableTabView}
      keyboardShouldPersistTaps={'always'}
      renderTabBar={renderTabbar}
      onChangeTab={onChangeTab}
      locked={true}
      tabBarPosition={tabbarPosition}
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
      scrollWithoutAnimation
      prerenderingSiblingsNumber={prerenderingSiblingsNumber}
      initialPage={state.activeTab}>
      {children}
    </ScrollableTabView>
  );
});

TabView.displayName = 'TabView';
TabView.defaultProps = {
  tabbarPosition: 'bottom',
  tabbar: [],
  prerenderingSiblingsNumber: 0,
};

export default TabView;
