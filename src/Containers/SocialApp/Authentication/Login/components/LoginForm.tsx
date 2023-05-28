/* eslint-disable react-native/no-inline-styles */
// import { AppImages, ColorsCommon, CtButton, CtInputName } from '@/Assets';
// import { FormSchemas } from '@/Assets/FormConstant';
// import { selectUserLogin } from '@/ReduxManager/UserStorage/UserStorageSelector';
import { AppImages } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NormalText } from '@/Theme';
import { GradientButton } from '@/Theme/Button/LinerGradientButton';
// import { NormalTextInput } from '@/Theme/TextInput';
// import { GradientButton } from '@/Theme/Button';
import { NormalTextInput } from '@/Theme/TextInput';
import { translate } from '@/Translation/i18n';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import { Formik } from 'formik';
import { debounce } from 'lodash';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput, View } from 'react-native';
// import { useSelector } from 'react-redux';

export const LoginForm = ({ onLogIn }: { onLogIn: (values: any) => void }) => {
  //   const [t] = useTranslation();
  const pwRef = React.createRef<TextInput>();
  //   const userLogin = useSelector(selectUserLogin());
  return (
    <View style={{ paddingHorizontal: moderateScale(35) }}>
      <Formik
        initialValues={{
          Email: '[dev_userLogin]',
          password: '',
        }}
        onSubmit={debounce(onLogIn, 200)}
        // validationSchema={FormSchemas.SignInSchema}
        validateOnChange={false}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }: any) => (
          <>
            <NormalTextInput
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.Email,
                placeholder: translate('Email'),
                onChangeText: handleChange('Email'),
                autoFocus: true,
                onEndEditing: () => !!pwRef && pwRef.current?.focus(),
              }}
              containerStyle={{
                marginVertical: moderateScale(18),
              }}
            />
            {!!errors.Email && (
              <NormalText
                text={translate(errors.Email)}
                style={styles.errorText}
              />
            )}
            <NormalTextInput
              innerRef={pwRef}
              inputProps={{
                value: values.password,
                placeholder: translate('Password'),
                onChangeText: handleChange('password'),
                style: {
                  fontSize: moderateScale(14),
                },
                secureTextEntry: true,
              }}
              containerStyle={{
                marginVertical: moderateScale(18),
              }}
              RightIcon={AppImages.hide}
              rightIconStyle={{
                width: moderateScale(18.14),
                height: moderateScale(15.47),
              }}
            />
            {!!errors.password && (
              <NormalText
                text={translate(errors.password)}
                style={styles.errorText}
              />
            )}
            <GradientButton
              onPress={handleSubmit}
              // useAngel={true}
              btnText={translate('Login')}
              style={{ fontSize: moderateScale(18) }}
              containerStyle={{
                marginTop: moderateScale(32),
                paddingVertical: moderateScale(13),
                width: '100%',
                alignSelf: 'center',
              }}
            />
          </>
        )}
      </Formik>
    </View>
  );
};
const styles = StyleSheet.create({
  errorText: {
    color: ColorsCommon.error,
    fontStyle: 'italic',
    fontSize: moderateScale(12),
  },
});
