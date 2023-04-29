import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { LoginRequestPayload } from '../../@types/user';
import { userAPI } from '../../api/user';
import { userActions } from '../slice/userSlice';

function* login(action: PayloadAction<LoginRequestPayload>) {
  try {
    const { data }: AxiosResponse = yield call(userAPI.login, action.payload);

    yield put(userActions.loginSuccess(data));
  } catch (e: any) {
    yield put(userActions.loginFailure(e.response.data));
  }
}

function* logout() {
  try {
    yield call(userAPI.logout);
    yield put(userActions.logoutSuccess());
  } catch (e: any) {
    yield put(userActions.logoutFailure(e.response.data));
  }
}

export default function* userSaga() {
  yield all([takeLatest(userActions.loginRequest, login), takeLatest(userActions.logoutRequest, logout)]);
}
