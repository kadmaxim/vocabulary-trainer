import RegisterButton from './../components/RegisterButton';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from "lodash/collection";

const mapStateToProps = state => ({
});

const mapDispathToProps = dispatch => ({
    handleClick: (data) => {
      axios
        .post(`/api/check`)
        .then(res => {
          console.log(res);
        }, error => console.log(error));
      /* axios.put(`/api/user`,{
            userName: data.userName,
            password: data.userPassword
        }).then(res => {
            console.log(res);
        });*/
    },
});

export default connect(mapStateToProps, mapDispathToProps)(RegisterButton);
