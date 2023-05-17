import { PayloadAction } from '@reduxjs/toolkit';
import { AxiosResponse } from 'axios';
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { configAPI } from '../../api/config';
import { configActions } from '../slice/configSlice';

function* getCategorySaga() {
  try {
    const { data }: AxiosResponse = yield call(configAPI.category);
    yield put(configActions.categorySuccess(data));
  } catch (e: any) {
    yield put(configActions.categoryFailure(e.response.data));
  }
}

export default function* categorySaga() {
  yield all([takeLatest(configActions.categoryRequest, getCategorySaga)]);
}
