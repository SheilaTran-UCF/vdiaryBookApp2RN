import { applyMiddleware, createStore, Middleware, Store } from 'redux';
import { persistStore } from 'redux-persist';
import rootReducer from '../Reducer';

let store: Store<ReturnType<typeof rootReducer>>;

export const configureStore = (sagaMiddleware: Middleware) => {
  store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

  const persistor = persistStore(store);
  return { store, persistor };
};

export function getStore(): Store<ReturnType<typeof rootReducer>> {
  // @ts-ignore
  return store;
}
