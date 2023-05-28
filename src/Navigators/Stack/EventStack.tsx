import EventScreen from '@/Containers/Event/EventScreen';
import React from 'react';
import { Routes } from '../Routes';

export const EventStackRouter = { IntroScreen: 'IntroScreen' };

export const EventStack = (Stack: any) => {
  return [<Stack.Screen name={Routes.EventScreen} component={EventScreen} />];
};
