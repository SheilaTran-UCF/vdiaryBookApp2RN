import { ColorsCommon } from '@/Assets';
import { NormalText } from '@/Theme';
import { moderateScale } from '@/Utils/ScaleDimensions';
import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

type Props = {
    text: string;
    textInput?: TextInputProps;
    onChange: (text: string) => void;
};
export const ChangePassElement = ({ text, textInput, onChange }: Props) => {
    const [value, setValue] = React.useState('');
    return (
        <View style={styles.container}>
            <NormalText text={text} style={styles.text} />
            <TextInput
                placeholder="******"
                placeholderTextColor={ColorsCommon.DarkGrey}
                textContentType={'password'}
                secureTextEntry={true}
                value={value}
                onChangeText={text => {
                    setValue(text);
                    onChange(text);
                }}
                style={{
                    fontSize: moderateScale(15),
                    color: ColorsCommon.DarkGrey,
                    flex: 1,
                    marginLeft: moderateScale(10),
                    paddingVertical: 0,
                }}
                {...textInput}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: moderateScale(15),
        marginHorizontal: moderateScale(18),
        borderBottomColor: ColorsCommon.MiddleLightGrey,
        borderBottomWidth: 1,
    },
    text: {
        fontSize: moderateScale(15),
        color: ColorsCommon.MiddleGrey,
        width: moderateScale(150),
    },
});
