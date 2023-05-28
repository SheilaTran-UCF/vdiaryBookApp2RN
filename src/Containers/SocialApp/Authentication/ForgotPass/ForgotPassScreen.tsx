/* eslint-disable react-native/no-inline-styles */
// import { ColorsCommon, CtButton, CtInputName, CtPageTitle } from '@/Assets';
// import { CommonTabHeader2 } from '@/Commons';
// import { ChangePassworScreenProps, ForgotPasswordScreenProps } from '@/Navigators/navType';
// import { NormalText } from '@/Theme';
// import { GradientButton, NormalButton } from '@/Theme/Button';
// import { moderateScale } from '@/Utils/ScaleDimensions';
// import { Formik } from 'formik';
import React from 'react';
// import { useTranslation } from 'react-i18next';
import { StyleSheet, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// import auth from '@react-native-firebase/auth';
// import { UserProfile } from '@/Types';
// import { useSelector } from 'react-redux';
// import { selectUser } from '@/ReduxManager/UserStorage/UserStorageSelector';

// import { GlobalUIManager } from '@/GlobalUI';
// import { ErrorMsg } from '@/Assets/Constants';
// import AccountApi from '@/Services/Api/AccountApi';
// import { Authentication } from '@/Services';
import { PhoneModifyModal } from './components/PhoneVerifyModal';
import { EmailModifyModal } from './components/EmailVerifyModal';
import { ResetPassModal } from './components/ResetPassModal';
import { OtpConfirmModal } from './components/OtpConfirmModal';
import { NavigationController } from '@/Navigators/Services';
import { CommonTabHeader2 } from '@/Commons';
import { translate } from '@/Translation/i18n';
import { GradientButton } from '@/Theme/Button/LinerGradientButton';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';

export const ForgotPasswordScreen = () => {
  const inset = useSafeAreaInsets();
  //   const [t] = useTranslation();
  const emailRef = React.createRef<any>();
  const phoneRef = React.createRef<any>();
  const resetPassRef = React.createRef<any>();
  const otpRef = React.createRef<any>();
  const _goBack = () => {
    NavigationController.goBack();
  };

  // const [confirm, setConfirm] = React.useState(null);
  //   async function _signInWithPhoneNumber(phoneNumber: string) {
  //     const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  //     setConfirm(confirmation);
  //   }
  async function confirmCode(code: string) {
    // try {
    //   await confirm.confirm(code);
    //   phoneRef.current._toggleModal();
    //   resetPassRef.current._toggleModal();
    //   resetPassRef.current._chooseType('PHONE_NUMBER');
    // } catch (error) {
    //   console.log('Invalid code.');
    //   GlobalUIManager.view.showErrorFlashMsg({
    //     content: t(ErrorMsg.Otp_invalid),
    //   });
    // }
  }
  const _resetPass = (value: any) => {
    resetPassRef.current._toggleModal();
    NavigationController.goBack();

    // AccountApi.resetPass(value.otp, value.newPass, '', '')
    //   .then(res => {
    //     console.log('res reset password', res);
    //     resetPassRef.current._toggleModal();
    //     NavigationController.goBack();
    //   })
    //   .catch(err => {
    //     GlobalUIManager.view.showErrorFlashMsg({
    //       content: err,
    //     });
    //   });
  };
  const _openOtpConfirm = () => {
    otpRef.current._toggleModal();
  };
  const _openResetModal = () => {
    resetPassRef.current._toggleModal();
  };
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { flex: 1, backgroundColor: '#FFFFFF' },
      ]}>
      <View style={{ flex: 1, paddingTop: inset.top }}>
        <CommonTabHeader2 title={translate('ForgotPass')} goBack={_goBack} />

        <GradientButton
          btnText={translate('EmailVerify')}
          style={{
            fontSize: moderateScale(18),
          }}
          containerStyle={{
            paddingVertical: moderateScale(12),
            marginVertical: moderateScale(30),
          }}
          color={['#0956A3', '#00BAFF']}
          location={[-0.6364, 1.11263]}
          onPress={() => emailRef.current._toggleModal()}
        />
        {/* <GradientButton
          btnText={t(CtButton.PhoneVerify)}
          style={{
            fontSize: moderateScale(18)
          }}
          containerStyle={{ paddingVertical: moderateScale(12), marginVertical: moderateScale(30) }}
          color={['#0956A3', '#00BAFF']}
          location={[-.6364, 1.11263]}
          onPress={() => {
            // _signInWithPhoneNumber('+84' + UserProfile?.phone.slice(1))
            // phoneRef.current._toggleModal()
            resetPassRef.current._toggleModal()
            resetPassRef.current._chooseType("PHONE_NUMBER")
          }}
        /> */}
      </View>
      <EmailModifyModal ref={emailRef} openOtp={_openOtpConfirm} />
      <PhoneModifyModal ref={phoneRef} confirm={confirmCode} />
      <OtpConfirmModal ref={otpRef} confirm={_openResetModal} />
      <ResetPassModal resetPass={_resetPass} ref={resetPassRef} />
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: moderateScale(37),
    color: ColorsCommon.DarkGrey,
    marginTop: moderateScale(35),
    marginLeft: moderateScale(40),
  },
});
