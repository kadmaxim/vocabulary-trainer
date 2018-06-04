import React, {Component} from 'react';
import {Columns, Column, Title, Tile} from 'bloomer';
import PictureList from './../containers/PictureList'
import SkipButton from './SkipButton';
import Answer from "./../containers/Answer";

class Gamemode1 extends Component {
    constructor(props) {
        super(props);
        this.showRight = this.showRight.bind(this);

        this.props.generateNext(4);

    };

    showRight() {
        document.querySelector(`.btn-${this.props.correct.id}`).click();
        this.props.freezeAll(true);
    }

    render() {
        let {correct, freeze} = this.props;

        if (correct === undefined) return false;

        return (
            <Column className="is-three-quarters">
                <Columns className="is-multiline">
                    <Column className="is-12">
                        <Title hasTextAlign="centered"> {correct.translation} </Title>
                        <Answer/>
                    </Column>
                    <Column className="buttons-wrap is-12">
                        <PictureList handleClick={this.props.handleClick}/>
                        <SkipButton
                            showRight={this.showRight}
                            getNext={this.props.generateNext}
                            mode={freeze}
                        />
                    </Column>
                </Columns>
            </Column>
        )
    }
}

export default Gamemode1;
