import SinglePicture from '../components/SinglePicture';
import { connect } from 'react-redux';

import _ from 'lodash/collection';

const mapStateToProps = (state, ownProps) => {
    let answers = ownProps.shuffle ? _.shuffle(state.words_list.wordsList) : state.words_list.wordsList;

    return {
        answers
    };
};

export default connect(mapStateToProps)(SinglePicture);
