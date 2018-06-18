import ModalWord from './../components/ModalWord';
import { connect } from 'react-redux';
import axios from 'axios';

import { SAVE_USER } from './../actions/types';
import { fetchWords } from './../actions/words_listActions';

const mapStateToProps = state => ({
  isActive: state.modals.modalWord.isShowModal,
  isFetching: state.modals.modalWord.isFetching,
  selectedWord: state.selectedWord
});

const mapDispathToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'SHOW_WORD_MODAL', payload: false }),
  editPart: e =>
    dispatch({
      type: 'CHANGE_SELECTED_WORD',
      payload: {
        field: e.target.name,
        val: e.target.value
      }
    }),
  saveWord: word => {
    dispatch({ type: 'SET_FETCHING_MODAL', payload: true });
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
          dispatch({ type: 'SHOW_WORD_MODAL', payload: false });
          dispatch({ type: 'SET_FETCHING_MODAL', payload: false });
          dispatch(fetchWords());
        } else {
          throw new Error(res.message);
        }
      });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(ModalWord);
