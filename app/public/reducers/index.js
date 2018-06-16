import {combineReducers} from 'redux';
import words_listReducer from './words_listReducer';
import user from './userReducer';
import modal from './modals';

export default combineReducers({
  words_list: words_listReducer,
  user,
  modal
});
