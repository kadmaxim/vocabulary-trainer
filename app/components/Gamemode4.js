import React, {Component} from 'react';
import Vocabulary from '../DB Mockup/Vocabulary';

class Gamemode4 extends Component {
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

    answerQuestion() {
        let answer = document.getElementById("answerBox").value;

        if (answer.toUpperCase().localeCompare(this.state.SelectedVocab.Translation.toUpperCase()) === 0) {
            console.log("Die Antwort ist korrekt");

            document.getElementById("answerBox").value = "";

            document.getElementById("g4CheckButton").className = "button has-background-success";
            setTimeout(() => {
                document.getElementById("g4CheckButton").className = "button";
                this.selectVocable()
            }, 1500);

        } else {
            console.log("Die Antwort ist falsch");

            document.getElementById("g4CheckButton").className = "button has-background-danger";
            setTimeout(() => {
                document.getElementById("g4CheckButton").className = "button";
            }, 1500);
        }
    }

    render() {

        return (

            <div className="container">
                <h1 className="panel-heading has-text-centered">Gamemode 4</h1>

                <br/>

                <div className="container">
                    <div className="container has-text-centered">
                        {this.state.SelectedVocab.Original}

                        <figure className="image">
                            <img src={this.state.SelectedVocab.ImageURL}/>
                        </figure>
                    </div>

                    <br/>

                    <div className="container has-text-right">
                        <input className="input" id="answerBox"
                               style={{height: 40}}
                               placeholder="Antwort hier eingeben"
                        />
                        <div className="button" onClick={this.answerQuestion.bind(this)}>
                            Antwort überprüfen
                        </div>
                        <div className="button" onClick={this.skipQuestion.bind(this)}>
                            Überspringen
                        </div>
                        <div className="button" id="g4CheckButton">
                            Korrekt?
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gamemode4;
