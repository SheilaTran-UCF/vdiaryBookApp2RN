import { USER_ACTION_TYPES } from '../ActionTypes';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer } from 'redux-persist';
import { TUserProfile, TUserToken } from '@/Types';
// import { TUserProfile } from '../../Types';

type State = {
  userToken?: TUserToken | null;
  userProfile?: TUserProfile | null;
  userLogin?: string | null;
};

const initialState: State = {
  userToken: null,
  userProfile: null,
  userLogin: '',
};

const userStorageReducer = (
  state: State = initialState,
  action: {
    type: keyof typeof USER_ACTION_TYPES;
    payload?: any;
  },
) => {
  switch (action.type) {
    case USER_ACTION_TYPES.SAVE_USER_TOKEN:
      return { ...state, userToken: action.payload };
    case USER_ACTION_TYPES.DELETE_USER_TOKEN:
      return { ...state, userToken: null, userProfile: null };
    case USER_ACTION_TYPES.SAVE_USER_PROFILE:
      return { ...state, userProfile: action.payload };
    case USER_ACTION_TYPES.SAVE_USER_CENSOR:
      return {
        ...state,
        userProfile: { ...state.userProfile, dataCensor: action.payload },
      };
    case USER_ACTION_TYPES.DELETE_USER_PROFILE:
      return { ...state, userProfile: null };
    case USER_ACTION_TYPES.SAVE_USER_LOGIN:
      return { ...state, userLogin: action.payload };
    case USER_ACTION_TYPES.DELETE_ALL:
      return { ...state, userProfile: null, userToken: null };
    case USER_ACTION_TYPES.UPDATE_PROFILE:
      return {
        ...state,
        userProfile: { ...state.userProfile, user: action.payload },
      };
    case USER_ACTION_TYPES.SAVE_ALL:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const persistConfig = {
  key: 'userStorage',
  storage: AsyncStorage,
  blacklist: [],
  whitelist: ['userToken', 'userProfile'],
};

const reducer = persistReducer(persistConfig, userStorageReducer);

export default reducer;
