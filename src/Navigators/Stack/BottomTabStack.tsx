import React from 'react';
import BottomTab from '../BottomTab';

export const BottomTabStackRouter = { BottomTab: 'BottomTab' };

export const BottomTabStack = (Stack: any) => {
  return [
    <Stack.Screen
      key={BottomTabStackRouter.BottomTab}
      name={BottomTabStackRouter.BottomTab}
      component={BottomTab}
    />,
  ];
};
