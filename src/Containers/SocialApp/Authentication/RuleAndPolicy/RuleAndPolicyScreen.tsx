/* eslint-disable react-native/no-inline-styles */
// import { CtPageTitle } from '@/Assets';
import { CommonTabHeader2 } from '@/Commons';
import { NavigationController } from '@/Navigators/Services';
// import { GlobalUIManager } from '@/GlobalUI';
// import { NavigationController } from '@/Navigators/NavigationController';
// import { RuleAndPolicyScreenProps } from '@/Navigators/navType';
// import AccountApi from '@/Services/Api/AccountApi';
import { translate } from '@/Translation/i18n';
import React, { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
import { Dimensions, StyleSheet, View } from 'react-native';
import AutoHeightWebView from 'react-native-autoheight-webview';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const RuleAndPolicyScreen = () => {
  const inset = useSafeAreaInsets();
  //   const [t] = useTranslation();
  const [_html, setHTML] = React.useState('');
  const _goBack = () => {
    NavigationController.goBack();
  };
  const _getData = () => {
    // GlobalUIManager.view.showLoading();
    // AccountApi.getRuleAndPolicy()
    //   .then(res => {
    //     console.log('res get rule and policy', res);
    //     setHTML(res.data.suggets);
    //     GlobalUIManager.view.hideLoading();
    //   })
    //   .catch(err => {
    //     console.log('err get rule and policy', err);
    //     GlobalUIManager.view.hideLoading();
    //   });
  };
  useEffect(() => {
    _getData();
  }, []);
  return (
    <View
      style={[
        StyleSheet.absoluteFill,
        { flex: 1, paddingTop: inset.top, backgroundColor: '#ffffff' },
      ]}>
      <CommonTabHeader2 title={translate('RuleAndPolicy')} goBack={_goBack} />
      {!!_html && (
        <AutoHeightWebView
          style={{
            width: Dimensions.get('window').width - 15,
            marginTop: 35,
            flex: 1,
          }}
          // customScript={`document.body.style.background = 'white';`}
          customStyle={'* {font-size: 14px;}'}
          onSizeUpdated={(size: { height: any }) => console.log(size.height)}
          files={[
            {
              href: 'cssfileaddress',
              type: 'text/css',
              rel: 'stylesheet',
            },
          ]}
          source={{ html: _html }}
          scalesPageToFit={true}
          viewportContent={'width=device-width, user-scalable=no'}
        />
      )}
    </View>
  );
};
