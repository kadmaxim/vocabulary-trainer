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
} from 'bloomer'
import {Button, Column, Input} from 'bloomer';

export default class DeleteButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
    }

    handleClick() {
        this.props.handleClick(this.props.words_list);
    }

    openModal() {
        this.props.addWordStore(this.props.data);
        document.getElementById("DeleteWordModal").classList.add('is-active');
    }

    closeModal() {
        document.getElementById("DeleteWordModal").classList.remove('is-active');
    }

    render() {
        const word = this.props.words_list;

        return (
            <div>
                <span onClick={this.openModal} className="icon fa fa-trash" title="Eintrag löschen"/>

                <Modal id="DeleteWordModal">
                    <ModalBackground/>
                    <ModalCard>
                        <ModalCardHeader>
                            <ModalCardTitle>Löschen von "{word.original}" : "{word.translation}" bestätigen</ModalCardTitle>
                        </ModalCardHeader>
                        <ModalCardBody>
                            Möchten Sie diesen Eintrag wirklich entfernen?
                        </ModalCardBody>
                        <ModalCardFooter>
                            <Button
                                onClick={this.handleClick} className="is-primary">
                                Ja
                            </Button>
                            <Button onClick={this.closeModal}>
                                Nein
                            </Button>
                        </ModalCardFooter>
                        <ModalClose/>
                    </ModalCard>
                </Modal>
            </div>
        );
    }
}
