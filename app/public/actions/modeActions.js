import axios from "axios";
import _ from "lodash/collection";
import {
  SET_WORDS,
  SET_CORRECT,
  SET_FREEZE,
  GIVE_ANSWER,
  LEAVE_DONE
} from "./types";
import { notify } from "./notificationActions";

export const generate = listSize => dispatch => {
  axios.get("/api/words").then(res => {
    let DB = res.data;
    let answers = _.sampleSize(DB, listSize);
    let correct = _.sample(answers);

    dispatch({ type: SET_WORDS, payload: answers });
    dispatch({ type: SET_CORRECT, payload: correct });
    dispatch(freezing(false));

    if (DB.length <= listSize) {
      dispatch(notify("Bitte fügen Sie weitere Wörter hinzu!"));
    }
  });
};

export const freezing = (mode, listName = "wordsList") => ({
  type: SET_FREEZE,
  payload: {
    mode,
    listName
  }
});

export const leaveDone = (listName = "wordsList", status) => ({
  type: LEAVE_DONE,
  payload: {
    listName,
    status
  }
});

export const giveAnswer = (itemID, listName = "wordsList") => ({
  type: GIVE_ANSWER,
  payload: {
    itemID,
    listName
  }
});
