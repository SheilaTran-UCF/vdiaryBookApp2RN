import React from 'react';
import {
  CommonActions,
  NavigationContainerRef,
  StackActions,
} from '@react-navigation/native';

const navigationRef = React.createRef<NavigationContainerRef<any>>();

export interface RouteProp<T> {
  route: {
    params: T;
  };
}

const navigate = (name: string, params?) => {
  navigationRef.current?.navigate(name, params);
};

const push = (name: string, params?: object) => {
  navigationRef.current?.dispatch(StackActions.push(name, params));
};

const replace = (name: string, params?: object) => {
  navigationRef.current?.dispatch(StackActions.replace(name, params));
};

const goBack = () => {
  if (navigationRef.current?.canGoBack()) {
    navigationRef.current?.goBack();
  }
};

const popToTop = () => {
  navigationRef.current?.dispatch(StackActions.popToTop());
};

const reset = (name: string, params?: object) => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      index: 0,
      routes: [{ name, params }],
    }),
  );
};

export const NavigationController = {
  navigationRef,
  navigate,
  push,
  replace,
  goBack,
  reset,
  popToTop,
};
