import React, {Component} from 'react';
import Vocabulary from '../DB Mockup/Vocabulary';
import {Columns, Column, Title, Tile} from 'bloomer';

class Gamemode4 extends Component {
    constructor() {
        super();

        this.state = {
            Vocabulary: Vocabulary,
            SelectedVocab: [],
            SelectedVocabs: []
        }
    };

    componentDidMount() {
        this.setState({Vocabulary: Vocabulary});
        this.selectVocables();
    }

    readTip() {
        let translation = this.state.SelectedVocab.Translation;
        responsiveVoice.speak(translation);
    }

    selectVocables() {
        let VocabCount = this.state.Vocabulary.length - 1;
        let savedVocabs = [];

        for (let i = 0; i < 1; i++) {
            let getRandomNumber = Math.floor(Math.random() * VocabCount);
            savedVocabs.push(this.state.Vocabulary[getRandomNumber]);
        }

        this.setState({SelectedVocabs: savedVocabs});

        let getRandomNumber = Math.floor(Math.random());
        this.setState({SelectedVocab: savedVocabs[getRandomNumber]});

    }

    skipQuestion() {
        console.log("Skip");
        this.selectVocables();
    }

    answerQuestion() {
        let answer = document.getElementById("answerBox").value;

        if (answer.toUpperCase().localeCompare(this.state.SelectedVocab.Translation.toUpperCase()) === 0) {
            console.log("Die Antwort ist korrekt");

            this.readTip();

            document.getElementById("answerBox").value = "";

            document.getElementById("g4Container").className = "has-background-success";
            setTimeout(() => {
                document.getElementById("g4Container").className = "";
                this.selectVocables()
            }, 1500);

        } else {
            console.log("Die Antwort ist falsch");

            document.getElementById("g4Container").className = "has-background-danger";
            setTimeout(() => {
                document.getElementById("g4Container").className = "";
            }, 1500);
        }
    }

    render() {

        return (
            <Title>
                <div>
                    <br/>

                    <div>
                        <div id="g4Container">
                            <div className="has-text-centered">
                                <div className="column">
                                    {this.state.SelectedVocab.Original}

                                    <figure className="image is-2by1">
                                        <img src={this.state.SelectedVocab.ImageURL}/>
                                    </figure>
                                </div>
                            </div>
                            <br/>
                        </div>

                        <div className="has-text-right">
                            <div className="field is-grouped is-grouped-right">
                                <p className="control">
                                    <input className="input" id="answerBox"
                                           style={{height: 40}}
                                           placeholder="Antwort hier eingeben"
                                    />
                                </p>

                                <p className="control">
                                    <a className="button" onClick={this.answerQuestion.bind(this)}>
                                        Antwort überprüfen
                                    </a>
                                </p>

                                <p className="control">
                                    <a className="button" onClick={this.readTip.bind(this)}>
                                        Tipp
                                    </a>
                                </p>

                                <p className="control">
                                    <a className="button" onClick={this.skipQuestion.bind(this)}>
                                        Überspringen
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Title>
        )
    }
}

export default Gamemode4;
