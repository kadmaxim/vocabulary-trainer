import WordsList from './../components/WordsList';
import { connect } from 'react-redux';

export default connect(
  state => ({
    answers: state.wordsList
  }),
  dispatch => ({
    handler: () =>
      dispatch({
        type: 'HANDLE'
      })
  })
)(WordsList);
