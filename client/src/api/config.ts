import API from './axios';

export const configAPI = {
  category() {
    return API.get('/category');
  },
};
