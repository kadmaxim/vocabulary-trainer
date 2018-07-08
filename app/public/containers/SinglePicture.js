import SinglePicture from "../components/SinglePicture";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  list: state.mode.wordsList
});

export default connect(mapStateToProps)(SinglePicture);
