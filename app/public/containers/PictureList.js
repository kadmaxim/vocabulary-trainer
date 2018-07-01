import PictureList from '../components/PictureList';
import { connect } from 'react-redux';

import _ from 'lodash/collection';

const mapStateToProps = (state, ownProps) => {
  let answers = ownProps.shuffle
    ? _.shuffle(state.mode.wordsList)
    : state.mode.wordsList;

  return {
    answers
  };
};

export default connect(mapStateToProps)(PictureList);
