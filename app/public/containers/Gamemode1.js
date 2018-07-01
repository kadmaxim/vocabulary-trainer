import Gamemode1 from '../components/Gamemode1';
import { connect } from 'react-redux';

import { generate, freezing } from './../actions/modeActions';

const mapStateToProps = state => ({
  freeze: state.mode.freeze,
  answers: state.mode.wordsList,
  correct: state.mode.correct
});

const mapDispathToProps = dispatch => ({
  generateNext: (listSize = 4) => dispatch(generate(listSize)),
  freezeAll: mode => dispatch(freezing(mode))
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode1);
