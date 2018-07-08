import { combineReducers } from "redux";

import modalAuth from "./modalAuthReducer";
import modalWord from "./modalWordReducer";

export default combineReducers({
  modalAuth,
  modalWord
});
