import React, { Component } from 'react';

import { Title, Tile, Column, Columns, Button, Subtitle } from 'bloomer';
import EditButton from './../containers/EditButton';
import DeleteButton from './../containers/DeleteButton';

class AllWords extends Component {
  componentWillMount() {
    this.props.getAllWords();
  }

  render() {
    let { allWords } = this.props;
    return allWords ? (
      allWords.map(word => (
        <Columns key={word._id} isVCentered className="user-words-list">
          <Column isSize={3}>
            <img src={word.img_url} />
          </Column>
          <Column isSize={3}>{word.translation}</Column>
          <Column isSize={3}>{word.original}</Column>
          <Column isSize={2}>
            <EditButton word={word} />
          </Column>
          <Column isSize={1}>
            <DeleteButton word={word} />
          </Column>
        </Columns>
      ))
    ) : (
      <Subtitle isSize={4} isMarginless>
        Nichts gefunden {'  '}
        <i className="fa fa-exclamation-triangle has-text-danger" />
      </Subtitle>
    );
  }
}

export default AllWords;
