import { NavigationController } from '@/Navigators/Services';
import React, { useEffect } from 'react';
import { Text, StyleSheet, View, ImageBackground } from 'react-native';
import { moderateScale } from '@/Helper/Utils/ScaleDimensions';
import { Routes } from '@/Navigators/Routes';
import Image from 'react-native-fast-image';
import SplashScreenNative from 'react-native-splash-screen';
import { AppColors, AppImages } from '@/Assets';
import { translate } from '@/Translation/i18n';
import { NormalButton, NormalText } from '@/Theme';
import Authentication from '@/Services/Authentication/Authentication';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import { GlobalUIManager } from '@/GlobalUI';
import RouterName from '@/Navigators/RouterName';

export const IntroScreen = () => {
  //   const [t] = useTranslation();

  useEffect(() => {
    GoogleSignin.configure({});
    SplashScreenNative.hide();
  }, []);

  const _goToLoginScreen = () => {
    // NavigationController.navigate(Routes.loginScreen);
    _onLoginApple();
  };

  const _onLoginApple = () => {
    Authentication.signInAppleAndCreateSession();
  };
  const _onLoginGoogle = () => {
    Authentication.signInGoogleAndCreateSession();
    GlobalUIManager.view?.showLoading();
    setTimeout(() => {
      GlobalUIManager.view?.hideLoading();
      // NavigationController.navigate(RouterName.BottomTab);
      NavigationController.navigate(RouterName.LoginScreen);
    }, 1000);
  };

  const goToEventScreen = () => {
    NavigationController.navigate(Routes.EventScreen);
  };

  return (
    <View
      style={[
        { alignItems: 'center', justifyContent: 'center' },
        StyleSheet.absoluteFill,
      ]}>
      <Text>App Social Version 2</Text>
      <ImageBackground
        source={AppImages.SplashBg}
        style={[StyleSheet.absoluteFillObject]}
        resizeMode={'stretch'}>
        <View style={styles.mainImageContainer}>
          <Image
            source={AppImages.SplashImage}
            resizeMode={'contain'}
            style={styles.mainImage}
          />
        </View>
        <ImageBackground
          source={AppImages.start}
          style={styles.Frame}
          resizeMode={'stretch'}>
          <Image
            source={AppImages.mainLogo}
            resizeMode={'contain'}
            style={styles.Logo}
          />
          <NormalText
            text={translate('Welcome')}
            style={{ fontSize: moderateScale(22) }}
          />
          <View style={styles.BtnCover}>
            <View style={styles.BtnContainer}>
              <NormalButton
                onPress={goToEventScreen}
                btnText={translate('Start')}
                backgroundColor={AppColors.DeepBlue}
                borderRadius={moderateScale(40)}
                style={{
                  fontSize: moderateScale(20),
                }}
                containerStyle={{
                  paddingHorizontal: moderateScale(30),
                  paddingVertical: moderateScale(14),
                }}
              />
            </View>
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
};
const styles = StyleSheet.create({
  mainImageContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  mainImage: {
    width: moderateScale(297.51),
    height: moderateScale(250),
    alignSelf: 'center',
  },
  Frame: {
    width: '100%',
    height: moderateScale(350.53),
    alignItems: 'center',
  },
  Logo: {
    height: moderateScale(60),
    marginTop: moderateScale(80),
  },
  BtnCover: {
    paddingHorizontal: moderateScale(9),
    paddingVertical: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(9,86,163,.75)',
    borderRadius: moderateScale(40),
    marginVertical: moderateScale(40),
  },
  BtnContainer: {
    paddingHorizontal: moderateScale(8),
    paddingVertical: 0,
    alignItems: 'center',
    backgroundColor: 'rgba(9,86,163,.5)',
    borderRadius: moderateScale(40),
  },
});
