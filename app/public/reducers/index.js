import { combineReducers } from 'redux';
import words from './wordsReducer';
import user from './userReducer';
import modals from './modals';
import selectedWord from './selectedWordReducer';
import notification from './notificationReducer';

export default combineReducers({
  words,
  user,
  modals,
  selectedWord,
  notification
});
