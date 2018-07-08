import React from "react";
import { Columns, Column, Title, Tile } from "bloomer";
import PictureList from "./../containers/PictureList";
import SkipButton from "./../containers/SkipButton";
import Answer from "./../containers/Answer";
import Gamemode1 from "./Gamemode1";

class Gamemode5 extends Gamemode1 {
  constructor(props) {
    super(props);
    this.props.generateNext(4);
  }

  render() {
    let { correct, list } = this.props;

    if (correct === undefined || list === undefined) return false;

    return (
      <Column className="is-three-quarters">
        <Columns className="is-multiline">
          <Column className="is-12">
            <Answer />
          </Column>
          <Column className="buttons-wrap is-12">
            <PictureList handleClick={this.props.handleClick} />
            <SkipButton
              showRight={this.showRight}
              getNext={this.props.generateNext}
              mode={list.freeze}
            />
          </Column>
        </Columns>
      </Column>
    );
  }
}

export default Gamemode5;
