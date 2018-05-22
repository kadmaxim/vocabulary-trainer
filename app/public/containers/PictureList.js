import PictureList from '../components/PictureList';
import { connect } from 'react-redux';

import _ from 'lodash/collection';

const mapStateToProps = (state, ownProps) => {
    let answers = ownProps.shuffle ? _.shuffle(state.wordsList) : state.wordsList;

    return {
        answers
    };
};

export default connect(mapStateToProps)(PictureList);
