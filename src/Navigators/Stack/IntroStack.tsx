import React from 'react';
import { IntroScreen } from '@/Containers/SocialApp/SplashScreen/SplashScreen';

export const IntroStackRouter = {
  IntroScreen: 'IntroScreen',
};

export const IntroStack = (Stack: any) => {
  return [
    <Stack.Screen
      key={IntroStackRouter.IntroScreen}
      name={IntroStackRouter.IntroScreen}
      component={IntroScreen}
    />,
  ];
};
