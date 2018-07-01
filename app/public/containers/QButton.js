import QButton from './../components/QButton';
import { connect } from 'react-redux';

import { freezing, giveAnswer } from './../actions/modeActions';

const mapStateToProps = state => ({
  answers: state.mode.wordsList,
  rid: state.mode.correct._id
});

const mapDispathToProps = dispatch => ({
  handleClick: answerID => {
    dispatch(freezing(true));
    dispatch(giveAnswer(answerID));
  }
});

export default connect(mapStateToProps, mapDispathToProps)(QButton);
