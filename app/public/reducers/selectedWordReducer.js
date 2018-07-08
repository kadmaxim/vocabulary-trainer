import {
  RESET_SELECTED_WORD,
  SET_SELECTED_WORD,
  CHANGE_SELECTED_WORD
} from "./../actions/types";

const initalState = { _id: "", original: "", translation: "", img_url: "" };

export default function wordModal(state = initalState, action) {
  switch (action.type) {
    case SET_SELECTED_WORD:
      return Object.assign({}, state, action.payload);
    case RESET_SELECTED_WORD:
      return { ...state, ...initalState };
    case CHANGE_SELECTED_WORD:
      let changedPart = {};
      changedPart[action.payload.field] = action.payload.val;
      return Object.assign({}, state, changedPart);
    default:
      return state;
  }
}
