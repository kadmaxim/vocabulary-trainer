import React from 'react';
import {Input, Column, Button} from 'bloomer';

export default function QInput(props) {
    let {elem, rid, mode, handleClick, shuffled} = props;
    return (
        <Column>
            <Input value={elem.isPressed ? elem.original : ""} placeholder="Antwort hier eingeben"/>
            <Button onClick={handleClick.bind(this, elem.id)}>
                Antwort anzeigen
            </Button>
        </Column>
    );
}
