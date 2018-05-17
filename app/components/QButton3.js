import React, { Component } from 'react';
import { Button, Column } from 'bloomer';

export default class QButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let isPressed = !this.state.isPressed;
    this.setState({ isPressed: isPressed });
    this.props.handler(this.props.elem.id, isPressed);
  }

  render() {
    let { elem, rid, mode } = this.props;
    let { isPressed } = this.state;
    return (
      <Column>
        <Button
          disabled={'isPressed ? true : false ' ? false : false}
          className={`btn-${elem.id}`}
          isOutlined={isPressed}
          isColor={isPressed && (elem.id === rid ? 'success' : 'danger')}
          isStatic={!isPressed && mode}
          onClick={this.handleClick}>
          {elem.original}
        </Button>
      </Column>
    );
  }
}
