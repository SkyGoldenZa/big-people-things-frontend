import api from 'services/api';
import { LoginType } from 'types/Auth';

export const getSignup = (data: any) => {
  return api.post('/auth/signup', data);
};

export const postSignup = (data: LoginType) => {
  return api.post('/auth/signup', data);
};

export const postLogin = (data: LoginType) => {
  const response = api.post('/auth/login', data);
};

export const putSignup = (data: any) => {
  return api.post('/auth/signup', data);
};

export const deleteSignup = (data: any) => {
  return api.post('/auth/signup', data);
};
