import Thumbnail from './../components/Thumbnail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  hideImg: state.words_list.showImg,
  correct: state.words_list.correct
});

const mapDispathToProps = dispatch => ({
  toggleImg: () => dispatch({ type: 'TOGGLE_IMG' })
});

export default connect(mapStateToProps, mapDispathToProps)(Thumbnail);
