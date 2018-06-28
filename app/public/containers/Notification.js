import Notification from './../components/Notification';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  notification: state.notification
});

const mapDispathToProps = dispatch => ({
  hideNotification: () =>
    dispatch({
      type: 'SET_NOTIFICATION',
      payload: { message: '' }
    })
});

export default connect(mapStateToProps, mapDispathToProps)(Notification);
