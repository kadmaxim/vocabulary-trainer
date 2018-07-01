import { SHOW_WORD_MODAL, SET_FETCHING_MODAL } from './../actions/types';

export default function wordModal(state = {}, action) {
  switch (action.type) {
    case SHOW_WORD_MODAL:
      return Object.assign({}, state, {
        isShow: action.payload
      });
      break;
    case SET_FETCHING_MODAL:
      return Object.assign({}, state, {
        isFetching: action.payload
      });
      break;
    default:
      return state;
  }
}
