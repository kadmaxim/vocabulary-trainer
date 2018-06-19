import DeleteButton from './../components/DeleteButton';
import { connect } from 'react-redux';
import { ADD_WORD } from '../actions/types';
import { fetchWords } from '../actions/words_listActions';

import axios from 'axios';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  handleClick: word => {
    if (confirm('Are you sure?')) {
      axios.delete(`/api/word/${word._id}`).then(res => {
        console.log(res);
        dispatch(fetchWords());
      });
    }
  }
});

export default connect(mapStateToProps, mapDispathToProps)(DeleteButton);
