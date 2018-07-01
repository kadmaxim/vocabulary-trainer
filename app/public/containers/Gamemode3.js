import Gamemode3 from '../components/Gamemode3';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';
import { notify } from './../actions/notificationActions';
import { resetSelectedWord } from './../actions/wordsActions';

const mapStateToProps = state => ({
  answers: state.mode.wordsList,
  selected: state.selectedWord,
  shuffled: state.mode.shuffledList
});

const mapDispathToProps = dispatch => ({
  generateNext: listSize => {
    dispatch(resetSelectedWord());
    dispatch(notify());

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
        dispatch(notify('Richtige Antwort!', 'success'));
      } else {
        dispatch(notify('Falsche Antwort!', 'danger'));
      }
      dispatch(resetSelectedWord());
    } else {
      dispatch({ type: 'SET_SELECTED_WORD', payload: elem });
      dispatch(notify());
    }
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode3);
