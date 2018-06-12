import ModalAuth from './../components/ModalAuth';
import {connect} from 'react-redux';
import axios from 'axios';

import {SAVE_USER} from './../actions/types';

const mapStateToProps = state => ({
  isActive: state.modal.isShowModal
});

const mapDispathToProps = dispatch => ({
  closeModal: () => dispatch({type: 'CLOSE_MODAL'}),
  login: () => {
    document.querySelector('.username-help').innerText = '';
    let userLogin = document.querySelector('[name=login]').value;
    let userPass = document.querySelector('[name=pass]').value;
    axios
      .post(`/api/login`, {
        username: userLogin,
        password: userPass
      })
      .then(
        res => {
          let userData = res.data;
          dispatch({
            type: SAVE_USER,
            payload: userData
          });
        },
        err => {
          document.querySelector('.username-help').innerText = err.message;
        }
      );
  },
  register: () => {
    let userLogin = document.querySelector('[name=login]').value;
    let userPass = document.querySelector('[name=pass]').value;
    axios
      .put(`/api/register`, {
        username: userLogin,
        password: userPass
      })
      .then(res => res.data, err => console.log(err))
      .then(obj => {
        if (obj.status !== 'success') {
          document.querySelector('.username-help').innerText = obj.message;
        }
      });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(ModalAuth);
