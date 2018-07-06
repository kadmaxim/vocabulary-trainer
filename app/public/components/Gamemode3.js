import React, { Component } from 'react';
import { Column, Tile, Button, Notification, Delete } from 'bloomer';

export default class Gamemode3 extends Component {
  constructor(props) {
    super(props);
    this.props.generateNext(7);
  }

  render() {
    let { leftList, shuffledList, handleClick, selected } = this.props;
    if (leftList === undefined || shuffledList === undefined) return false;

    return (
      <Tile className="flex-wrap">
        <Column isSize="1/2" className="buttons-wrap">
          {leftList.items.map(elem => {
            return (
              <Column key={elem._id}>
                <Button
                  disabled={elem.isPressed ? true : false}
                  onClick={handleClick.bind(this, elem, selected, 'wordsList')}
                  isColor={elem.isPressed ? 'info' : ''}
                  isStatic={!elem.isPressed && leftList.freeze}>
                  {elem.original}
                </Button>
              </Column>
            );
          })}
        </Column>
        <Column isSize="1/2" className="buttons-wrap">
          {shuffledList.items.map(elem => {
            return (
              <Column key={elem._id}>
                <Button
                  disabled={elem.isPressed || elem.isDone ? true : false}
                  onClick={handleClick.bind(
                    this,
                    elem,
                    selected,
                    'shuffledList'
                  )}
                  isColor={elem.isPressed || elem.isDone ? 'info' : ''}
                  isStatic={
                    (!elem.isPressed || elem.isDone) && shuffledList.freeze
                  }>
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
