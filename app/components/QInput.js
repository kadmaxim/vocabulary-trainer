import React from 'react';
import {Input, Column, Button} from 'bloomer';

export default function QInput(props) {
    let {elem, rid, mode, handleClick, shuffled} = props;
    return (
        <div>
            <Input placeholder="Antwort hier eingeben" id="g4AnswerInput"/>

            <Button onClick={handleClick.bind(this, elem.id)}>
                {elem.isPressed ? elem.original : "Antwort anzeigen "}
            </Button>
        </div>

    );
}
