import DeleteButton from './../components/DeleteButton';
import {connect} from 'react-redux';
import {ADD_WORD} from "../actions/types";

import axios from 'axios';
import _ from "lodash/collection";


const mapStateToProps = state => ({
    words_list: state.words_list.item
});

const mapDispathToProps = dispatch => ({
    handleClick: (wordData) => {
        axios.delete(`/api/word/`, {
                _id: wordData._id
            }
        ).then(res => {
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

export default connect(mapStateToProps, mapDispathToProps)(DeleteButton);
