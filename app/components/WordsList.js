import React, { Component } from 'react';
import QButton from './../containers/QButton';

export default function WordsList(props) {
  let { answers, shuffle } = props;

  return (
    <div>
      {answers
        ? answers.map((item, i) => (
            <QButton key={i} elem={item} shuffled={shuffle} />
          ))
        : ''}
    </div>
  );
}
