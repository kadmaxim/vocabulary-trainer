import React, {Component} from 'react';
import {Button, Column} from 'bloomer';

export default class LoginButton extends Component {
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
                    Login
                </Button>
            </div>
        );
    }
}
