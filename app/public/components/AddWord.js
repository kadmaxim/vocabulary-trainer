import React, { Component } from 'react';
import {
  Modal,
  ModalBackground,
  ModalContent,
  ModalClose,
  ModalCard,
  ModalCardHeader,
  ModalCardBody,
  ModalCardFooter,
  ModalCardTitle
} from 'bloomer';
import { Button, Column, Input } from 'bloomer';

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
