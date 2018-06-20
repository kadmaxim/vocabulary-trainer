import ModalWord from './../components/ModalWord';
import {connect} from 'react-redux';
import axios from 'axios';

import {SAVE_USER} from './../actions/types';
import {fetchWords} from './../actions/words_listActions';

const mapStateToProps = state => ({
    isActive: state.modals.modalWord.isShowModal,
    isFetching: state.modals.modalWord.isFetching,
    selectedWord: state.selectedWord
});

const mapDispathToProps = dispatch => ({
    closeModal: () => dispatch({type: 'SHOW_WORD_MODAL', payload: false}),
    editPart: e => {
        dispatch({
            type: 'CHANGE_SELECTED_WORD',
            payload: {
                field: e.target.name,
                val: e.target.value
            }
        })
    },
    saveWord: word => {
        let invalidInput = false;

        if (new RegExp('^([a-zA-Z])([^0-9]*)$', 'i').test(word.original) === false) {
            document.querySelector('.original-help').innerText = 'Ungültige Eingabe';
            invalidInput = true;
        } else {
            document.querySelector('.original-help').innerText = '';
            invalidInput = false;
        }

        if (new RegExp('^([a-zA-Z])([^0-9]*)$', 'i').test(word.translation) === false) {
            document.querySelector('.translation-help').innerText = 'Ungültige Eingabe';
            invalidInput = true;
        } else {
            document.querySelector('.translation-help').innerText = '';
            invalidInput = false;
        }

        if (new RegExp('^(http:\\/\\/www\\.|https:\\/\\/www\\.|http:\\/\\/|https:\\/\\/)+([^\\s])+(.jpg|.png|.gif|.bmp)$', 'i').test(word.img_url) === false) {
            document.querySelector('.image_url-help').innerText = 'Ungültige Eingabe';
            invalidInput = true;
        } else {
            document.querySelector('.image_url-help').innerText = '';
            invalidInput = false;
        }

        if (invalidInput) {
            return;
        }

        dispatch({type: 'SET_FETCHING_MODAL', payload: true});
        //if wordID is empty - then we will add the word
        let isWordID = word._id.length > 0 ? `/${word._id}` : '';

        axios
            .post(`/api/word${isWordID}`, {
                original: word.original,
                translation: word.translation,
                img_url: word.img_url
            })
            .then(res => {
                if (res.status !== 'error') {
                    dispatch({type: 'SHOW_WORD_MODAL', payload: false});
                    dispatch({type: 'SET_FETCHING_MODAL', payload: false});
                    dispatch(fetchWords());
                } else {
                    throw new Error(res.message);
                }
            });
    }
});

export default connect(mapStateToProps, mapDispathToProps)(ModalWord);
