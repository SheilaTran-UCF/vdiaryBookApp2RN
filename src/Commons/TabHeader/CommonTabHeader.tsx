import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
    renderLeft?: any;
    renderRight?: any;
    renderMiddle?: any;
    containerStyle?: StyleProp<ViewStyle>;
};

export const TabHeaderCommon = (props: Props) => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {props.renderLeft}
            {/* {renderMiddle}
      {renderRight} */}
        </View>
    );
};
