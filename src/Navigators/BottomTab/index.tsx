import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import { translate } from '@/Translation/i18n';

const BottomTabNavigation = createBottomTabNavigator();

export const BottomTabRouter = {
  Home: 'Home',
  Utility: 'Utility',
  Message: 'Message',
  Notification: 'Notification',
  Profile: 'Profile',
};

const TAB_LIST = [
  {
    name: BottomTabRouter.Home,
    component: () => <></>,
    icon: 'home',
    title: translate('Home'),
  },
  {
    name: BottomTabRouter.Utility,
    component: () => <></>,
    icon: 'grid',
    title: translate('Utility'),
  },
  {
    name: BottomTabRouter.Message,
    component: () => <></>,
    icon: 'chatbox-ellipses-outline',
    title: translate('Message'),
    badge: 1,
  },
  {
    name: BottomTabRouter.Notification,
    component: () => <></>,
    icon: 'notifications-outline',
    title: translate('Notification'),
    badge: 1,
  },
  {
    name: BottomTabRouter.Profile,
    component: () => <></>,
    icon: 'person-outline',
    title: translate('Profile'),
  },
];

const BottomTab = () => {
  const renderTabBarIcon = (tab, focused) => {
    return (
      <Ionicons
        size={moderateScale(26)}
        name={tab.icon}
        color={focused ? ColorsCommon.DeepBlue : ColorsCommon.DarkGrey}
      />
    );
  };

  return (
    <BottomTabNavigation.Navigator
      initialRouteName={BottomTabRouter.Home}
      screenOptions={{
        tabBarStyle: {
          height: moderateScale(73),
        },
      }}>
      {TAB_LIST.map((tab, index) => (
        <BottomTabNavigation.Screen
          key={'tab_' + index}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarInactiveTintColor: ColorsCommon.DarkGrey,
            tabBarActiveTintColor: ColorsCommon.DeepBlue,
            tabBarLabel: tab.title,
            tabBarIcon: ({ focused }) => renderTabBarIcon(tab, focused),
            tabBarBadge: tab.badge,
            tabBarBadgeStyle: {
              fontSize: moderateScale(9),
              marginTop: moderateScale(-3),
            },
            tabBarItemStyle: {
              paddingVertical: moderateScale(15),
            },
            tabBarLabelStyle: {
              fontWeight: '500',
            },
          }}
        />
      ))}
    </BottomTabNavigation.Navigator>
  );
};

export default BottomTab;
