import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { LoginRequestPayload, UserDataPayLoad } from '../../@types/user';

export interface UserState {
  userLoading: boolean;
  userData: UserDataPayLoad | null;
  error: string | null;
}

const initialState: UserState = {
  userLoading: false,
  userData: null,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // Login
    loginRequest(state: UserState, _action: PayloadAction<LoginRequestPayload>) {
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    },
    loginSuccess(state: UserState, action: PayloadAction<UserDataPayLoad>) {
      return {
        ...state,
        userLoading: false,
        userData: action.payload,
      };
    },
    loginFailure(state: UserState, action: PayloadAction<{ error: string }>) {
      return {
        ...state,
        userLoading: false,
        error: action.payload.error,
      };
    },

    // Logout
    logoutRequest(state: UserState) {
      return {
        ...state,
        userLoading: true,
        error: null,
      };
    },
    logoutSuccess(state: UserState) {
      return {
        ...state,
        userLoading: false,
        userData: null,
      };
    },
    logoutFailure(state: UserState, action: PayloadAction<{ error: string }>) {
      return {
        ...state,
        userLoading: false,
        error: action.payload.error,
      };
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
