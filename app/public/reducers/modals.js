export default function modals(state = {}, action) {
  switch (action.type) {
    case 'SHOW_MODAL':
      return Object.assign({}, state, {
        isShowModal: true
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
