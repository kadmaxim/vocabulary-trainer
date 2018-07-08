import {
  SET_WORDS,
  SET_CORRECT,
  SET_FREEZE,
  GIVE_ANSWER,
  TOGGLE_IMG,
  SET_SHUFFLED_WORDS,
  LEAVE_DONE
} from "../actions/types";

export default function(state = {}, action) {
  let temp = {};
  switch (action.type) {
    case SET_WORDS:
      return Object.assign({}, state, {
        wordsList: {
          items: [...action.payload]
        }
      });
    case SET_SHUFFLED_WORDS:
      return Object.assign({}, state, {
        shuffledList: {
          items: [...action.payload]
        }
      });
    case SET_CORRECT:
      return Object.assign({}, state, {
        correct: Object.assign({}, action.payload)
      });
    case SET_FREEZE:
      temp = {};
      temp[action.payload.listName] = {
        items: [...state[action.payload.listName].items],
        freeze: action.payload.mode
      };

      return Object.assign({}, state, temp);

    case GIVE_ANSWER:
      temp = {};
      temp[action.payload.listName] = {
        items: state[action.payload.listName].items.map(answer => {
          if (answer._id === action.payload.itemID) {
            answer = Object.assign({}, answer, { isPressed: true });
          }
          return answer;
        }),
        freeze: state[action.payload.listName].freeze
      };
      return Object.assign({}, state, temp);

    case LEAVE_DONE:
      temp = {};
      temp[action.payload.listName] = {
        items: state[action.payload.listName].items.map(answer => {
          if (answer.isPressed && action.payload.status) {
            answer = Object.assign({}, answer, { isDone: true });
          } else if (!answer.isDone) {
            answer = Object.assign({}, answer, { isPressed: false });
          }
          return answer;
        }),
        freeze: false
      };
      return Object.assign({}, state, temp);

    case TOGGLE_IMG:
      return Object.assign({}, state, {
        showImg: !state.showImg
      });
    default:
      return state;
  }
}
