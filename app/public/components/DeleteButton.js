import React from "react";

export default function DeleteButton(props) {
  const { handleClick, word } = props;
  return (
    <span
      onClick={handleClick.bind(this, word)}
      className="icon fa fa-trash has-text-danger"
      title="Eintrag löschen"
    />
  );
}
