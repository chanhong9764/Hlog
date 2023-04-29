import { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';
import { userActions } from '../store/slice/userSlice';
import { LoginRequestPayload } from '../@types/user';

// 커스텀 훅
export default function useUser() {
  const { userLoading } = useSelector((state: RootState) => state.user);
  const dispatch = useDispatch();

  const login = useCallback((data: LoginRequestPayload) => {
    dispatch(userActions.loginRequest(data));
  }, []);

  const logout = useCallback(() => {
    dispatch(userActions.logoutRequest());
  }, []);

  return { userLoading, login, logout };
}
