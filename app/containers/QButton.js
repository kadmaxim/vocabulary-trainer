import Mode2 from './../components/QButton';
import { connect } from 'react-redux';

export default connect(
  state => ({
    mode: state.freeze,
    answers: state.wordsList,
    rid: state.correct.id
  }),
  dispatch => ({
    handler: answer => {
      dispatch({ type: 'SET_FREEZE', payload: true });
      dispatch({ type: 'GIVE_ANSWER', payload: answer });
    }
  })
)(Mode2);
