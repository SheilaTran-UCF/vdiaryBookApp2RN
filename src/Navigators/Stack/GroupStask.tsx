import { CreateGroupScreen } from '@/Containers/SocialApp/GroupScreen/Components/CreateGroupScreen';
import { DetailGroupScreen } from '@/Containers/SocialApp/GroupScreen/Components/DetailGroupScreen';
import { GroupScreen } from '@/Containers/SocialApp/GroupScreen/GroupScreen';
import React from 'react';

export const GroupStackRouter = {
  GroupScreen: 'GroupScreen',
  CreateGroupScreen: 'CreateGroupScreen',
  DetailGroupScreen: 'DetailGroupScreen',
};

export const GroupStack = (Stack: any) => {
  return [
    <Stack.Screen
      key={GroupStackRouter.GroupScreen}
      name={GroupStackRouter.GroupScreen}
      component={GroupScreen}
    />,
    <Stack.Screen
      key={GroupStackRouter.CreateGroupScreen}
      name={GroupStackRouter.CreateGroupScreen}
      component={CreateGroupScreen}
    />,
    <Stack.Screen
      key={GroupStackRouter.DetailGroupScreen}
      name={GroupStackRouter.DetailGroupScreen}
      component={DetailGroupScreen}
    />,
  ];
};
