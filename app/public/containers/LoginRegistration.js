import LoginRegistration from '../components/LoginRegistration';
import {connect} from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({
});

const mapDispathToProps = dispatch => ({
    onLogin: () => {
       console.log("Login!")
    },
});

export default connect(mapStateToProps, mapDispathToProps)(LoginRegistration);
