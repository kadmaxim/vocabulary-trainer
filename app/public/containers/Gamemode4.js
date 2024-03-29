import Gamemode4 from "../components/Gamemode4";
import { connect } from "react-redux";

import { generate, freezing } from "./../actions/modeActions";

const mapStateToProps = state => ({
  list: state.mode.wordsList,
  correct: state.mode.correct
});

const mapDispathToProps = dispatch => ({
  generateNext: (listSize = 1) => dispatch(generate(listSize)),
  freezeAll: mode => dispatch(freezing(mode))
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode4);
