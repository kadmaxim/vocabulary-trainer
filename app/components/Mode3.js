import React, { Component } from 'react';
import { Columns, Column, Tile } from 'bloomer';
import _ from 'lodash/collection';
import QButton from './QButton3';

export default class Mode3 extends Component {
  constructor(props) {
    super(props);
    this.state = { answers: [], leftSide: [], rightSide: [], correct: null };
    this.handleBtn = this.handleBtn.bind(this);
  }
  componentDidMount() {
    this.generateAll();
  }

  showRight() {
    //document.querySelector(`.btn-${this.state.correct.id}`).click()
  }

  handleBtn(id) {
    let msg = '';
    if (this.state.correct) {
      msg = this.state.correct === id ? 'correct' : 'wrong!';
      this.setState({ correct: null });
    } else {
      msg = 'set correct ID';
      this.setState({ correct: id });
    }
    console.log(msg);
  }

  generateAll() {
    let answers = _.sampleSize(DB, 4);
    console.log('run generate');
    this.setState({ leftSide: answers, rightSide: _.shuffle(answers) });
  }

  render() {
    let { correct, freeze, leftSide, rightSide } = this.state;

    return (
      <Tile>
        <Column isSize="1/2" className="buttons-wrap">
          {leftSide.map((item, i) => (
            <QButton key={i} elem={item} handler={this.handleBtn} />
          ))}
        </Column>
        <Column isSize="1/2" className="buttons-wrap">
          {rightSide.map((item, i) => (
            <QButton key={i} elem={item} handler={this.handleBtn} />
          ))}
        </Column>
      </Tile>
    );
  }
}
