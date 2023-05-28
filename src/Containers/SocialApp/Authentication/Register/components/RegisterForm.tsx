/* eslint-disable react-native/no-inline-styles */
// import { AppImages, ColorsCommon, CtButton, CtInputName } from '@/Assets';
// import { FormSchemas } from '@/Assets/FormConstant';
import { AppImages } from '@/Assets';
import { ColorsCommon } from '@/Assets/Color';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { NormalText } from '@/Theme';
import { GradientButton } from '@/Theme/Button/LinerGradientButton';
// import { GradientButton } from '@/Theme/Button';
import { NormalTextInput } from '@/Theme/TextInput';
import { translate } from '@/Translation/i18n';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import { Formik } from 'formik';
import { debounce } from 'lodash';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { StyleSheet, TextInput, View } from 'react-native';

export const RegisterForm = ({
  onRegister,
}: {
  onRegister: (values: any) => void;
}) => {
  //   const [t] = useTranslation();
  const lnRef = React.createRef<TextInput>();
  const pwRef = React.createRef<TextInput>();
  const emRef = React.createRef<TextInput>();
  return (
    <View style={{ alignSelf: 'center', paddingHorizontal: moderateScale(35) }}>
      <Formik
        initialValues={{
          Email: '',
          password: '',
          firstName: '',
          lastName: '',
          phone: '',
          ref: '',
        }}
        onSubmit={debounce(onRegister, 200)}
        // validationSchema={FormSchemas.SignUpSchema}
        validateOnChange={false}>
        {({ handleChange, handleBlur, handleSubmit, values, errors }: any) => (
          <>
            <NormalTextInput
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.firstName,
                placeholder: translate('FirstName'),
                onChangeText: handleChange('firstName'),
                autoFocus: true,
                // onEndEditing: () => !!lnRef && lnRef.current?.focus()
              }}
              containerStyle={{
                marginTop: moderateScale(100),
              }}
            />
            {!!errors.firstName && (
              <NormalText
                text={translate(errors.firstName)}
                style={styles.errorText}
              />
            )}
            <NormalTextInput
              innerRef={lnRef}
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.lastName,
                placeholder: translate('LastName'),
                onChangeText: handleChange('lastName'),
                // onEndEditing: () => !!emRef && emRef.current?.focus()
              }}
              containerStyle={{
                marginTop: moderateScale(18),
              }}
            />
            {!!errors.lastName && (
              <NormalText
                text={translate(errors.lastName)}
                style={styles.errorText}
              />
            )}
            <NormalTextInput
              innerRef={emRef}
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.Email,
                placeholder: 'Email',
                onChangeText: handleChange('Email'),
                // onEndEditing: () => !!pwRef && pwRef.current?.focus()
              }}
              containerStyle={{
                marginTop: moderateScale(18),
              }}
            />
            {!!errors.Email && (
              <NormalText
                text={translate(errors.Email)}
                style={styles.errorText}
              />
            )}
            <NormalTextInput
              innerRef={emRef}
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.phone,
                placeholder: translate('PhoneNumber'),
                onChangeText: handleChange('phone'),
                // onEndEditing: () => !!pwRef && pwRef.current?.focus()
              }}
              containerStyle={{
                marginTop: moderateScale(18),
              }}
            />
            {!!errors.phone && (
              <NormalText
                text={translate(errors.phone)}
                style={styles.errorText}
              />
            )}

            <NormalTextInput
              innerRef={pwRef}
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.password,
                placeholder: translate('Password'),
                onChangeText: handleChange('password'),
              }}
              RightIcon={AppImages.Hide}
              rightIconStyle={{
                width: moderateScale(16.9),
                height: moderateScale(15.47),
              }}
              containerStyle={{
                marginTop: moderateScale(18),
              }}
            />

            {!!errors.password && (
              <NormalText
                text={translate(errors.password)}
                style={styles.errorText}
              />
            )}
            <NormalTextInput
              // innerRef={pwRef}
              inputProps={{
                style: {
                  fontSize: moderateScale(14),
                },
                value: values.ref,
                placeholder: translate('FriendInvitation'),
                onChangeText: handleChange('ref'),
              }}
              RightIcon={AppImages.Hide}
              rightIconStyle={{
                width: moderateScale(16.9),
                height: moderateScale(15.47),
              }}
              containerStyle={{
                marginTop: moderateScale(18),
              }}
            />
            <GradientButton
              onPress={handleSubmit}
              // useAngel={true}
              btnText={translate('Register')}
              style={{ fontSize: moderateScale(18) }}
              containerStyle={{
                marginTop: moderateScale(30),
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
