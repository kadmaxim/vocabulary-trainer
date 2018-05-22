import React, { Component } from 'react';
import { Column, Tile } from 'bloomer';
import WordsList from './../containers/WordsList';

export default class Gamemode3 extends Component {
  constructor(props) {
    super(props);

    this.props.generateNext(4);
  }

  render() {
    return (
      <Tile>
        <Column isSize="1/2" className="buttons-wrap">
          <WordsList />
        </Column>
        <Column isSize="1/2" className="buttons-wrap">
          <WordsList shuffle />
        </Column>
      </Tile>
    );
  }
}
