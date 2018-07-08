import React, { Component } from "react";
import { Button, Column } from "bloomer";

export default class CheckButton extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let { showRight, getNext, mode } = this.props;
    mode ? getNext() : showRight();
  }

  render() {
    let { mode } = this.props;
    return (
      <div>
        <Button
          onClick={this.handleClick}
          isColor={mode ? "info" : ""}
          isOutlined={!mode}>
          {mode ? "Weiter" : "Antwort überprüfen"}
        </Button>
      </div>
    );
  }
}
