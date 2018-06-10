import React from 'react';
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

export default function ModalWrap(props) {
  let {closeModal, isActive} = props;
  return (
    <Modal isActive={isActive}>
      <ModalBackground />
      <ModalCard>
        <ModalCardHeader>
          <ModalCardTitle>Login & Registration</ModalCardTitle>
          <Delete onClick={closeModal} />
        </ModalCardHeader>
        <ModalCardBody>
          <Field>
            <Label>Login</Label>
            <Control hasIcons>
              <Input type="text" placeholder="User name" />
              <Icon isSize="small" isAlign="left">
                <span className="fa fa-user" aria-hidden="true" />
              </Icon>
            </Control>
            <Help isColor="success" isHidden={true}>
              This username is available
            </Help>
          </Field>
          <Field>
            <Label>Password</Label>
            <Control hasIcons>
              <Input type="password" placeholder="User pass" />
              <Icon isSize="small" isAlign="left">
                <span className="fa fa-lock" aria-hidden="true" />
              </Icon>
            </Control>
            <Help isColor="success" isHidden={true}>
              This username is available
            </Help>
          </Field>
        </ModalCardBody>
        <ModalCardFooter>
          <Column>
            <Button isColor="success">Login</Button>
          </Column>
          <Column hasTextAlign="right">
            <Button isColor="info">Registration</Button>
          </Column>
        </ModalCardFooter>
      </ModalCard>
    </Modal>
  );
}
