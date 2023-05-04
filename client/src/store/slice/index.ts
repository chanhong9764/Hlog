import { combineReducers } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import configReducer from './configSlice';

export default combineReducers({
  user: userReducer,
  config: configReducer,
});
