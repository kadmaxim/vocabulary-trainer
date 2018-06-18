export default function wordModal(state = {}, action) {
  switch (action.type) {
    case 'SHOW_WORD_MODAL':
      return Object.assign({}, state, {
        isShowModal: action.payload
      });
      break;
    case 'SET_FETCHING_MODAL':
      return Object.assign({}, state, {
        isFetching: action.payload
      });
      break;
    default:
      return state;
  }
}
