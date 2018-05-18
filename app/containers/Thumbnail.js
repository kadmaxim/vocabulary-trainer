import Thumbnail from './../components/Thumbnail';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  hideImg: state.showImg,
  correct: state.correct
});

const mapDispathToProps = dispatch => ({
  toggleImg: () => dispatch({ type: 'TOGGLE_IMG' })
});

export default connect(mapStateToProps, mapDispathToProps)(Thumbnail);
