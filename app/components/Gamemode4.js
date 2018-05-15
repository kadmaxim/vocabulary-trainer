import React, {Component} from 'react';

class Gamemode4 extends Component {
    constructor() {
        super();
        this.forceUpdateHandler = this.forceUpdateHandler.bind(this);
    };

    forceUpdateHandler() {
        this.forceUpdate();
    };

    render() {
        let Vocabulary;
        let getRandomNumber;
        let saveSearchedVocable = "";

        function getVocabulary() {
            Vocabulary = [
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
                    ImageURL: "https://cdn.pixabay.com/photo/2017/02/20/18/03/cat-2083492__340.jpg"
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

            console.log("Got new Vocabulary");
        }

        getVocabulary();
        selectVocable();

        function selectVocable() {
            getRandomNumber = Math.floor(Math.random() * 4);
            saveSearchedVocable = Vocabulary[getRandomNumber];
        }

        function skipQuestion() {
            console.log("Skip");
            getVocabulary();
            selectVocable();
        }

        function answerQuestion() {
            if (document.getElementById("answerBox").value.toUpperCase().localeCompare(saveSearchedVocable.Translation.toUpperCase()) === 0) {
                console.log("Die Antwort ist korrekt");
                getVocabulary();
                selectVocable();
            } else {
                console.log("Die Antwort ist falsch");
            }
        }

        return (

            <div className="container">
                <h1 className="panel-heading has-text-centered">Gamemode 4</h1>

                <br/>

                <div className="container">
                    <div className="container has-text-centered">
                        {saveSearchedVocable.Original}

                        <figure className="image">
                            <img src={saveSearchedVocable.ImageURL}/>
                        </figure>
                    </div>

                    <br/>

                    <div className="container has-text-right">
                        <input className="input" id="answerBox"
                               style={{height: 40}}
                               placeholder="Antwort hier eingeben"
                        />
                        <div className="button" onClick={answerQuestion}>
                            Antwort überprüfen
                        </div>
                        <div className="button" onClick={skipQuestion}>
                            Überspringen

                        </div>
                        <div className="button" onClick={this.forceUpdateHandler}>
                            Neuladen
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Gamemode4;
