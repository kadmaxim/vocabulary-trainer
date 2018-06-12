import {combineReducers} from 'redux';
import words_listReducer from './words_listReducer';
import loginRegistrationReducher from './loginRegistrationReducer'

export  default  combineReducers({
    words_list: words_listReducer,
    loginRegistration: loginRegistrationReducher
})