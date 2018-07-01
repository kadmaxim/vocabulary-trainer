import App from '../components/App';
import { connect } from 'react-redux';
import axios from 'axios';

import { SAVE_USER } from './../actions/types';
import { notify } from './../actions/notificationActions';
import { fetchWords } from '../actions/wordsActions';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  getAllWords() {
    dispatch(fetchWords());
  },
  checkAuth: () => {
    axios.post(`/api/check`).then(
      res => {
        let data = res.data;

        if (data.status) {
          let { message, color } = data;
          dispatch(notify(message, color));
        } else {
          dispatch({
            type: SAVE_USER,
            payload: data
          });
        }
      },
      err => {
        dispatch(notify(err.message));
      }
    );
  }
});

export default connect(mapStateToProps, mapDispathToProps)(App);
