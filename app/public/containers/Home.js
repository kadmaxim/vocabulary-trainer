import Home from "../components/Home";
import { connect } from "react-redux";

import { showAuthModal } from "./../actions/modalsActions";
import { userLogout } from "./../actions/userActions";

const mapStateToProps = state => ({
  userName: state.user.userName
});

const mapDispathToProps = dispatch => ({
  showModal: () => {
    dispatch(showAuthModal(true));
  },
  logout: () => {
    console.log("logout");
    dispatch(userLogout());
  }
});

export default connect(mapStateToProps, mapDispathToProps)(Home);
