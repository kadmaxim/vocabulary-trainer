import React from 'react';
import QInput from './../containers/QInput';
import { Image, Tile } from 'bloomer';

export default function SinglePicture(props) {
  let { answers, shuffle } = props;
  let html = answers
    ? answers.map((item, i) => (
        <Tile key={i} isChild>
          <Image src={item.img_url} />
          <QInput key={i} elem={item} shuffled={shuffle} />
        </Tile>
      ))
    : '';
  return html;
}
