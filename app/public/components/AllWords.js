import React, {Component} from 'react';

import {Title, Tile, Column, Columns, Button, Table} from 'bloomer';
import EditButton from './../containers/EditButton';
import DeleteButton from './../containers/DeleteButton';

class AllWords extends Component {
  componentWillMount() {
    this.props.getAllWords();
  }

  render() {
    const postWords = this.props.words_list.map(word => (
      <Columns key={word._id}>
        <div className="column is-3">{word.translation}</div>
        <div className="column is-3">{word.original}</div>
        <div className="column is-1">
          <EditButton data={word} />
        </div>
        <div className="column is-1">
          <DeleteButton data={word} />
        </div>
      </Columns>
    ));
    return <div>{postWords}</div>;
  }
}

export default AllWords;
