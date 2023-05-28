// import { GlobalUIManager } from '@/GlobalUI';
import { getStore } from '@/Redux/Store';
import messaging from '@react-native-firebase/messaging';
import FirebaseFCMService from '../FirebaseFCM/Firebase';
// import { GlobalUIManager } from '../../GlobalUI';

export default class FCM {
  private uId: string;
  private currentToken: string;

  constructor(uId: string) {
    console.log('FCM:initFCM:uId', uId);

    this.uId = uId;
    this.currentToken = '';
  }

  initFCM = async () => {
    console.log('FCM:initFCM');
    // await messaging().registerDeviceForRemoteMessages();
    this.checkFCMPermission();
  };

  onLogout = () => {
    console.log('onLogout');
    messaging()
      .getToken()
      .then(fcmToken => {
        console.log('onLogout:fcmToken ', fcmToken);
        if (fcmToken) {
          FirebaseFCMService.removeToken(fcmToken, this.uId)
            .then(res => {
              this.createFCMNotificationListeners();
              console.log('removeToken', res);
            })
            .catch(err => {
              console.log('removeToken: err', err);
            });
        }
      });
  };

  requestFCMPermission() {
    console.log('FCM:requestFCMPermission');
    messaging()
      .requestPermission()
      .then(() => this.getFCMToken())
      .catch(error => {
        console.log('FCM:initFCM err', error);
        // console.log('permission rejected')
      });
  }

  checkFCMPermission = async () => {
    console.log('FCM:checkFCMPermission');
    messaging()
      .hasPermission()
      .then(enabled => {
        console.log('FCM:checkFCMPermission:enabled', enabled);
        if (enabled == -1) {
          this.requestFCMPermission();
        } else {
          this.getFCMToken();
        }
      });
  };

  getFCMToken() {
    console.log('FCM:getFCMToken');
    this.pushFCMToken();

    messaging().onTokenRefresh(token => {
      this.changeToken(token);
    });
  }

  pushFCMToken() {
    const that = this;
    messaging()
      .getToken()
      .then((fcmToken: string) => {
        if (fcmToken) {
          const store = getStore();
          const { userStorage } = store.getState();
          const { userProfile } = userStorage;

          const uId = this.uId ? this.uId : userProfile?.user._id;
          console.log('uId', uId);
          if (uId) {
            FirebaseFCMService.pushToken(fcmToken, uId)
              .then(res => {
                that.currentToken = fcmToken;
                this.createFCMNotificationListeners();
                // this.initOnlineOfflineUser(fcmToken, uId);
                console.log('pushTokenToAll', res, fcmToken);
              })
              .catch(err => {
                console.log('pushTokenToAll: err', err);
              });
          }
        }
      });
  }

  changeToken(newToken: string) {
    const store = getStore();
    const { userStorage } = store.getState();
    const { userProfile } = userStorage;
    const that = this;
    const uId = this.uId ? this.uId : userProfile?.user._id;
    if (uId) {
      FirebaseFCMService.changeToken(this.currentToken, newToken, uId)
        .then(res => {
          that.currentToken = newToken;
          // this.initOnlineOfflineUser(fcmToken, uId);
          console.log('changeToken', res, {
            currentToken: this.currentToken,
            newToken,
          });
        })
        .catch(err => {
          console.log('changeToken: err', err);
        });
    }
  }

  createFCMNotificationListeners = async () => {
    console.log('FCM:createFCMNotificationListeners');
    //console.log('notification:createFCMNotificationListeners');
    /*
     * Triggered when a particular notification has been received in foreground
     * */

    messaging().onMessage(async (remoteMessage: any) => {
      console.log('A new FCM message arrived!', JSON.stringify(remoteMessage));

      //   GlobalUIManager.view.showSuccessFlashMsg({
      //     title: remoteMessage.notification.title,
      //     content: remoteMessage.notification.body,
      //   });
    });
  };

  // initOnlineOfflineUser = async (fcmToken: string, uid: number) => {
  //     // user has a device token
  //     console.log("messaging().getToken", fcmToken);

  //     // const uuid = DeviceInfo.getUniqueID();

  //     // Create a reference to this user's specific status node.
  //     // This is where we will store data about being online/offline.
  //     var userStatusDatabaseRef = database().ref('/users/' + uid + "/devices/" + fcmToken);

  //     // We'll create two constants which we will write to
  //     // the Realtime database when this device is offline
  //     // or online.
  //     var isOfflineForDatabase = {
  //         state: 'offline',
  //         last_changed: database.ServerValue.TIMESTAMP,
  //     };

  //     var isOnlineForDatabase = {
  //         state: 'online',
  //         last_changed: database.ServerValue.TIMESTAMP,
  //     };

  //     // Create a reference to the special '.info/connected' path in
  //     // Realtime Database. This path returns `true` when connected
  //     // and `false` when disconnected.
  //     database().ref('.info/connected').on('value', function (snapshot) {
  //         // If we're not currently connected, don't do anything.
  //         if (snapshot.val() == false) {
  //             return;
  //         };

  //         // If we are currently connected, then use the 'onDisconnect()'
  //         // method to add a set which will only trigger once this
  //         // client has disconnected by closing the app,
  //         // losing internet, or any other means.
  //         userStatusDatabaseRef.onDisconnect().set(isOfflineForDatabase).then(function () {
  //             // The promise returned from .onDisconnect().set() will
  //             // resolve as soon as the server acknowledges the onDisconnect()
  //             // request, NOT once we've actually disconnected:
  //             // https://google.com/docs/reference/js/database.OnDisconnect

  //             // We can now safely set ourselves as 'online' knowing that the
  //             // server will mark us as offline once we lose connection.
  //             userStatusDatabaseRef.set(isOnlineForDatabase);
  //         });
  //     });
  // }
}
