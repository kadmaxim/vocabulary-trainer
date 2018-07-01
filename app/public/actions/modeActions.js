import axios from 'axios';
import _ from 'lodash/collection';
import { SET_WORDS, SET_CORRECT, SET_FREEZE } from './types';

export const generate = listSize => dispatch => {
  axios.get(`/api/words`).then(res => {
    let DB = res.data;
    let answers = _.sampleSize(DB, listSize);
    let correct = _.sample(answers);

    dispatch({ type: SET_WORDS, payload: answers });
    dispatch({ type: SET_CORRECT, payload: correct });
    dispatch({ type: SET_FREEZE, payload: false });
  });
};

export const freezing = mode => ({
  type: SET_FREEZE,
  payload: mode
});
