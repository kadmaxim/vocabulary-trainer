import React, {Component} from 'react';
import {Button, Column} from 'bloomer';

export default class RegisterButton extends Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.loginRegistration);
    }

    render() {
        return (
            <div>
                <Button
                    onClick={this.handleClick}>
                    Registrieren
                </Button>
            </div>
        );
    }
}
