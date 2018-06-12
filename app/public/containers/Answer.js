import Answer from './../components/Answer';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  correct: state.words_list.correct
});

const mapDispathToProps = dispatch => ({
  toggleImg: () => dispatch({ type: 'TOGGLE_IMG' })
});

export default connect(mapStateToProps, mapDispathToProps)(Answer);
