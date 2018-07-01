import axios from 'axios';
import { SAVE_USER, CLEAR_USER } from './types';
import { notify } from './notificationActions';
import { showAuthModal } from './modalsActions';

export const userLogin = postData => dispatch => {
  document.querySelector('.username-help').innerText = '';
  axios.post(`/api/login`, postData).then(
    res => {
      let userData = res.data;
      dispatch({
        type: SAVE_USER,
        payload: userData
      });
      dispatch(showAuthModal(false));
      dispatch(notify());
    },
    err => {
      document.querySelector('.username-help').innerText = err.message;
    }
  );
};

export const userRegister = postData => dispatch => {
  axios
    .put(`/api/register`, postData)
    .then(res => res.data, err => console.log(err))
    .then(obj => {
      if (obj.status !== 'success') {
        document.querySelector('.username-help').innerText = obj.message;
      } else {
        document.querySelector('.login-btn').click();
      }
    });
};

export const userLogout = () => dispatch => {
  axios.get(`/api/logout`).then(res => {
    dispatch({
      type: CLEAR_USER
    });
  });
};
