import React, {Component} from 'react';
import Modal from 'react-modal'
import {Button, Column} from 'bloomer';

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

export default class EditButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

        this.state = {
            modalIsOpen: false,
            original: this.props.data.original,
            translation: this.props.data.translation,
            img_url: this.props.data.img_url,
            _id: this.props.data._id
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
            original: this.state.original,
            translation: this.state.translation,
            img_url: this.state.img_url,
            _id: this.state._id
        };

        this.props.handleClick(data);
        this.setState({modalIsOpen: false});
    }

    updateOriginal(e) {
        this.setState({original: e.target.value});
    };

    updateTranslation(e) {
        this.setState({translation: e.target.value});
    };

    updateImg_Url(e) {
        this.setState({img_url: e.target.value});
    };

    render() {
        return (
            <div>
                <button onClick={this.openModal}>
                    Wort bearbeiten
                </button>

                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >

                    <h2 ref={subtitle => this.subtitle = subtitle}>Wort bearbeiten</h2>
                    <form>
                        <input
                            value={this.state.original}
                            placeholder="Original"
                            id="editWordOriginal"
                            onChange={this.updateOriginal.bind(this)}
                        />
                        <input
                            value={this.state.translation}
                            placeholder="Übersetzung"
                            id="editWordTranslation"
                            onChange={this.updateTranslation.bind(this)}
                        />
                        <input
                            value={this.state.img_url}
                            placeholder="Bild-URL"
                            id="editWordImg_url"
                            onChange={this.updateImg_Url.bind(this)}
                        />
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
