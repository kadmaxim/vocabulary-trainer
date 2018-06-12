import EditButton from './../components/EditButton';
import {connect} from 'react-redux';
import {ADD_WORD} from "../actions/types";

import axios from 'axios';
import _ from "lodash/collection";
import {FETCH_WORDS} from "../actions/types";

const mapStateToProps = state => ({
    words_list: state.words_list.item
});

const mapDispathToProps = dispatch => ({
    handleClick(wordData){
        axios.post(`/api/word/:id`, {
            _id: wordData._id,
            original: wordData.original,
            translation: wordData.translation,
            img_url: wordData.img_url
        }).then(res => {
            console.log(res);
        });
    },
    addWordStore(wordData) {
        dispatch({
            type: ADD_WORD,
            payload: wordData
        })
    }
});

export default connect(mapStateToProps, mapDispathToProps)(EditButton);
