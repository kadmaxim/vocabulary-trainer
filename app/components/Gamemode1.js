import React, {Component} from 'react';
//import Vocabulary from '../DB Mockup/Vocabulary';
import {Columns, Column, Title, Tile} from 'bloomer';
import PictureList from './../containers/PictureList'
import SkipButton from './SkipButton';
import Answer from "./../containers/Answer";

class Gamemode1 extends Component {
    constructor(props) {
        super(props);
        this.showRight = this.showRight.bind(this);

        this.props.generateNext(4);

        /*        this.state = {
                    Vocabulary: Vocabulary,
                    SelectedVocab: [],
                    SelectedVocabs: [],
                    ButtonClass: "button"
                }*/
    };

    showRight() {
        document.querySelector(`.btn-${this.props.correct.id}`).click();
        this.props.freezeAll(true);
    }

    /* componentDidMount() {
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

             document.getElementById("g1Container").className = "has-background-success";
             setTimeout(() => {
                 document.getElementById("g1Container").className = "";
                 this.selectVocables()
             }, 1500);

         } else {
             console.log("Die Antwort ist falsch");

             document.getElementById("g1Container").className = "has-background-danger";
             setTimeout(() => {
                 document.getElementById("g1Container").className = "";
             }, 1500);
         }
     }*/

    render() {
        let {correct, freeze} = this.props;

        if (correct === undefined) return false;

        /*        let VocabularyList = this.state.SelectedVocabs.map(vocab => {
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
                });*/

        return (
            <Tile>
                <Columns className="is-multiline">
                    <Column className="is-full">
                        <Title hasTextAlign="centered"> {correct.translation} </Title>
                        <Answer/>
                    </Column>
                    <Column className="buttons-wrap">
                        <PictureList handleClick={this.props.handleClick}/>
                        <SkipButton
                            showRight={this.showRight}
                            getNext={this.props.generateNext}
                            mode={freeze}
                        />
                    </Column>
                </Columns>
            </Tile>
        )
    }
}

export default Gamemode1;
