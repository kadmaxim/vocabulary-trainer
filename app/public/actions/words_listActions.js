import {SET_WORDS, SET_CORRECT, SET_FREEZE, GIVE_ANSWER, TOGGLE_IMG, FETCH_WORDS, ADD_WORD} from "./types";
import axios from "axios/index";

export const fetchWords = () => dispatch => {
    axios.get(`/api/words`)
        .then(res => {
            return Array.from(res.data)
        })
        .then(Words => dispatch({
            type: FETCH_WORDS,
            payload: Words
        }));
};

export const addWord = (wordData) => dispatch => {
    axios.post(`/api/word`, {
        original: wordData.original,
        translation: wordData.translation,
        img_url: wordData.img_url
    }).then(res => {
        return Array.from(res.data)
            .then(word => dispatch({
                type: ADD_WORD,
                payload: word
            }))
    });
};