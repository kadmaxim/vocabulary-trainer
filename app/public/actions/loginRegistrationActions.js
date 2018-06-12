import {LOGIN, REGISTER} from "./types";
import axios from "axios/index";

export const login = (loginData) => dispatch => {
    axios.post(`/api/user`,{
        userName: loginData.userName,
        password: loginData.userPassword
    }).then(res => {
       return Array.from(res.data)
    }).then(login => dispatch({
            type: LOGIN,
            payload: login
        }));
};

export const register = (registerData) => dispatch => {
    axios.put(`/api/user`,{
        userName: registerData.userName,
        password: registerData.userPassword
    }).then(res => {
        return Array.from(res.data)
    }).then(register => dispatch({
        type: REGISTER,
        payload: register
    }));
};