import { FETCH_WORDS, RESET_SELECTED_WORD, SET_SELECTED_WORD } from './types';
import axios from 'axios/index';

export const fetchWords = () => dispatch => {
  axios
    .get(`/api/words`)
    .then(res => Array.from(res.data))
    .then(Words =>
      dispatch({
        type: FETCH_WORDS,
        payload: Words
      })
    );
};

export const resetSelectedWord = () => ({ type: RESET_SELECTED_WORD });
export const setSelectedWord = word => ({
  type: SET_SELECTED_WORD,
  payload: word
});
