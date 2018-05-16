import React, {Component} from 'react';
import Vocabulary from '../DB Mockup/Vocabulary';

class Gamemode1 extends Component {
    constructor() {
        super();

        this.state = {
            Vocabulary: Vocabulary,
            SelectedVocab: []
        }
    };

    componentDidMount() {
        //this.getVocabulary();
        this.setState({Vocabulary: Vocabulary});
        this.selectVocable();
        //this.setState({SelectedVocab: this.selectVocable()});
    }

    selectVocable() {
        let getRandomNumber = Math.floor(Math.random() * 4);
        this.setState({SelectedVocab: this.state.Vocabulary[getRandomNumber]});
    }

    skipQuestion() {
        console.log("Skip");
        this.setState({TestField: "Test"});
        //getVocabulary();
        this.selectVocable();
    }

    answerQuestion(answer) {
        if (answer.Translation.toUpperCase().localeCompare(this.state.SelectedVocab.Translation.toUpperCase()) === 0) {
            console.log("Die Antwort ist korrekt");
            //getVocabulary();
            this.selectVocable();
        } else {
            console.log("Die Antwort ist falsch");
        }
    }

    render() {

        let VocabularyList = this.state.Vocabulary.map(vocab => {
            return (
                <div key={vocab.Id} className="column is-half">
                    <figure className="image">
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

                <div className="container has-text-right">
                    <div className="button" onClick={this.skipQuestion.bind(this)}>
                        Überspringen
                    </div>
                </div>
            </div>
        )
    }
}

export default Gamemode1;
