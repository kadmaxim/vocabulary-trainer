import ModalWord from "./../components/ModalWord";
import { connect } from "react-redux";
import axios from "axios";

import { fetchWords } from "./../actions/wordsActions";
import { showWordModal, fetchingModal } from "./../actions/modalsActions";

function resetHelpInfo() {
  document.querySelectorAll(".help").forEach(elem => {
    elem.innerText = "";
  });
}

const mapStateToProps = state => ({
  isActive: state.modals.modalWord.isShow,
  isFetching: state.modals.modalWord.isFetching,
  selectedWord: state.selectedWord
});

const mapDispathToProps = dispatch => ({
  closeModal: () => {
    dispatch(showWordModal(false));
    resetHelpInfo();
  },
  editPart: e => {
    dispatch({
      type: "CHANGE_SELECTED_WORD",
      payload: {
        field: e.target.name,
        val: e.target.value
      }
    });
  },
  saveWord: word => {
    let wordRE = new RegExp("^([a-zA-Z])([^0-9]*)$", "i");
    let urlRE = /^(http[s]?:\/\/)+([^\s])+(.jpg|.png|.gif|.bmp)$/;
    let errorMsg = "Ungültige Eingabe";

    resetHelpInfo();

    if (wordRE.test(word.original) === false) {
      document.querySelector(".original-help").innerText = errorMsg;
      return;
    }

    if (wordRE.test(word.translation) === false) {
      document.querySelector(".translation-help").innerText = errorMsg;
      return;
    }

    if (urlRE.test(word.img_url) === false) {
      document.querySelector(".image_url-help").innerText = errorMsg;
      return;
    }

    dispatch(fetchingModal(true));
    //if wordID is empty - then we will add the word
    let isWordID = word._id.length > 0 ? `/${word._id}` : "";

    axios
      .post(`/api/word${isWordID}`, {
        original: word.original,
        translation: word.translation,
        img_url: word.img_url
      })
      .then(res => {
        if (res.status !== "error") {
          dispatch(showWordModal(false));
          dispatch(fetchingModal(false));
          dispatch(fetchWords());
        } else {
          throw new Error(res.message);
        }
      });
  }
});

export default connect(mapStateToProps, mapDispathToProps)(ModalWord);
