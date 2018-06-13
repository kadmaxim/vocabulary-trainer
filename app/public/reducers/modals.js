export default function modals(state = {}, action) {
  switch (action.type) {
    case 'SET_MODAL':
      return Object.assign({}, state, {
        isShowModal: action.payload
      });
      break;
    case 'CLOSE_MODAL':
      return Object.assign({}, state, {
        isShowModal: false
      });
      break;
    default:
      return state;
  }
}
