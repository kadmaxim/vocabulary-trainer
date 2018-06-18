import { combineReducers } from 'redux';
import words_listReducer from './words_listReducer';
import user from './userReducer';
import modals from './modals';
import selectedWord from './selectedWordReducer';

export default combineReducers({
  words_list: words_listReducer,
  user,
  modals,
  selectedWord
});
