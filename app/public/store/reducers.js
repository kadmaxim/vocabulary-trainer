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
    case 'GIVE_ANSWER':
      return Object.assign({}, state, {
        wordsList: state.wordsList.map(answer => {
          if (answer._id === action.payload) {
            answer = Object.assign({}, answer, { isPressed: true });
          }
          return answer;
        })
      });
      break;
    case 'TOGGLE_IMG':
      return Object.assign({}, state, {
        showImg: !state.showImg
      });
      break;
    default:
      return state;
  }
}
