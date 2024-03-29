import React, { Component } from "react";
import { Columns, Column, Title, Container } from "bloomer";
import SinglePicture from "./../containers/SinglePicture";
import CheckButton from "./CheckButton";
import Answer from "./../containers/Answer";
import Gamemode4 from "./Gamemode4";

class Gamemode6 extends Gamemode4 {
  constructor(props) {
    super(props);
    this.showRight = this.showRight.bind(this);

    this.props.generateNext(1);
  }

  continue() {
    document
      .getElementById("g4AnswerInput")
      .classList.remove("is-success", "is-danger");
    document.getElementById("g4AnswerInput").value = "";
    this.props.generateNext(1);
  }

  showRight() {
    if (
      document.getElementById("g4AnswerInput").value ===
      this.props.correct.original
    ) {
      document.getElementById("g4AnswerInput").classList.add("is-success");
    } else {
      document.getElementById("g4AnswerInput").classList.add("is-danger");
    }

    this.props.freezeAll(true);
  }

  render() {
    let { correct, list } = this.props;

    if (correct === undefined || list === undefined) return false;

    let { items, freeze } = list;

    return (
      <Column className="is-three-quarters">
        <Columns className="is-multiline">
          <Column className="is-12">
            <Answer />
          </Column>

          <Column className="is-half is-offset-one-quarter">
            <Column>
              <SinglePicture handleClick={this.props.handleClick} />
            </Column>
            <Column className="buttons-wrap">
              <CheckButton
                showRight={this.showRight}
                getNext={this.continue.bind(this)}
                mode={freeze}
              />
            </Column>
          </Column>
        </Columns>
      </Column>
    );
  }
}

export default Gamemode6;
