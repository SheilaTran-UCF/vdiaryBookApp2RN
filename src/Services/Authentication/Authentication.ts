import { saveProfileData, saveUserToken } from '@/Redux/Actions/UserAction';
import { getStore } from '@/Redux/Store';
import { TUserToken } from '@/Types';
import appleAuth, {
  AppleAuthRequestOperation,
  AppleAuthRequestScope,
} from '@invertase/react-native-apple-authentication';
// import { AccessToken, LoginManager } from 'react-native-fbsdk-next';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import AccountApi from '../Api/AccountApi';
import FCM from '../Firebase/fcm';
import Network, { ERROR_CODE } from '../Network/Network';
import { ResponseAPI, ResponseData } from '../type';
// import jwt_decode from 'jwt-decode';

function refreshToken() {
  Network.authorizedRequest<ResponseAPI>('api/v2/auth', 'POST')
    .then((response: any) => {
      console.log('object response', response);
      if (response.status === ERROR_CODE.SUCCESS) {
        const store = getStore();
        const { token } = response.data.data;
        const data = {
          access_token: token,
        };
        Network.setToken(token);
        store.dispatch(saveUserToken(data));
      } else {
        console.log('object fake');
      }
    })
    .catch(error => {
      console.warn(error);
    });
}

function loginAndCreateSession(
  userName: string,
  password: string,
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    AccountApi.login(userName, password)
      .then(async (resLogin: ResponseData<TUserToken>) => {
        console.log('resLogin', resLogin);
        const { access_token } = resLogin.data;
        const store = getStore();
        const data = {
          userToken: {
            access_token,
          },
          userProfile: resLogin.data,
        };
        if (resLogin?.data?.user._id) {
          const fcm = new FCM(resLogin.data.user._id);
          fcm.initFCM();
        }
        Network.setToken(access_token);
        store.dispatch(saveProfileData(data));
        resolve(true);
      })
      .catch(err => {
        reject(err);
      });
  });
}

const signInGoogleAndCreateSession = async () => {
  // GlobalUIManager.view.showLoading()
  try {
    await GoogleSignin.hasPlayServices();
    const userInfo = await GoogleSignin.signIn();
    console.log('gooole login', userInfo);

    GoogleSignin.getTokens()
      .then(
        ({
          idToken,
          accessToken,
        }: {
          idToken: string;
          accessToken: string;
        }) => {
          console.log({ idToken, accessToken });
          loginSocialAndCreateSession(accessToken, 'google')
            .then(() => {
              // GlobalUIManager.view.hideLoading()
            })
            .catch(() => {
              //TODO: handle err
              // GlobalUIManager.view.hideLoading(() => {
              //   GlobalUIManager.view.showErrorFlashMsg({
              //     content: ApiMsg.network_err
              //   })
              // })
            });
        },
      )
      .catch((error: any) => {
        console.log('Login fail with error: ' + error);
        // GlobalUIManager.view.hideLoading(() => {
        //   GlobalUIManager.view.showErrorFlashMsg({
        //     content: ApiMsg.network_err
        //   })
        // })
      });
    // this.setState({ userInfo });
    console.log('userInfo', userInfo);
  } catch (error: any) {
    console.log('error', error);
    if (error.code === statusCodes.SIGN_IN_CANCELLED) {
      console.log('error: SIGN_IN_CANCELLED');
      // user cancelled the login flow
    } else if (error.code === statusCodes.IN_PROGRESS) {
      console.log('error: IN_PROGRESS');
      // operation (e.g. sign in) is in progress already
    } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
      console.log('error: PLAY_SERVICES_NOT_AVAILABLE');
      // play services not available or outdated
    } else {
      console.log('error: other');
      // some other error happened
    }
    // GlobalUIManager.view.hideLoading(() => {
    //   GlobalUIManager.view.showErrorFlashMsg({
    //     content: ApiMsg.network_err
    //   })
    // })
  }
};

const signInAppleAndCreateSession = async () => {
  // performs login request
  console.log('11111111');
  const appleAuthRequestResponse = await appleAuth.performRequest({
    requestedOperation: AppleAuthRequestOperation.LOGIN,
    requestedScopes: [
      AppleAuthRequestScope.EMAIL,
      AppleAuthRequestScope.FULL_NAME,
    ],
  });

  // Ensure Apple returned a user identityToken
  if (!appleAuthRequestResponse.identityToken) {
    throw 'Apple Sign-In failed - no identify token returned';
  }

  loginSocialAndCreateSession(appleAuthRequestResponse.identityToken, 'apple')
    .then(() => {
      // GlobalUIManager.view.hideLoading()
    })
    .catch(() => {
      // GlobalUIManager.view.hideLoading(() => {
      //   GlobalUIManager.view.showErrorFlashMsg({
      //     content: ApiMsg.network_err
      //   })
      // })
    });

  // Sign the user in with the credential
  // return auth().signInWithCredential(appleCredential);
};

function loginSocialAndCreateSession(
  social_token: string,
  type: 'facebook' | 'google' | 'apple',
): Promise<boolean> {
  return new Promise((resolve, reject) => {
    console.log('loginSocialAndCreateSession', { social_token, type });
    AccountApi.loginSocial(social_token, type)
      .then(async (response: ResponseAPI) => {
        console.log('loginSocialAndCreateSession:Loginnnn', response);
        const { token } = response.data;
        Network.setToken(token);
        const store = getStore();
        Network.setToken(token);
        store.dispatch(saveProfileData(response.data));
        resolve(true);
      })
      .catch((err: any) => {
        reject(err);
      });
  });
}

export default {
  refreshToken,
  loginAndCreateSession,
  signInGoogleAndCreateSession,
  signInAppleAndCreateSession,
};
