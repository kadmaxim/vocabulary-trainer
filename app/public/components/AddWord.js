import React, { Component } from "react";

export default class AddWord extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { openWordModal } = this.props;
    return (
      <span
        onClick={openWordModal}
        className="icon fa fa-2x fa-plus spanMargin has-text-success"
        title="Eintrag hinzufügen"
      />
    );
  }
}
