import Home from '../components/Home';
import {connect} from 'react-redux';
import axios from 'axios';
import _ from 'lodash/collection';

import {SAVE_USER, CLEAR_USER} from './../actions/types';

const mapStateToProps = state => ({
  userName: state.user.userName
});

const mapDispathToProps = dispatch => ({
  showModal: () => {
    dispatch({type: 'SHOW_MODAL'});
  },
  checkAuth: () => {
    axios.post(`/api/check`).then(res => {
      let userData = res.data;
      dispatch({
        type: SAVE_USER,
        payload: userData
      });
    });
  },
  logout: () => {
    console.log('logout');
    axios.get(`/api/logout`).then(res => {
      dispatch({
        type: CLEAR_USER
      });
    });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Home);
