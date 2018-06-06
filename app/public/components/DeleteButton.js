import React, {Component} from 'react';
import {Button, Column} from 'bloomer';

export default class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.data);
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.handleClick}>
                    Löschen
                </Button>
            </div>
        );
    }
}
