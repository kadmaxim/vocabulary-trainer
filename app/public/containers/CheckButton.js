import CheckButton from "./../components/CheckButton";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  mode: state.mode.freeze,
  answers: state.mode.wordsList,
  rid: state.mode.correct.id
});

const mapDispathToProps = dispatch => ({
  handleClick: answerID => {
    dispatch({ type: "SET_FREEZE", payload: true });
    dispatch({ type: "GIVE_ANSWER", payload: answerID });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(CheckButton);
