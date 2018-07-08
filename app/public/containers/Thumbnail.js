import Thumbnail from "./../components/Thumbnail";
import { connect } from "react-redux";
import { TOGGLE_IMG } from "./../actions/types";

const mapStateToProps = state => ({
  showImg: state.mode.showImg,
  correct: state.mode.correct
});

const mapDispathToProps = dispatch => ({
  toggleImg: () => dispatch({ type: TOGGLE_IMG })
});

export default connect(mapStateToProps, mapDispathToProps)(Thumbnail);
