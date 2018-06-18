export default function authModal(state = {}, action) {
  switch (action.type) {
    case 'SHOW_AUTH_MODAL':
      return Object.assign({}, state, {
        isShowModal: action.payload
      });
      break;
    default:
      return state;
  }
}
