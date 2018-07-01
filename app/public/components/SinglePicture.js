import React from 'react';
import QInput from './../containers/QInput';
import { Image, Tile } from 'bloomer';

export default function SinglePicture(props) {
  let { list } = props;
  let html = list
    ? list.items.map((item, i) => (
        <Tile key={i} isChild>
          <Image src={item.img_url} />
          <QInput elem={item} />
        </Tile>
      ))
    : '';
  return html;
}
