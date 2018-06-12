import React, {Component} from 'react';
import {Button, Column} from 'bloomer';

export default class SkipButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let {showRight, getNext, mode} = this.props;
    mode ? getNext() : showRight();
  }

  render() {
    let {mode} = this.props;
    return (
      <Column>
        <Button onClick={this.handleClick} isColor="info" isOutlined={!mode}>
          {mode ? 'Weiter' : 'Antwort anzeigen'}
        </Button>
      </Column>
    );
  }
}
