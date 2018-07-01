import Thumbnail from './../components/Thumbnail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  showImg: state.words.showImg,
  correct: state.words.correct
});

const mapDispathToProps = dispatch => ({
  toggleImg: () => dispatch({ type: 'TOGGLE_IMG' })
});

export default connect(mapStateToProps, mapDispathToProps)(Thumbnail);
