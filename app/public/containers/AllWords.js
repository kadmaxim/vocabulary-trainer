import AllWords from '../components/AllWords';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  allWords: state.words.all
});

const mapDispathToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispathToProps)(AllWords);
