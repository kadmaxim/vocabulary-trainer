import React from "react";
import { Button, Column } from "bloomer";

export default function QButton(props) {
  let { elem, rid, mode, handleClick, shuffled = false, indx } = props;

  return (
    <Column>
      <Button
        disabled={elem.isPressed ? true : false}
        className={`btn-${elem._id} btn-key-${!isNaN(indx) ? indx + 1 : ""}`}
        isColor={elem.isPressed && (elem._id === rid ? "success" : "danger")}
        isStatic={!elem.isPressed && mode}
        onClick={handleClick.bind(this, elem._id)}>
        {shuffled ? elem.translation : elem.original}
      </Button>
    </Column>
  );
}
