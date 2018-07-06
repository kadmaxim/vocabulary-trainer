import { SET_NOTIFICATION } from './../actions/types';

export default function notification(state = {}, action) {
  switch (action.type) {
    case SET_NOTIFICATION:
      return Object.assign({}, state, action.payload);
      break;
    default:
      return state;
  }
}
