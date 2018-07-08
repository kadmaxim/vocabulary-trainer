import PictureList from "../components/PictureList";
import { connect } from "react-redux";

import _ from "lodash/collection";

const mapStateToProps = state => ({
  list: state.mode.wordsList,
  correct: state.mode.correct
});

export default connect(mapStateToProps)(PictureList);
