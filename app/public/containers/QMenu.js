import QMenu from "../components/QMenu";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  userName: state.user.userName
});

const mapDispathToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispathToProps, null, {
  pure: false
})(QMenu);
