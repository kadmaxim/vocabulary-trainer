import Mode2 from './../components/QInput';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  mode: state.freeze,
  answers: state.wordsList,
  rid: state.correct.id
});

const mapDispathToProps = dispatch => ({
  handleClick: answerID => {
    dispatch({ type: 'SET_FREEZE', payload: true });
    dispatch({ type: 'GIVE_ANSWER', payload: answerID });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Mode2);
