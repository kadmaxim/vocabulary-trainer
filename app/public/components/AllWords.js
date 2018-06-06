import React, {Component} from 'react';

import {Title, Tile, Column, Button} from 'bloomer';
import EditButton from "./../containers/EditButton";
import DeleteButton from "./../containers/DeleteButton";

export default class AllWords extends Component {
    constructor(props) {
        super(props);

        this.state = {
            allWords: [],
        };
    }

    async componentDidMount() {
        this.setState({allWords: await this.props.getAllWords()});
    }

    render() {
        const {allWords} = this.state;
        console.log(allWords);

        return (
            Array.from(allWords).map((item, key) => (
                <div key={key}>
                    <div>{item.translation}</div>
                    <div>{item.original}</div>
                    <EditButton
                        data={item}/>
                    <DeleteButton
                        data={item}/>
                </div>
            ))
        )
    };
}
