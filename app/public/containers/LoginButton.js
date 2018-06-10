import LoginButton from './../components/LoginButton';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
  handleClick: data => {
    console.log(data);
    axios
      .post(`/api/login`, {
        username: data.userName,
        password: data.userPassword
      })
      .then(res => {
        console.log(res);
      }, error => console.log(error.message));
  }
});

export default connect(mapStateToProps, mapDispathToProps)(LoginButton);
