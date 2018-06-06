import DeleteButton from './../components/DeleteButton';
import {connect} from 'react-redux';

import axios from 'axios';
import _ from "lodash/collection";

const mapStateToProps = state => ({});

const mapDispathToProps = dispatch => ({
    handleClick: (data) => {
        axios.delete(`/api/word/:id`, {
                _id: data._id
            }
        ).then(res => {
            console.log(res);
        });
    },
});

export default connect(mapStateToProps, mapDispathToProps)(DeleteButton);
