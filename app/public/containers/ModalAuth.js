import ModalAuth from "./../components/ModalAuth";
import { connect } from "react-redux";

import { showAuthModal } from "./../actions/modalsActions";
import { userLogin, userRegister } from "./../actions/userActions";

function getPostData() {
  return {
    username: document.querySelector("[name=login]").value,
    password: document.querySelector("[name=pass]").value
  };
}

const mapStateToProps = state => ({
  isActive: state.modals.modalAuth.isShow
});

const mapDispathToProps = dispatch => ({
  closeModal: () => dispatch(showAuthModal(false)),
  login: () => dispatch(userLogin(getPostData())),
  register: () => dispatch(userRegister(getPostData()))
});

export default connect(mapStateToProps, mapDispathToProps)(ModalAuth);
