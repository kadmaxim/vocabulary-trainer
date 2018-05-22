import Gamemode2 from '../components/Gamemode2';
import { connect } from 'react-redux';

import DB from './../store/db';
import _ from 'lodash/collection';

const mapStateToProps = state => ({
  freeze: state.freeze,
  answers: state.wordsList,
  correct: state.correct
});

const mapDispathToProps = dispatch => ({
  generateNext: (listSize = 4) => {
    let answers = _.sampleSize(DB, listSize);
    let correct = _.sample(answers);

    dispatch({ type: 'SET_WORDS', payload: answers });
    dispatch({ type: 'SET_CORRECT', payload: correct });
    dispatch({ type: 'SET_FREEZE', payload: false });
  },
  freezeAll: mode => dispatch({ type: 'SET_FREEZE', payload: mode })
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode2);
