import { FETCH_WORDS } from './types';
import axios from 'axios/index';

export const fetchWords = () => dispatch => {
  axios
    .get(`/api/words`)
    .then(res => {
      return Array.from(res.data);
    })
    .then(Words =>
      dispatch({
        type: FETCH_WORDS,
        payload: Words
      })
    );
};
