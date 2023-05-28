/**
 * @format
 */
import { AppRegistry, Platform } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';
import 'react-native-gesture-handler';
import { Text, LogBox } from 'react-native';
// import codePush from 'react-native-code-push';

// Remove console.log when build refactor
if (!__DEV__) {
  console.log = () => {};
}

LogBox.ignoreAllLogs(true);

if (Text.defaultProps == null) {
  Text.defaultProps = {};
}
// if (NBText.defaultProps == null) NBText.defaultProps = {};
Text.defaultProps.allowFontScaling = false;
// NBText.defaultProps.allowFontScaling = false;
// TextInput.defaultProps.allowFontScaling = false
//set check frequency options
// const codePushOptions = {
//   checkFrequency: codePush.CheckFrequency.ON_APP_START,
// };
// const ReachApp = codePush(codePushOptions)(App);
AppRegistry.registerComponent(
  Platform.OS === 'ios' ? 'SocialNetwork' : appName,
  () => App,
);
