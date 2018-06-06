import EditButton from './../components/EditButton';
import {connect} from 'react-redux';

import axios from 'axios';
import _ from "lodash/collection";

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
    handleClick: (data) => {
        axios.post(`/api/word/:id`, {
            _id: data._id,
            original: data.original,
            translation: data.translation,
            img_url: data.img_url
        }).then(res => {
            console.log(res);
        });
    },
});

export default connect(mapStateToProps, mapDispathToProps)(EditButton);
