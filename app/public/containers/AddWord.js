import AddWord from '../components/AddWord';
import { connect } from 'react-redux';
import { addWord } from '../actions/words_listActions';
import { ADD_WORD } from '../actions/types';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  openWordModal() {
    dispatch({
      type: 'RESET_SELECTED_WORD'
    });
    dispatch({
      type: 'SHOW_WORD_MODAL',
      payload: true
    });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(AddWord);
