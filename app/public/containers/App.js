import App from '../components/App';
import {connect} from 'react-redux';
import axios from 'axios';

import {SAVE_USER} from './../actions/types';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  checkAuth: () => {
    axios.post(`/api/check`).then(res => {
      let userData = res.data;
      dispatch({
        type: SAVE_USER,
        payload: userData
      });
    });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(App);
