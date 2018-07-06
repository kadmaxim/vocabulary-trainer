import QInput from './../components/QInput';
import { connect } from 'react-redux';

import { freezing, giveAnswer } from './../actions/modeActions';

const mapStateToProps = state => ({
  mode: state.mode.freeze,
  answers: state.mode.wordsList,
  rid: state.mode.correct._id
});

const mapDispathToProps = dispatch => ({
  handleClick: answerID => {
    dispatch(freezing(true));
    dispatch(giveAnswer(answerID));
  }
});

export default connect(mapStateToProps, mapDispathToProps)(QInput);
