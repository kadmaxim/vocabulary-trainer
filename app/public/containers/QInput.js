import Mode2 from './../components/QInput';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  mode: state.words_list.freeze,
  answers: state.words_list.wordsList,
  rid: state.words_list.correct.id
});

const mapDispathToProps = dispatch => ({
  handleClick: answerID => {
    dispatch({ type: 'SET_FREEZE', payload: true });
    dispatch({ type: 'GIVE_ANSWER', payload: answerID });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Mode2);
