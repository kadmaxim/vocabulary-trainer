import React, {Component} from 'react';
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
import {Button, Column, Input} from 'bloomer';

export default class AddWord extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  handleClick() {
    let data = {
      original: document.getElementById('addWordOriginal').value,
      translation: document.getElementById('addWordTranslation').value,
      img_url: document.getElementById('addWordImg_url').value
    };

    this.props.handleClick(data);
    this.closeModal();
  }

  openModal() {
    document.getElementById('AddWordModal').classList.add('is-active');
  }

  closeModal() {
    document.getElementById('AddWordModal').classList.remove('is-active');
    document.getElementById('addWordOriginal').value = '';
    document.getElementById('addWordTranslation').value = '';
    document.getElementById('addWordImg_url').value = '';
  }

  render() {
    return (
      <div>
        <span
          onClick={this.openModal}
          className="icon fa fa-2x fa-plus spanMargin"
          title="Eintrag hinzufügen"
        />

        <Modal id="AddWordModal">
          <ModalBackground />
          <ModalCard>
            <ModalCardHeader>
              <ModalCardTitle>Wort hinzufügen</ModalCardTitle>
            </ModalCardHeader>
            <ModalCardBody>
              <form>
                <Input placeholder="Original" id="addWordOriginal" />
                <Input placeholder="Übersetzung" id="addWordTranslation" />
                <Input placeholder="Bild-URL" id="addWordImg_url" />
              </form>
            </ModalCardBody>
            <ModalCardFooter>
              <Button onClick={this.handleClick} className="is-primary">
                Speichern
              </Button>
              <Button onClick={this.closeModal}>Schließen</Button>
            </ModalCardFooter>
            <ModalClose />
          </ModalCard>
        </Modal>
      </div>
    );
  }
}
