import App from '../components/App';
import { connect } from 'react-redux';
import axios from 'axios';

import { SAVE_USER } from './../actions/types';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  checkAuth: () => {
    axios.post(`/api/check`).then(
      res => {
        let data = res.data;

        if (data.status) {
          dispatch({
            type: 'SET_NOTIFICATION',
            payload: { message: data.message, color: data.status }
          });
        } else {
          dispatch({
            type: SAVE_USER,
            payload: data
          });
        }
      },
      err => {
        dispatch({
          type: 'SET_NOTIFICATION',
          payload: { message: err.message, color: 'danger' }
        });
      }
    );
  }
});

export default connect(mapStateToProps, mapDispathToProps)(App);
