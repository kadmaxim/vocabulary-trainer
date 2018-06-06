import React, {Component} from 'react';
import {Title, Tile, Column} from 'bloomer';
import AllWords from './../containers/AllWords'
import AddWord from './../containers/AddWord'

class Home extends Component {
    constructor(props) {
        super(props);
    };

    render() {

        return (
            <Tile hasTextAlign="centered" isChild>
                <Title>Wilkommen!</Title>
                <AllWords/>
                <AddWord/>
            </Tile>
        )
    }
}

export default Home
