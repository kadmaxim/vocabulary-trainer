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

export default class EditButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);

    }

    handleClick() {
        this.props.handleClick(this.props.words_list);
        this.closeModal();
    }

    openModal() {
        this.props.addWordStore(this.props.data);
        document.getElementById("editWordOriginal").value = this.props.data.original;
        document.getElementById("editWordTranslation").value = this.props.data.translation;
        document.getElementById("editWordImg_url").value = this.props.data.img_url;
        document.getElementById("EditWordModal").classList.add('is-active');
    }

    closeModal() {
        document.getElementById("EditWordModal").classList.remove('is-active');
    }

    handleChange(e) {
        this.props.words_list[e.target.name] = e.target.value;
        this.props.addWordStore(this.props.words_list);
    };

    render() {
        const word = this.props.words_list;

        return (
            <div>
                <span onClick={this.openModal} className="icon fa fa-pencil" title="Eintrag bearbeiten"/>
                <Modal id="EditWordModal">
                    <ModalBackground/>
                    <ModalCard>
                        <ModalCardHeader>
                            <ModalCardTitle>Wort bearbeiten</ModalCardTitle>
                        </ModalCardHeader>
                        <ModalCardBody>
                            <form>
                                <Input
                                  id="editWordOriginal"
                                    placeholder="Original"
                                    onChange={this.handleChange}
                                    name="original"
                                />
                                <Input
                                    id="editWordTranslation"
                                    placeholder="Übersetzung"
                                    onChange={this.handleChange}
                                    name="translation"
                                />
                                <Input
                                    id="editWordImg_url"
                                    placeholder="Bild-URL"
                                    onChange={this.handleChange}
                                    name="img_url"
                                />
                            </form>
                        </ModalCardBody>
                        <ModalCardFooter>
                            <Button
                                onClick={this.handleClick} className="is-primary">
                                Speichern
                            </Button>
                            <Button onClick={this.closeModal}>
                                Schließen
                            </Button>
                        </ModalCardFooter>
                        <ModalClose/>
                    </ModalCard>
                </Modal>
            </div>
        )
    };
}
