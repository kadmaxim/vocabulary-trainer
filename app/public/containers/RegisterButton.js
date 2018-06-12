import RegisterButton from './../components/RegisterButton';
import { connect } from 'react-redux';
import {REGISTER} from "../actions/types";

import axios from 'axios';
import _ from "lodash/collection";

const mapStateToProps = state => ({
    loginRegistration: state.loginRegistration
});

const mapDispathToProps = dispatch => ({
    handleClick: (registerData) => {
        axios.put(`/api/user`,{
            userName: registerData.userName,
            password: registerData.userPassword
        }).then(res => {
            return Array.from(res.data)
        }).then(register => dispatch({
            type: REGISTER,
            payload: register
        }));
    },
});

export default connect(mapStateToProps, mapDispathToProps)(RegisterButton);
