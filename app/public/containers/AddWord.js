import AddWord from '../components/AddWord';
import {connect} from 'react-redux';
import {addWord} from "../actions/words_listActions";
import {ADD_WORD} from "../actions/types";

import axios from 'axios';
import _ from 'lodash/collection';


const mapStateToProps = state => ({
words_list: state.words_list.item
});

const mapDispathToProps = dispatch => ({
    handleClick: (wordData) => {
        axios.post(`/api/word`, {
            original: wordData.original,
            translation: wordData.translation,
            img_url: wordData.img_url
        }).then(res => {
            return Array.from(res.data)
                .then(word => dispatch({
                    type: ADD_WORD,
                    payload: word
                }))
        });
    },
});

export default connect(mapStateToProps, mapDispathToProps)(AddWord);
