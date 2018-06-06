import Home from '../components/Home';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({
  freeze: state.freeze,
  answers: state.wordsList,
  correct: state.correct
});

const mapDispathToProps = dispatch => ({
    let theWords = axios.get(`/api/words`).then(res => {
            let DB = res.data;
            dispatch({ type: 'ALL_WORDS', payload: DB });
        })
});

export default connect(mapStateToProps, mapDispathToProps)(Home);
