import { call, ForkEffect, put, takeLatest } from 'redux-saga/effects';
import { USER_ACTION_TYPES } from '../ActionTypes';
// import { signInWithEmailAndPassword } from "../apis/functions/user";
const getUserInfo = () => {};

function* handGetUserInfo(body: { type: string }) {
  try {
    const response = yield call(getUserInfo);
    if (response?.data?.data?.id) {
      //   yield put(setUserInfo(response.data.data));
    } else throw new Error('Can not get user infomation');
  } catch (err) {}
}
export function* watchGetUserInfomation(): Generator<
  ForkEffect<never>,
  void,
  unknown
> {
  yield takeLatest(USER_ACTION_TYPES.GET_USER_PROFILE, handGetUserInfo);
}
