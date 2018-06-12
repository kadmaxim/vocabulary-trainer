import LoginButton from './../components/LoginButton';
import { connect } from 'react-redux';

import axios from 'axios';
import _ from "lodash/collection";
import {LOGIN} from "../actions/types";

const mapStateToProps = state => ({
    loginRegistration: state.loginRegistration
});

const mapDispathToProps = dispatch => ({
    handleClick: (loginData) => {
        axios.post(`/api/user`, {
            userName: loginData.userName,
            password: loginData.userPassword
        }).then(res => {
            return Array.from(res.data)
        }).then(login => dispatch({
            type: LOGIN,
            payload: login
        }));
    }
});

export default connect(mapStateToProps, mapDispathToProps)(LoginButton);
