import EditButton from './../components/EditButton';
import { connect } from 'react-redux';
import { ADD_WORD } from '../actions/types';

import { FETCH_WORDS } from '../actions/types';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  openWordModal(word) {
    dispatch({
      type: 'SET_SELECTED_WORD',
      payload: word
    });
    dispatch({
      type: 'SHOW_WORD_MODAL',
      payload: true
    });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(EditButton);
