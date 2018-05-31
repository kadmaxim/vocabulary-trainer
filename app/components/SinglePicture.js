import React, {} from 'react';
import QInput from './../containers/QInput';
import { Image, Column,Columns } from 'bloomer';

export default function SinglePicture(props) {
    let {answers, shuffle} = props;

    return (
        <div>
            {answers
                ? answers.map((item, i) => (
                    <div key={i}>
                        <figure>
                            <Image src={item.img_url} className="is-2by1"/>
                        </figure>
                        <QInput key={i} elem={item} shuffled={shuffle}/>
                    </div>
                ))
                : ''}
        </div>
    );
}
