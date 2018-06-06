import LoginButton from './../components/LoginButton';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from "lodash/collection";

const mapStateToProps = state => ({
});

const mapDispathToProps = dispatch => ({
    handleClick: (data) => {
        console.log(data);
        axios.post(`/api/user`,{
            userName: data.userName,
            password: data.userPassword
        }).then(res => {
            //console.log(res);
        });
    },
});

export default connect(mapStateToProps, mapDispathToProps)(LoginButton);
