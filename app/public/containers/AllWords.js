import AllWords from "../components/AllWords";
import { connect } from "react-redux";
import { fetchWords } from "../actions/wordsActions";

const mapStateToProps = state => ({
  allWords: state.words.all
});

const mapDispathToProps = dispatch => ({
  getAllWords() {
    dispatch(fetchWords());
  }
});

export default connect(mapStateToProps, mapDispathToProps)(AllWords);
