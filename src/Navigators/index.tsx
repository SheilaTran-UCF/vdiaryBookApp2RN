import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { createStackNavigator } from '@react-navigation/stack';
// import { AuthStack } from './Stack/AuthStack';
import { IntroStack } from './Stack/IntroStack';
// import { useSelector } from '@/Redux/Reducer';
import { StatusBar } from 'react-native';
import { NavigationController } from './Services';
import { GroupStack } from './Stack/GroupStask';
import { AuthStack } from './Stack/AuthStack';
import { BottomTabStack } from './Stack/BottomTabStack';
import RouterName from './RouterName';
import { GloablUI } from '@/GlobalUI';
import { EventStack } from './Stack/EventStack';

const Stack = createStackNavigator();

const ApplicationNavigator = () => {
  // const token = 'token';
  // const token = useSelector(
  //   state => state.userReducers.userToken?.access_token || '',
  // );
  //   useEffect(() => {
  //     Authentication.createSession();
  //   }, []);

  //   useEffect(() => {
  //     let interval: NodeJS.Timer;
  //     if (token) {
  //       interval = setInterval(() => {
  //         Authentication.refreshToken();
  //       }, 3600000);
  //     }
  //     return () => clearInterval(interval);
  //   }, [token]);

  // console.log('ModalStackModalStackModalStack');

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#fff'} />
      <NavigationContainer ref={NavigationController.navigationRef}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}
          initialRouteName={RouterName.IntroScreen}>
          {/* {token ? ( */}
          <>
            {/* Authenticated screen */}
            {BottomTabStack(Stack)}
          </>
          {/* ) : ( */}
          <>
            {IntroStack(Stack)}
            {AuthStack(Stack)}
            {EventStack(Stack)}
            {GroupStack(Stack)}
          </>
          {/* )} */}
        </Stack.Navigator>
        <GloablUI />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default ApplicationNavigator;
