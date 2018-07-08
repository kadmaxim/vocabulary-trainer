import Gamemode3 from "../components/Gamemode3";
import { connect } from "react-redux";

import axios from "axios";
import _ from "lodash/collection";
import { notify } from "./../actions/notificationActions";
import { resetSelectedWord } from "./../actions/wordsActions";
import { giveAnswer, freezing, leaveDone } from "./../actions/modeActions";

const mapStateToProps = state => ({
  leftList: state.mode.wordsList,
  selected: state.selectedWord,
  shuffledList: state.mode.shuffledList
});

const mapDispathToProps = dispatch => ({
  generateNext: listSize => {
    dispatch(resetSelectedWord());
    dispatch(notify());

    axios.get(`/api/words`).then(res => {
      let DB = res.data;
      let answers = _.sampleSize(DB, listSize);
      let correct = _.sample(answers);

      dispatch({ type: "SET_WORDS", payload: answers });
      dispatch({ type: "SET_SHUFFLED_WORDS", payload: _.shuffle(answers) });
    });
  },
  handleClick: (elem, selected, listName) => {
    dispatch(giveAnswer(elem._id, listName));
    dispatch(freezing(true, listName));

    if (selected.original !== "") {
      let status = false;
      if (selected._id === elem._id) {
        dispatch(notify("Richtige Antwort!", "success"));
        status = true;
      } else {
        dispatch(notify("Falsche Antwort!", "danger"));
      }

      dispatch(leaveDone("wordsList", status));
      dispatch(leaveDone("shuffledList", status));
      dispatch(resetSelectedWord());
    } else {
      dispatch({ type: "SET_SELECTED_WORD", payload: elem });
      dispatch(notify());
    }
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Gamemode3);
