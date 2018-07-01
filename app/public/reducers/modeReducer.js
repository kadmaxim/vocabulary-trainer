import {
  SET_WORDS,
  SET_CORRECT,
  SET_FREEZE,
  GIVE_ANSWER,
  TOGGLE_IMG
} from '../actions/types';

export default function(state = {}, action) {
  switch (action.type) {
    case SET_WORDS:
      return Object.assign({}, state, {
        wordsList: [...action.payload]
      });
    case 'SET_SHUFFLED_WORDS':
      return Object.assign({}, state, {
        shuffledList: [...action.payload]
      });
    case SET_CORRECT:
      return Object.assign({}, state, {
        correct: Object.assign({}, action.payload)
      });
    case SET_FREEZE:
      return Object.assign({}, state, {
        freeze: action.payload
      });
    case GIVE_ANSWER:
      return Object.assign({}, state, {
        wordsList: state.wordsList.map(answer => {
          if (answer._id === action.payload) {
            answer = Object.assign({}, answer, { isPressed: true });
          }
          return answer;
        })
      });

    case TOGGLE_IMG:
      return Object.assign({}, state, {
        showImg: !state.showImg
      });
    default:
      return state;
  }
}
