import AllWords from '../components/AllWords';
import { connect } from 'react-redux';
import { fetchWords } from '../actions/words_listActions';

const mapStateToProps = state => ({
  words_list: state.words_list.items
});

const mapDispathToProps = dispatch => ({
  getAllWords() {
    dispatch(fetchWords());
  }
});

export default connect(mapStateToProps, mapDispathToProps)(AllWords);
