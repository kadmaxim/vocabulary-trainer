import AddWord from '../components/AddWord';
import {connect} from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
    handleClick: (data) => {
        axios.post(`/api/word`, {
            original: data.original,
            translation: data.translation,
            img_url: data.img_url
        }).then(res => {
            console.log(res);
        });
    },
});

export default connect(mapStateToProps, mapDispathToProps)(AddWord);