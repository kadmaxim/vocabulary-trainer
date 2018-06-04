import React from 'react';
import { Button, Column } from 'bloomer';

export default function QButton(props) {
  let { elem, rid, mode, handleClick, shuffled } = props;
  return (
    <Column>
      <Button
        disabled={elem.isPressed ? true : false}
        className={`btn-${elem.id}`}
        isColor={elem.isPressed && (elem.id === rid ? 'success' : 'danger')}
        isStatic={!elem.isPressed && mode}
        onClick={handleClick.bind(this, elem.id)}>
        {shuffled ? elem.translation : elem.original}
      </Button>
    </Column>
  );
}