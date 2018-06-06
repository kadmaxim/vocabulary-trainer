import React, {Component} from 'react';
import Modal from 'react-modal'
import {Title, Tile, Column, Button} from 'bloomer';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement(document.getElementById('root'));

export default class AddWord extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            modalIsOpen: false
        };
    }

    openModal() {
        this.setState({modalIsOpen: true});
    }

    afterOpenModal() {
    }

    closeModal() {
        this.setState({modalIsOpen: false});
    }

    handleClick() {
        let data = {
            original: document.getElementById('addWordOriginal').value,
            translation: document.getElementById('addWordTranslation').value,
            img_url: document.getElementById('addWordImg_url').value
        };

        this.props.handleClick(data);
        this.setState({modalIsOpen: false});
    }

    render() {
        return (
            <div>
                <button onClick={this.openModal}>
                    Wort hinzufügen
                </button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Wort hinzufügen</h2>
                    <form>
                        <input placeholder="Original" id="addWordOriginal"/>
                        <input placeholder="Übersetzung" id="addWordTranslation"/>
                        <input placeholder="Bild-URL" id="addWordImg_url"/>
                    </form>
                    <button
                        onClick={this.handleClick}>
                        Speichern
                    </button>
                    <button onClick={this.closeModal}>
                        Schließen
                    </button>
                </Modal>
            </div>
        )
    };
}
