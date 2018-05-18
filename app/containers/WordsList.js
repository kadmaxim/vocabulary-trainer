import WordsList from './../components/WordsList';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  answers: state.wordsList
});

export default connect(mapStateToProps)(WordsList);
