import React, {Component} from 'react';
//import Vocabulary from '../DB Mockup/Vocabulary';
import {Columns, Column, Title, Tile} from 'bloomer';
import SinglePicture from './../containers/SinglePicture'
import CheckButton from './CheckButton';
import Answer from "./../containers/Answer";

class Gamemode4 extends Component {
    constructor(props) {
        super(props);
        this.showRight = this.showRight.bind(this);

        this.props.generateNext(1);

        /* this.state = {
             Vocabulary: Vocabulary,
             SelectedVocab: [],
             SelectedVocabs: []
         }*/
    };

    generateNext() {
        this.props.generateNext(1);
        document.getElementById("g4AnswerInput").style.backgroundColor = "";
    }

    showRight() {

        if (document.getElementById("g4AnswerInput").value === this.props.correct.original) {
            document.getElementById("g4AnswerInput").style.backgroundColor = "green";
        } else {
            document.getElementById("g4AnswerInput").style.backgroundColor = "red";
        }

        this.props.freezeAll(true);
    }

    /*  componentDidMount() {
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
      }*/

    render() {

        let {correct, freeze} = this.props;

        if (correct === undefined) return false;

        return (
            <Tile>
                <Columns className="is-multiline">
                    <Column className="is-full">
                        <Title hasTextAlign="centered"> {correct.translation} </Title>
                        <Answer/>
                    </Column>

                    <Column className="is-full is-grouped-multiline">
                        <SinglePicture handleClick={this.props.handleClick}/>
                        <CheckButton
                            showRight={this.showRight}
                            getNext={this.generateNext}
                            mode={freeze}
                        />

                    </Column>
                </Columns>
            </Tile>
        )
    }
}

export default Gamemode4;
