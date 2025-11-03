import { useState } from "react"
import { Button, Text, Timer, Header, Portal, GameResults } from "../components";
import { useEngineExercise } from "../hooks";

export function Game() {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [time, setTime] = useState(5);
    const [timerKey, setTimerKey] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);
    const level = JSON.parse(localStorage.getItem('difficult'));
    const { exercise, correctAnswer, shuffledAnswers } = useEngineExercise({ level });
    const [showResults, setShowResults] = useState(false);

    const restartGame = () => {
        setTime(time);
        setCorrectAnswers(0); 
        setTotalTasks(0);
        setShowResults(false);
        setTimerKey(k => k + 1);
    }

    return <>
        <Header></Header>
        <div className="centerGameContainer">
            <Timer restartKey = { timerKey } initialTime = { time } onFinish={ () => setShowResults(true) }></Timer>
            <Text text={ exercise } className = { "defaultText" }></Text>
            {
            shuffledAnswers.map((ans) => (
                <Button
                    key={ ans }
                    text={ ans }
                    className = { "answerButton" }
                    action={ () => correctAnswer === ans ? setCorrectAnswers(correctAnswers + 1) || setTotalTasks(totalTasks + 1) : setTotalTasks(totalTasks + 1) }
                />
            ))}
            <p className="defaultText">correct answers counter: { correctAnswers }</p>
            <Portal isOpen = { showResults } onClose = { () => setShowResults(false) || restartGame() } headerText = { "Гру завершено!" }>
                <GameResults correctAnswers = { correctAnswers } totalTasks={ totalTasks } onRestart={ restartGame } />
            </Portal>
        </div>
    </>
}