import SinglePicture from "../components/SinglePicture";
import { connect } from "react-redux";

import _ from "lodash/collection";

const mapStateToProps = state => ({
  list: state.mode.wordsList
});

export default connect(mapStateToProps)(SinglePicture);
