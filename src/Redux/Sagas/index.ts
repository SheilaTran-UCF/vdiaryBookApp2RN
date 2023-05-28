import { all, fork, AllEffect, ForkEffect } from 'redux-saga/effects';
import { watchGetUserInfomation } from './users';
export default function* rootSaga(): Generator<
  AllEffect<ForkEffect<void>>,
  void,
  unknown
> {
  yield all([fork(watchGetUserInfomation)]);
}
