import Notification from './../components/Notification';
import { connect } from 'react-redux';

import { notify } from './../actions/notificationActions';

const mapStateToProps = state => ({
  notification: state.notification
});

const mapDispathToProps = dispatch => ({
  hideNotification: () => dispatch(notify())
});

export default connect(mapStateToProps, mapDispathToProps)(Notification);
