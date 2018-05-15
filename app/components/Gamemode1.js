import React, {Component} from 'react';

class Gamemode1 extends Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);

        this.state = {
            Vocabulary: []
        }

    };

    componentDidMount(){
        //this.getVocabulary();
        this.setState({Vocabulary:this.getVocabulary()});
    }

    forceUpdateHandler() {
        this.forceUpdate();
    };

    getVocabulary() {
      let  Vocabulary = [

            {
                Id: 1,
                Original: "Hund",
                Translation: "Dog",
                ImageURL: "https://cdn.pixabay.com/photo/2018/05/08/01/11/dalmation-dog-3382090__340.jpg"
            },
            {
                Id: 2,
                Original: "Katze",
                Translation: "Cat",
                ImageURL: "https://cdn.pixabay.com/photo/2017/02/14/08/23/cat-2065300__340.jpg"
            },
            {
                Id: 3,
                Original: "Pferd",
                Translation: "Horse",
                ImageURL: "https://cdn.pixabay.com/photo/2018/05/04/21/49/the-horse-3375107__340.jpg"
            },
            {
                Id: 4,
                Original: "Huhn",
                Translation: "Chicken",
                ImageURL: "https://cdn.pixabay.com/photo/2018/04/24/21/28/the-hen-3348170__340.jpg"
            }
        ];

        return Vocabulary;
    }

    render() {
        let Vocabulary;
        let getRandomNumber;
        let saveSearchedVocable = "";

        //this.setState({Vocabulary:this.getVocabulary()});



        selectVocable();

        let VocabularyList = this.state.Vocabulary.map(vocab => {
            return (
                <div key={vocab.Id} className="column is-half">
                    <figure className="image">
                        <img src={vocab.ImageURL} onClick={() => answerQuestion(vocab)}/>
                    </figure>
                    <div>
                        {vocab.Translation}
                    </div>
                </div>
            )
        });

        function selectVocable() {
            getRandomNumber = Math.floor(Math.random() * 4);
            saveSearchedVocable = Vocabulary[getRandomNumber];
        }

        function skipQuestion() {
            console.log("Skip");
            getVocabulary();
            selectVocable();
        }

        function answerQuestion(answer) {
            if (answer.Translation.toUpperCase().localeCompare(saveSearchedVocable.Translation.toUpperCase()) === 0) {
                console.log("Die Antwort ist korrekt");
                getVocabulary();
                selectVocable();
            } else {
                console.log("Die Antwort ist falsch");
            }
        }

        return (
            <div className="container">
                <h1 className="panel-heading has-text-centered">Gamemode 1</h1>
                <br/>
                <div className="container has-text-centered">
                    {saveSearchedVocable.Original}
                </div>

                <div className="container">
                    <div className="column">
                        <div className="columns is-multiline">
                            {VocabularyList}
                        </div>
                    </div>
                </div>

                <div className="container has-text-right">
                    <div className="button" onClick={skipQuestion}>
                        Überspringen
                    </div>
                    <div className="button" onClick={this.test}>
                        Neuladen
                    </div>
                </div>
            </div>
        )
    }
}

export default Gamemode1;
