import LoginRegistration from '../components/LoginRegistration';
import {connect} from 'react-redux';
import {LOGIN} from "../actions/types";

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({
    loginRegistration: state.loginRegistration
});

const mapDispathToProps = dispatch => ({
   addLoginRegistrationStore: (loginData) => {
        dispatch({
            type: LOGIN,
            payload: loginData
        })
    }
});

export default connect(mapStateToProps, mapDispathToProps)(LoginRegistration);
