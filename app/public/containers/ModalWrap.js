import ModalWrap from './../components/ModalWrap';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  isActive: state.modal.isShowModal,
});

const mapDispathToProps = dispatch => ({
  closeModal: () => dispatch({ type: 'CLOSE_MODAL' }),
});

export default connect(mapStateToProps, mapDispathToProps)(ModalWrap);
