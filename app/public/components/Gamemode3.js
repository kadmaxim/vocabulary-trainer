import React, { Component } from 'react';
import { Column, Tile, Button, Notification, Delete } from 'bloomer';

export default class Gamemode3 extends Component {
  constructor(props) {
    super(props);

    this.props.generateNext(7);
  }

  render() {
    let { answers, shuffled, handleClick, selected } = this.props;
    if (answers === undefined || shuffled === undefined) return false;

    return (
      <Tile className="flex-wrap">
        <Column isSize="1/2" className="buttons-wrap">
          {answers.map(elem => {
            return (
              <Column key={elem._id}>
                <Button
                  disabled={elem.isPressed ? true : false}
                  onClick={handleClick.bind(this, elem, selected)}
                  className={`btn-${elem._id}`}
                  isColor={elem.isPressed && (elem._id ? 'success' : 'danger')}
                  isStatic={elem.isPressed}>
                  {elem.original}
                </Button>
              </Column>
            );
          })}
        </Column>
        <Column isSize="1/2" className="buttons-wrap">
          {shuffled.map(elem => {
            return (
              <Column key={elem._id}>
                <Button
                  disabled={elem.isPressed ? true : false}
                  onClick={handleClick.bind(this, elem, selected)}
                  className={`btn-${elem._id}`}
                  isColor={elem.isPressed && (elem._id ? 'success' : 'danger')}
                  isStatic={elem.isPressed}>
                  {elem.translation}
                </Button>
              </Column>
            );
          })}
        </Column>
      </Tile>
    );
  }
}
