import API from './axios';
import { LoginRequestPayload } from '../@types/user';

export const userAPI = {
  login(data: LoginRequestPayload) {
    return API.post('/auth', data);
  },
  logout() {
    return API.delete('/auth');
  },
};
