import AllWords from '../components/AllWords';
import {connect} from 'react-redux';

import axios from 'axios';
import _ from 'lodash/collection';

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
    async getAllWords() {
        return new Promise((resolve, reject) => {
            axios.get(`/api/words`).then(res => {
                resolve(res.data);
            });
        });
    },
    async editWord(data) {
        console.log(data);
    }
});

export default connect(mapStateToProps, mapDispathToProps)(AllWords);