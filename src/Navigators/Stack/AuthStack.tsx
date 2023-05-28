import React from 'react';
import {
  LoginScreen,
  ForgotPasswordScreen,
  RegisterScreen,
  RuleAndPolicyScreen,
} from '@/Containers/SocialApp/Authentication';

export const AuthStackRouter = {
  LoginScreen: 'LoginScreen',
  ForgotPasswordScreen: 'ForgotPasswordScreen',
  RegisterScreen: 'RegisterScreen',
  RuleAndPolicyScreen: 'RuleAndPolicyScreen',
};

export const AuthStack = (Stack: any) => {
  return [
    <Stack.Screen
      key={AuthStackRouter.LoginScreen}
      name={AuthStackRouter.LoginScreen}
      component={LoginScreen}
    />,
    <Stack.Screen
      key={AuthStackRouter.ForgotPasswordScreen}
      name={AuthStackRouter.ForgotPasswordScreen}
      component={ForgotPasswordScreen}
    />,
    <Stack.Screen
      key={AuthStackRouter.RegisterScreen}
      name={AuthStackRouter.RegisterScreen}
      component={RegisterScreen}
    />,
    <Stack.Screen
      key={AuthStackRouter.RuleAndPolicyScreen}
      name={AuthStackRouter.RuleAndPolicyScreen}
      component={RuleAndPolicyScreen}
    />,
  ];
};
