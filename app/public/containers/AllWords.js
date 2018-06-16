import AllWords from '../components/AllWords';
import {connect} from 'react-redux';
import {fetchWords} from '../actions/words_listActions';
import {FETCH_WORDS} from '../actions/types';

import axios from 'axios';

const mapStateToProps = state => ({
  words_list: state.words_list.items
});

const mapDispathToProps = dispatch => ({
  getAllWords(userID) {
    axios
      .get(`/api/words`)
      .then(res => {
        return Array.from(res.data);
      })
      .then(Words =>
        dispatch({
          type: FETCH_WORDS,
          payload: Words
        })
      );
  }
});

export default connect(mapStateToProps, mapDispathToProps)(AllWords);
