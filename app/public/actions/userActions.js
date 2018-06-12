import {LOGIN, REGISTER} from './types';
import axios from 'axios/index';

export const login = loginData => dispatch => {
  console.log('come here');
  axios
    .post(`/api/user`, {
      userName: loginData.userName,
      password: loginData.userPassword
    })
    .then(res => res.data)
    .then(login => {
      console.log(login);
      dispatch({
        type: LOGIN,
        payload: login
      });
    });
};

export const register = registerData => dispatch => {
  axios
    .put(`/api/user`, {
      userName: registerData.userName,
      password: registerData.userPassword
    })
    .then(res => {
      return Array.from(res.data);
    })
    .then(register =>
      dispatch({
        type: REGISTER,
        payload: register
      })
    );
};
