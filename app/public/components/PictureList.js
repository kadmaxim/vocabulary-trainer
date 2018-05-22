import React, {} from 'react';
import QButton from './../containers/QButton';
import { Image, Column,Columns } from 'bloomer';

export default function PictureList(props) {
    let {answers, shuffle} = props;

    return (
        <Columns className="is-multiline">
            {answers
                ? answers.map((item, i) => (
                    <Column className="is-half" key={i}>
                        <figure>
                            <Image src={item.img_url} className="is-2by1"/>
                        </figure>
                        <QButton key={i} elem={item} shuffled={shuffle}/>
                    </Column>
                ))
                : ''}
        </Columns>
    );
}
