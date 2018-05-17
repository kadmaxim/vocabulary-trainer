import React, { Component } from 'react';
import { Button, Column } from 'bloomer';

export default class QButton extends Component {
  constructor(props) {
    super(props);
    this.state = { isPressed: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ isPressed: true });
    this.props.handler(this.props.elem.id);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    return prevState.isPressed && nextProps.mode ? {} : { isPressed: false };
  }

  render() {
    let { elem, rid, mode } = this.props;
    let { isPressed } = this.state;
    return (
      <Column>
        <Button
          disabled={isPressed ? true : false}
          className={`btn-${elem.id}`}
          isColor={isPressed && (elem.id === rid ? 'success' : 'danger')}
          isStatic={!isPressed && mode}
          onClick={this.handleClick}>
          {elem.original}
        </Button>
      </Column>
    );
  }
}
