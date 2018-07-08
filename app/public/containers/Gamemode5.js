import Gamemode5 from "./../components/Gamemode5";
import { connect } from "react-redux";

import { generate, freezing } from "./../actions/modeActions";

const mapStateToProps = state => ({
  list: state.mode.wordsList,
  correct: state.mode.correct
});

const mapDispathToProps = dispatch => ({
  generateNext: (listSize = 4) => dispatch(generate(listSize)),
  freezeAll: mode => dispatch(freezing(mode))
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode5);
