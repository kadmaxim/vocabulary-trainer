import Gamemode3 from '../components/Gamemode3';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({
  freeze: state.words_list.freeze,
  answers: state.words_list.wordsList,
  correct: state.words_list.correct,
  selected: state.selectedWord,
  shuffled: state.words_list.shuffledList
});

const mapDispathToProps = dispatch => ({
  generateNext: listSize => {
    axios.get(`/api/words`).then(res => {
      let DB = res.data;
      let answers = _.sampleSize(DB, listSize);
      let correct = _.sample(answers);

      dispatch({ type: 'SET_WORDS', payload: answers });
      dispatch({ type: 'SET_SHUFFLED_WORDS', payload: _.shuffle(answers) });
    });
  },
  handleClick: (elem, selected) => {
    console.log('Clicked: ', 'Selected: ');
    console.log(elem, selected);
    if (selected.original !== '') {
      if (selected._id === elem._id) {
        dispatch({
          type: 'SET_NOTIFICATION',
          payload: { message: 'Right answer!', color: 'success' }
        });
      } else {
        dispatch({
          type: 'SET_NOTIFICATION',
          payload: { message: 'Wrong answer!', color: 'danger' }
        });
      }
      dispatch({ type: 'RESET_SELECTED_WORD' });
    } else {
      dispatch({ type: 'SET_SELECTED_WORD', payload: elem });
      dispatch({
        type: 'SET_NOTIFICATION',
        payload: { message: '' }
      });
    }
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode3);
