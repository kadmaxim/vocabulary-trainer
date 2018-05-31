import React, {Component} from 'react';
import {Columns, Column, Title, Tile} from 'bloomer';
import SinglePicture from './../containers/SinglePicture'
import CheckButton from './CheckButton';
import Answer from "./../containers/Answer";

class Gamemode4 extends Component {
    constructor(props) {
        super(props);
        this.showRight = this.showRight.bind(this);

        this.props.generateNext(1);
    };

    continue() {
        document.getElementById("g4AnswerInput").classList.remove("is-success", "is-danger");
        document.getElementById("g4AnswerInput").value = "";
        this.props.generateNext(1);
    }

    showRight() {
        if (document.getElementById("g4AnswerInput").value === this.props.correct.original) {
            document.getElementById("g4AnswerInput").classList.add("is-success")
        } else {
            document.getElementById("g4AnswerInput").classList.add("is-danger")
        }

        this.props.freezeAll(true);
    }

    render() {

        let {correct, freeze} = this.props;

        if (correct === undefined) return false;

        return (
            <Tile>
                <Columns className="is-multiline">
                    <Column className="is-full">
                        <Title hasTextAlign="centered"> {correct.translation} </Title>
                        <Answer/>
                    </Column>

                    <Column className="is-full">
                        <SinglePicture handleClick={this.props.handleClick}/>
                        <CheckButton
                            showRight={this.showRight}
                            getNext={this.continue.bind(this)}
                            mode={freeze}
                        />
                    </Column>
                </Columns>
            </Tile>
        )
    }
}

export default Gamemode4;
