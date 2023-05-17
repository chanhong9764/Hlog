import { all, fork } from 'redux-saga/effects';
import categorySaga from './configSaga';
import userSaga from './userSaga';

export default function* rootSaga() {
  yield all([fork(userSaga), fork(categorySaga)]);
}
