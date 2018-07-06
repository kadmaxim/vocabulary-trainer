import { TOGGLE_IMG, FETCH_WORDS } from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_WORDS:
      return Object.assign({}, state, {
        all: action.payload
      });
    default:
      return state;
  }
}
