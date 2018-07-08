import { FETCH_WORDS, RESET_SELECTED_WORD, SET_SELECTED_WORD } from "./types";
import axios from "axios/index";
import { notify } from "./notificationActions";

export const fetchWords = () => dispatch => {
  axios
    .get(`/api/words`)
    .then(res => Array.from(res.data))
    .then(words => {
      dispatch({
        type: FETCH_WORDS,
        payload: words
      });

      if (words.length <= 3) {
        dispatch(notify("Bitte fügen Sie weitere Wörter hinzu!"));
      }
    });
};

export const resetSelectedWord = () => ({ type: RESET_SELECTED_WORD });
export const setSelectedWord = word => ({
  type: SET_SELECTED_WORD,
  payload: word
});
