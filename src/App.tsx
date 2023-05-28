import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import ApplicationNavigator from '@/Navigators';
import { configureStore } from '@/Redux/Store';
import { SocketContext, useSocket } from './Services/Socket';
import Reactotron from 'reactotron-react-native';
import ReactotronConfig from './Helper/Config/ReactotronConfig';
import createSagaMiddleware from 'redux-saga';
import i18n, { setLocation } from './Translation/i18n';

setLocation(i18n, 'vi');
const reactotron = ReactotronConfig.configure(); // config reactotron
let sagaMiddleware = createSagaMiddleware();

if (__DEV__) {
  const sagaMonitor = Reactotron?.createSagaMonitor?.();
  sagaMiddleware = createSagaMiddleware({ sagaMonitor });
}
const App = () => {
  const { store, persistor } = configureStore(sagaMiddleware);
  const socket = useSocket();

  return (
    <SocketContext.Provider value={socket}>
      <Provider store={store}>
        {/**
         * PersistGate delays the rendering of the app's UI until the persisted state has been retrieved
         * and saved to redux.
         * The `loading` prop can be `null` or any react instance to show during loading (e.g. a splash screen),
         * for example `loading={<SplashScreen />}`.
         * @see https://github.com/rt2zz/redux-persist/blob/master/docs/PersistGate.md
         */}
        <PersistGate loading={null} persistor={persistor}>
          <ApplicationNavigator />
        </PersistGate>
      </Provider>
    </SocketContext.Provider>
  );
};

export default App;
