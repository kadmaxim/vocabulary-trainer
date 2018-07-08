import React, { Component } from "react";
import { Button, Icon, Input } from "bloomer";

export default class EditButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { openWordModal, word } = this.props;

    return (
      <Button
        isSize="small"
        isOutlined
        isColor="info"
        onClick={openWordModal.bind(this, word)}
        title="Eintrag bearbeiten">
        <span>Bearbeiten</span>
        <Icon className="fa fa-pencil qm-icon" />
      </Button>
    );
  }
}
