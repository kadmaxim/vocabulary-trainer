import React from "react";
import QButton from "./../containers/QButton";
import { Image, Column, Columns } from "bloomer";

export default function PictureList(props) {
  let { list } = props;

  return (
    <Columns className="is-multiline">
      {list
        ? list.items.map((item, i) => (
            <Column key={i} className="is-half">
              <Image src={item.img_url} className="is-2by1" />
              <QButton elem={item} mode={list.freeze} indx={i} />
            </Column>
          ))
        : ""}
    </Columns>
  );
}
