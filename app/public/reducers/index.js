import { combineReducers } from "redux";
import words from "./wordsReducer";
import user from "./userReducer";
import mode from "./modeReducer";
import modals from "./modals/";
import selectedWord from "./selectedWordReducer";
import notification from "./notificationReducer";

export default combineReducers({
  modals,
  mode,
  notification,
  selectedWord,
  words,
  user
});
