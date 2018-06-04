import React from 'react';
import {Input, Column, Button} from 'bloomer';

export default function QInput(props) {
    let {elem, rid, mode, handleClick, shuffled} = props;
    return (
        <Column className="field is-grouped is-paddingless has-addons">
            <Column className="control is-half is-paddingless is-marginless">
                <Input placeholder="Antwort hier eingeben" id="g4AnswerInput" className="is-fullwidth"/>
            </Column>
            <Column className="control is-half is-paddingless is-marginless buttons-wrap">
                <Button onClick={handleClick.bind(this, elem.id)}>
                    {elem.isPressed ? elem.original : "Antwort anzeigen "}
                </Button>
            </Column>
        </Column>

    );
}
