/* eslint-disable react-native/no-inline-styles */
// import {
//   AppImages,
//   ColorsCommon,
//   CtButton,
//   CtNormalText,
//   FontsFamily,
// } from '@/Assets';
import React from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { NormalText } from '@/Theme';
// import { moderateScale } from '@/Utils/ScaleDimensions';
import { LoginForm } from './components/LoginForm';
// import { Authentication } from '@/Services';
// import { GlobalUIManager } from '@/GlobalUI';
// import { useTranslation } from 'react-i18next';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
// import { getStore, UserStorageActions } from '@/ReduxManager';
// import { VersionElement } from '@/Commons';
// import { NavigationController } from '@/Navigators/NavigationController';
// import { Routes } from '@/Navigators/Routes';
// import { useKeyboardHook } from '@/Hooks';
import { AppColors, AppImages } from '@/Assets';
import useKeyboardHook from '@/Hooks/useKeyboardHook';
// import { NavigationController } from '@/Navigators/Services';
// import RouterName from '@/Navigators/RouterName';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { VersionElement } from '@/Commons';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
import { translate } from '@/Translation/i18n';
import { NavigationController } from '@/Navigators/Services';
import RouterName from '@/Navigators/RouterName';

GoogleSignin.configure({
  webClientId:
    '345188576861-1fir769bvcmqap4n3niv9mr9r4oaqn48.apps.googleusercontent.com',
  offlineAccess: true,
});

export const LoginScreen = () => {
  useKeyboardHook();
  //   const [t] = useTranslation();

  const _goToForgotPass = () => {
    NavigationController.navigate(RouterName.ForgotPasswordScreen);
  };
  const _goToRegisterScreen = () => {
    // console.log('11111111111');
    NavigationController.navigate(RouterName.RegisterScreen);
  };

  const _onLogin = () => {
    // console.log('values', values);
    // const store = getStore();
    // store.dispatch(UserStorageActions.saveUserLogin(values.Email));
    // GlobalUIManager.view.showLoading();
    // Authentication.loginAndCreateSession(values.Email, values.password)
    //   .then(res => {
    //     GlobalUIManager.view.hideLoading();
    //     // _goToHomeScreen()
    //   })
    //   .catch(mes => {
    //     GlobalUIManager.view.hideLoading(() => {
    //       GlobalUIManager.view.showErrorFlashMsg({
    //         // content: mes
    //         content: 'Email, số điện thoại hoặc mật khẩu ko đúng',
    //       });
    //     });
    //     console.log('err loginnnnnnnnnnnnnnnnn:', mes);
    //   });
  };
  // const _onLoginFacebook = () => {
  //   // Authentication.signInFBAndCreateSession();
  // };
  const _onLoginApple = () => {
    // Authentication.signInAppleAndCreateSession();
  };
  const _onLoginGoogle = () => {
    // Authentication.signInGoogleAndCreateSession();
  };
  const _goToRuleAndPolicy = () => {
    NavigationController.navigate(RouterName.RuleAndPolicyScreen);
  };
  return (
    <View style={[StyleSheet.absoluteFill, { flex: 1 }]}>
      <ImageBackground
        source={AppImages.authenBg}
        style={[
          StyleSheet.absoluteFillObject,
          {
            alignItems: 'center',
            // paddingHorizontal: moderateScale(20),
            paddingVertical: moderateScale(15),
          },
        ]}
        resizeMode={'stretch'}>
        <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
          <Image
            source={AppImages.mainLogo}
            resizeMode={'contain'}
            style={styles.Logo}
          />
          <NormalText text={translate('Welcome')} style={styles.logoText} />
          <LoginForm onLogIn={_onLogin} />
          <View style={styles.belowSignInContainer}>
            <View style={styles.separator} />
            <NormalText
              text={translate('LoginText1')}
              style={styles.belowSignInText}
            />
            <View style={styles.separator} />
          </View>
          <View style={styles.socialGroup}>
            <TouchableOpacity
              style={styles.otherLogin}
              onPress={_onLoginGoogle}>
              <Image
                source={AppImages.GoogleBtn}
                resizeMode={'contain'}
                style={styles.socialBtn}
              />
            </TouchableOpacity>
            {Platform.OS === 'ios' && (
              <TouchableOpacity
                style={styles.otherLogin}
                onPress={_onLoginApple}>
                <Image
                  source={AppImages.AppleIcon}
                  resizeMode={'contain'}
                  style={styles.socialBtn}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity onPress={_goToForgotPass}>
            <NormalText
              text={translate('ForgotPass')}
              style={styles.forgotPassword}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'row',
              marginBottom: moderateScale(20),
              alignSelf: 'center',
              marginTop: moderateScale(17),
            }}>
            <NormalText
              text={translate('HaveNoAccount')}
              style={styles.noAccText}
            />
            <TouchableOpacity onPress={_goToRegisterScreen}>
              <NormalText
                text={translate('Register')}
                style={styles.register}
              />
            </TouchableOpacity>
          </View>
          <NormalText
            text={translate('LoginText2')}
            style={styles.bottomText}
          />

          {/* <View style={{ flexDirection: 'row', marginBottom: moderateScale(50) }}> */}
          <NormalText
            text={translate('LoginPrivate')}
            style={{
              fontSize: moderateScale(12),
              justifyContent: 'center',
              textAlign: 'center',
              marginHorizontal: moderateScale(30),
            }}
            onPress={_goToRuleAndPolicy}>
            <NormalText
              text={translate('LoginText3')}
              style={{ fontSize: moderateScale(12), color: AppColors.Grey }}
            />
          </NormalText>
          {/* </View> */}
          <VersionElement />
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  Logo: {
    height: moderateScale(60),
    marginTop: moderateScale(100),
    alignSelf: 'center',
  },
  logoText: {
    fontSize: moderateScale(22),
    // color: ColorsCommon.DarkGrey,
    alignSelf: 'center',
  },
  belowSignInContainer: {
    flexDirection: 'row',
    // width: moderateScale(680),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(40),
    alignSelf: 'center',
    paddingHorizontal: moderateScale(38),
  },
  separator: {
    height: 2,
    backgroundColor: ColorsCommon.MiddleGrey,
    flex: 1,
  },
  belowSignInText: {
    marginHorizontal: moderateScale(10),
    fontSize: moderateScale(13),
    color: ColorsCommon.Grey,
  },
  socialGroup: {
    flexDirection: 'row',
    width: moderateScale(80),
    // justifyContent: 'space-between',
    justifyContent: 'center',
    marginTop: moderateScale(20),
    alignSelf: 'center',
  },
  socialBtn: {
    width: moderateScale(28.85),
    height: moderateScale(28.85),
  },
  forgotPassword: {
    fontStyle: 'italic',
    fontFamily: FontsFamily.Roboto_Light,
    fontWeight: '400',
    fontSize: moderateScale(15),
    marginTop: moderateScale(60),
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: moderateScale(12),
    color: ColorsCommon.Grey,
    // marginTop: moderateScale(0),
    alignSelf: 'center',
  },
  noAccText: {
    fontSize: moderateScale(16),
    color: ColorsCommon.DarkGrey,
  },
  register: {
    fontSize: moderateScale(16),
    color: 'rgba(2, 47, 150, 1)',
    fontFamily: FontsFamily.Roboto_Medium,
    fontWeight: '500',
  },
  otherLogin: {
    marginHorizontal: moderateScale(10),
  },
});
