export function words_list(state = {}, action) {
  switch (action.type) {
    case 'SET_WORDS':
      return Object.assign({}, state, {
        wordsList: [...action.payload]
      });
      break;
    case 'SET_CORRECT':
      return Object.assign({}, state, {
        correct: Object.assign({}, action.payload)
      });
      break;
    case 'SET_FREEZE':
      return Object.assign({}, state, {
        freeze: action.payload
      });
      break;
    default:
      return state;
  }
}
