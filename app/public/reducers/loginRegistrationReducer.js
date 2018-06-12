import {LOGIN, REGISTER} from "../actions/types";

const initalState = {
    userName: "",
    userPassword: ""
};

export default function (state = initalState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {
                userName: action.payload.userName,
                userPassword: action.payload.userPassword
            });
        case REGISTER:
            return Object.assign({}, state, {
                userName: action.payload.userName,
                userPassword: action.payload.userPassword
            });
        default:
            return state;
    }
}