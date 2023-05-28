/**
 * SetAction
 */

import { TUserProfile } from '../../Types';
import { IAction } from '../types';
import { USER_ACTION_TYPES } from '../ActionTypes';

export const setUserProfile = (user: TUserProfile): IAction<TUserProfile> => ({
  type: USER_ACTION_TYPES.SAVE_USER_TOKEN,
  payload: user,
});

export function saveUserToken<T>(userToken: T): IAction<T> {
  return {
    type: USER_ACTION_TYPES.SAVE_USER_TOKEN,
    payload: userToken,
  };
}

export function saveProfileData<T>(data: T): IAction<T> {
  return {
    type: USER_ACTION_TYPES.SAVE_ALL,
    payload: data,
  };
}
