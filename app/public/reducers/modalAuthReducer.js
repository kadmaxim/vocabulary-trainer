export default function authModal(state = {}, action) {
  switch (action.type) {
    case 'SHOW_AUTH_MODAL':
      return { ...state, isShow: action.payload };
      break;
    default:
      return state;
  }
}
