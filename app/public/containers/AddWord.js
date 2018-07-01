import AddWord from '../components/AddWord';
import { connect } from 'react-redux';
import { showWordModal } from './../actions/modalsActions';
import { resetSelectedWord } from './../actions/wordsActions';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  openWordModal() {
    dispatch(resetSelectedWord());
    dispatch(showWordModal(true));
  }
});

export default connect(mapStateToProps, mapDispathToProps)(AddWord);
