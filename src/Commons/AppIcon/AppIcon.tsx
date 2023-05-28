import React from 'react';
import { StyleProp, TextStyle } from 'react-native';
import IconIOS from 'react-native-vector-icons/Ionicons';
import IconFA from 'react-native-vector-icons/FontAwesome5';
import IconAnt from 'react-native-vector-icons/AntDesign';
import IconMd from 'react-native-vector-icons/MaterialCommunityIcons';

interface IconProps {
  type?: 'fa' | 'ios' | 'ant' | 'md';
  style?: StyleProp<TextStyle>;
  name: string;
  size: number;
  color: string;
}

const AppIcon = (props: IconProps) => {
  const { type } = props;
  if (type === 'fa') {
    return <IconFA {...props} />;
  }

  if (type === 'ant') {
    return <IconAnt {...props} />;
  }

  if (type === 'md') {
    return <IconMd {...props} />;
  }

  return <IconIOS {...props} />;
};

export default AppIcon;
