import React, { Component } from 'react';
import QButton from './../containers/QButton';

export default function WordsList(props) {
  let { answers } = props;

  return (
    <div>
      {answers ? answers.map((item, i) => <QButton key={i} elem={item} />) : ''}
    </div>
  );
}
