import { combineReducers } from 'redux';
import modal from './modals';
import wordLists from './wordLists';

export default combineReducers({
  modal,
  wordLists,
});
