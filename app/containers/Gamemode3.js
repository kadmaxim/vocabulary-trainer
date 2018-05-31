import Gamemode3 from '../components/Gamemode3';
import { connect } from 'react-redux';

import DB from './../store/db';
import _ from 'lodash/collection';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  generateNext: (listSize = 4) => {
    let answers = _.sampleSize(DB, listSize);
    let correct = _.sample(answers);

    dispatch({ type: 'SET_WORDS', payload: answers });
    dispatch({ type: 'SET_CORRECT', payload: correct });
    dispatch({ type: 'SET_FREEZE', payload: false });
  },
  setWordsList: answers => dispatch({ type: 'SET_WORDS', payload: answers })
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode3);
