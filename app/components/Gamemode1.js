import React, {Component} from 'react';
import Vocabulary from '../DB Mockup/Vocabulary';

class Gamemode1 extends Component {
    constructor() {
        super();

        this.state = {
            Vocabulary: Vocabulary,
            SelectedVocab: [],
            SelectedVocabs: [],
            ButtonClass: "button"
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
        let savedNumbers = [];

        for (let i = 0; i < 4; i++) {
            let getRandomNumber = Math.floor(Math.random() * VocabCount);

            while (savedNumbers.includes(getRandomNumber) === true) {
                getRandomNumber = Math.floor(Math.random() * VocabCount);
            }

            savedNumbers.push(getRandomNumber);
            savedVocabs.push(this.state.Vocabulary[getRandomNumber]);
        }

        this.setState({SelectedVocabs: savedVocabs});

        let getRandomNumber = Math.floor(Math.random() * 3);
        this.setState({SelectedVocab: savedVocabs[getRandomNumber]});
    }

    skipQuestion() {
        console.log("Skip");
        this.selectVocables();
    }

    answerQuestion(answer) {
        if (answer.Translation.toUpperCase().localeCompare(this.state.SelectedVocab.Translation.toUpperCase()) === 0) {
            console.log("Die Antwort ist korrekt");

            this.readTip();

            document.getElementById("g1Container").className = "container has-background-success";
            setTimeout(() => {
                document.getElementById("g1Container").className = "container";
                this.selectVocables()
            }, 1500);

        } else {
            console.log("Die Antwort ist falsch");

            document.getElementById("g1Container").className = "container has-background-danger";
            setTimeout(() => {
                document.getElementById("g1Container").className = "container";
            }, 1500);
        }
    }

    render() {

        let VocabularyList = this.state.SelectedVocabs.map(vocab => {
            return (
                <div key={vocab.Id} className="column is-half">
                    <figure className="image is-2by1">
                        <img src={vocab.ImageURL} onClick={() => this.answerQuestion(vocab)}/>
                    </figure>
                    <div>
                        {vocab.Translation}
                    </div>
                </div>
            )
        });

        return (
            <div className="container">
                <h1 className="panel-heading has-text-centered">Gamemode 1</h1>
                <br/>
                <div className="container" id="g1Container">
                    <div className="container has-text-centered">
                        {this.state.SelectedVocab.Original}
                    </div>

                    <div className="container">
                        <div className="column">
                            <div className="columns is-multiline">
                                {VocabularyList}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container">
                    <div className="field is-grouped is-grouped-right">
                        <p className="control">
                            <a className="button" onClick={this.skipQuestion.bind(this)}>
                                Überspringen
                            </a>
                        </p>
                        <p className="control">
                            <a className="button" onClick={this.readTip.bind(this)}>
                                Tipp
                            </a>
                        </p>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gamemode1;
