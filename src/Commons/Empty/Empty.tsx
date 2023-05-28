import { TIcon } from '@/Types';
import React from 'react';
import { Text, View } from 'react-native';
import AppIcon from '../AppIcon/AppIcon';

export interface EmptyProps {
  text?: string;
  icon?: TIcon;
  color: string;
}

const Empty = (props: EmptyProps) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <AppIcon
        name="folder-open-outline"
        size={80}
        color={props.color}
        {...props.icon}
      />
      <Text style={{ marginTop: 10, fontSize: 16, color: props.color }}>
        {props.text}
      </Text>
    </View>
  );
};

Empty.defaultProps = {
  color: '#7f91ad',
};

export default Empty;
