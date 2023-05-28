/* eslint-disable react-native/no-inline-styles */
// import {
//   AppImages,
//   ColorsCommon,
//   CtButton,
//   CtInputName,
//   CtNormalText,
//   FontsFamily,
// } from '@/Assets';
import React from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { NormalText } from '@/Theme';
// import { moderateScale } from '@/Utils/ScaleDimensions';
// import { NormalTextInput } from '@/Theme/TextInput';
// import { GradientButton } from '@/Theme/Button';
// import { LoginScreenProps } from '@/Navigators/navType';

// import AccountApi from '@/Services/Api/AccountApi';
// import { Authentication } from '@/Services';
// import { GlobalUIManager } from '@/GlobalUI';
import { RegisterForm } from './components/RegisterForm';
import { NavigationController } from '@/Navigators/Services';
import RouterName from '@/Navigators/RouterName';
import { AppImages } from '@/Assets';
import { translate } from '@/Translation/i18n';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { ColorsCommon } from '@/Assets/Color';
import { FontsFamily } from '@/Assets/FontsFamily';
// import { useTranslation } from 'react-i18next';
// import { FlashtMsg } from '@/Assets/Constants';
// import { NavigationController } from '@/Navigators/NavigationController';
// import { Routes } from '@/Navigators/Routes';

export const RegisterScreen = () => {
  //   const [t] = useTranslation();
  const _goToLoginScreen = () => {
    NavigationController.navigate(RouterName.LoginScreen);
  };
  const _onRegister = (values: any) => {
    // console.log('values', values);
    // // _goToHomeScreen()
    // GlobalUIManager.view.showLoading();
    // AccountApi.register(
    //   values.firstName,
    //   values.lastName,
    //   values.Email,
    //   values.password,
    //   values.phone,
    //   values.ref,
    // )
    //   .then(res => {
    //     console.log('Đăng ký thành công', res);
    //     GlobalUIManager.view.hideLoading(() => {
    //       GlobalUIManager.view.showSuccessFlashMsg({
    //         content: t(FlashtMsg.mess_register_success),
    //       });
    //     });
    //     _goToLoginScreen();
    //   })
    //   .catch(err => {
    //     GlobalUIManager.view.hideLoading(() => {
    //       GlobalUIManager.view.showErrorFlashMsg({
    //         content: err,
    //       });
    //     });
    //     console.log('register lỗi         :', err);
    //   });
  };
  const _goToRuleAndPolicy = () => {
    // NavigationController.navigate(Routes.ruleAndPolicyScreen);
  };
  return (
    <View style={[StyleSheet.absoluteFill, { flex: 1 }]}>
      <ImageBackground
        source={AppImages.authenBg}
        style={[StyleSheet.absoluteFillObject, { alignItems: 'center' }]}
        resizeMode={'stretch'}>
        <ScrollView style={{ flex: 1 }}>
          <Image
            source={AppImages.mainLogo}
            resizeMode={'contain'}
            style={styles.Logo}
          />
          <NormalText text={translate('Welcome')} style={styles.logoText} />
          <RegisterForm onRegister={_onRegister} />
          <View
            style={{
              flexDirection: 'row',
              marginBottom: moderateScale(30),
              alignSelf: 'center',
              marginTop: moderateScale(30),
            }}>
            <NormalText
              text={translate('HaveAccount')}
              style={styles.noAccText}
            />
            <TouchableOpacity onPress={_goToLoginScreen}>
              <NormalText text={translate('Login')} style={styles.register} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={{
              paddingHorizontal: moderateScale(30),
              marginBottom: moderateScale(20),
            }}>
            <Text style={styles.bottomText}>
              {translate('LoginText1')}
              <Text
                onPress={_goToRuleAndPolicy}
                style={[styles.bottomText, { color: ColorsCommon.BlueText }]}>
                {translate('LoginText2')}
              </Text>
              {translate('LoginText3')}
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  Logo: {
    height: moderateScale(100),
    marginTop: moderateScale(60),
    alignSelf: 'center',
  },
  logoText: {
    fontSize: moderateScale(22),
    color: ColorsCommon.DarkGrey,
    alignSelf: 'center',
  },
  belowSignInContainer: {
    flexDirection: 'row',
    width: moderateScale(680),
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: moderateScale(80),
    alignSelf: 'center',
  },
  separator: {
    height: 2,
    backgroundColor: ColorsCommon.MiddleGrey,
    flex: 1,
  },
  belowSignInText: {
    marginHorizontal: moderateScale(16),
    fontSize: moderateScale(27),
    color: ColorsCommon.Grey,
  },
  socialGroup: {
    flexDirection: 'row',
    width: moderateScale(194),
    justifyContent: 'space-between',
    marginTop: moderateScale(50),
    alignSelf: 'center',
  },
  socialBtn: {
    width: moderateScale(75),
    height: moderateScale(75),
  },
  forgotPassword: {
    fontStyle: 'italic',
    fontFamily: FontsFamily.Roboto_Light,
    fontWeight: '400',
    fontSize: moderateScale(32),
    marginTop: moderateScale(60),
    alignSelf: 'center',
  },
  bottomText: {
    fontSize: moderateScale(12),
    color: ColorsCommon.Grey,
    marginTop: moderateScale(60),
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
    textDecorationLine: 'underline',
  },
});
