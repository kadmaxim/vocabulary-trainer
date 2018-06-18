import React, { Component } from 'react';
import {
  Delete,
  Button,
  Modal,
  ModalBackground,
  ModalCard,
  ModalCardBody,
  ModalCardHeader,
  ModalCardFooter,
  ModalCardTitle,
  Field,
  Label,
  Control,
  Input,
  Icon,
  Help,
  Columns,
  Column
} from 'bloomer';

export default class ModalWord extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { isActive, selectedWord, isFetching } = this.props;
    let { closeModal, saveWord, editPart } = this.props;
    let { original, translation, img_url } = selectedWord;

    return (
      <Modal isActive={isActive}>
        <ModalBackground />
        <ModalCard>
          <ModalCardHeader>
            <ModalCardTitle>Word Modal</ModalCardTitle>
            <Delete onClick={closeModal} />
          </ModalCardHeader>
          <ModalCardBody>
            <Field>
              <Label>Original Word</Label>
              <Control hasIcons>
                <Input
                  type="text"
                  placeholder="Der Hund"
                  name="original"
                  value={original}
                  onChange={editPart.bind(this)}
                />
                <Icon isSize="small" isAlign="left">
                  <span className="fa fa-wordpress" aria-hidden="true" />
                </Icon>
              </Control>
              <Help isColor="danger" className="original-help" />
            </Field>
            <Field>
              <Label>Translated Word</Label>
              <Control hasIcons>
                <Input
                  type="text"
                  placeholder="the dog"
                  name="translation"
                  value={translation}
                  onChange={editPart.bind(this)}
                />
                <Icon isSize="small" isAlign="left">
                  <span className="fa fa-wordpress" aria-hidden="true" />
                </Icon>
              </Control>
              <Help isColor="danger" className="translated-help" />
            </Field>

            <Field>
              <Label>Image URL</Label>
              <Control hasIcons>
                <Input
                  type="url"
                  placeholder="http://www.."
                  name="img_url"
                  value={img_url}
                  onChange={editPart.bind(this)}
                />
                <Icon isSize="small" isAlign="left">
                  <span className="fa fa-image" aria-hidden="true" />
                </Icon>
              </Control>
              <Help isColor="danger" className="image-help" />
            </Field>
          </ModalCardBody>
          <ModalCardFooter>
            <Column>
              <Button
                isColor="success"
                isLoading={isFetching}
                onClick={saveWord.bind(this, selectedWord)}>
                Save
              </Button>
            </Column>
            <Column hasTextAlign="right">
              <Button isColor="info" onClick={closeModal}>
                Cancel
              </Button>
            </Column>
          </ModalCardFooter>
        </ModalCard>
      </Modal>
    );
  }
}
