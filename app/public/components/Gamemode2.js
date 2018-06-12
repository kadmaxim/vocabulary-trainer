import React, { Component } from 'react';
import { Columns, Column, Title, Tile } from 'bloomer';
import WordsList from './../containers/WordsList';
import SkipButton from './SkipButton';
import Thumbnail from './../containers/Thumbnail';

class Gamemode2 extends Component {
  constructor(props) {
    super(props);
    this.showRight = this.showRight.bind(this);

    this.props.generateNext(4);
  }

  showRight() {
    document.querySelector(`.btn-${this.props.correct._id}`).click();
    this.props.freezeAll(true);
  }

  render() {
    let { correct, freeze } = this.props;

    if (correct === undefined) return false;

    return (
      <Tile>
        <Column isSize="1/2">
          <Title hasTextAlign="centered"> {correct.translation} </Title>
          <Thumbnail />
        </Column>
        <Column isSize="1/2" className="buttons-wrap">
          <div>
            <WordsList handleClick={this.props.handleClick} />
          </div>
          <SkipButton
            showRight={this.showRight}
            getNext={this.props.generateNext}
            mode={freeze}
          />
        </Column>
      </Tile>
    );
  }
}

export default Gamemode2;
