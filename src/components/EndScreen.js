
import React ,{useContext}from 'react'
import {QuizContext} from '../Helpers/Context';
import "../App.css";
import {Questions} from'../Helpers/Questions';
export default function EndScreen() {
const{score,setScore,setGameState}=useContext(QuizContext)
const restartQuiz = () => {
    setScore(0);
    setGameState("menu");

}
    
    return (
        <div className="EndScreen">
            <h1>Quiz Terminado</h1>
            <h3>{score} / {Questions.length}</h3>
            <button className="btn-reset" onClick={restartQuiz}>Reset </button>
        </div>
    )
}
