import EditButton from './../components/EditButton';
import { connect } from 'react-redux';
import { ADD_WORD } from '../actions/types';

import { showWordModal } from './../actions/modalsActions';
import { setSelectedWord } from './../actions/wordsActions';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  openWordModal(word) {
    dispatch(setSelectedWord(word));
    dispatch(showWordModal(true));
  }
});

export default connect(mapStateToProps, mapDispathToProps)(EditButton);
