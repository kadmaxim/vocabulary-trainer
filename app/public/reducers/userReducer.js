import { SAVE_USER, CLEAR_USER } from '../actions/types';

const initalState = {
  userName: '',
  userID: ''
};

export default function(state = initalState, action) {
  switch (action.type) {
    case SAVE_USER:
      return Object.assign({}, state, {
        userName: action.payload.user.login,
        userID: action.payload.user._id
      });
    case CLEAR_USER:
      return Object.assign({}, state, initalState);
    default:
      return state;
  }
}
