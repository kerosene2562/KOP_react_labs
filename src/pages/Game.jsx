import { useEffect, useState } from "react"
import { Button, Text, Timer, Portal, GameResults, SettingsForm } from "../components";
import { useEngineExercise } from "../hooks";
import { useNavigate, useParams } from "react-router";
import styles from "../styles/index.module.css";
import { saveGameResults } from "../utils";

export function Game() {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [time, setTime] = useState(5);
    const [timerKey, setTimerKey] = useState(0);
    const [totalTasks, setTotalTasks] = useState(0);
    const level = JSON.parse(localStorage.getItem('difficult'));
    const { exercise, correctAnswer, shuffledAnswers } = useEngineExercise({ level });
    const [showResults, setShowResults] = useState(false);
    const navigate = useNavigate();
    const [showSettings, setShowSettings] = useState(false);

    const { userId } = useParams();
    const uuid = localStorage.getItem("uuid");
    useEffect(() => {
        if(!userId || uuid != userId)
            navigate("/start");
    }, []);

    useEffect(() => {
        if(showResults)
            saveGameResults({ uuid, correctAnswers, totalTasks });
    }, [showResults]);
    

    const restartGame = () => {
        setTime(time);
        setCorrectAnswers(0); 
        setTotalTasks(0);
        setShowResults(false);
        setTimerKey(k => k + 1);
    }

    return <>
        <div className={ styles.centerGameContainer }>
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
            <Portal isOpen = { showResults } onClose = { () => setShowResults(false) || restartGame() } headerText = { "Game over!" }>
                <GameResults correctAnswers = { correctAnswers } totalTasks={ totalTasks } onRestart={ restartGame } onDifficulty={ () => setShowSettings(true) } onResults={ () => navigate(`/results/${uuid}`) } />
            </Portal>
            <Portal isOpen = { showSettings } onClose = { () => setShowSettings(false) } headerText = { "Choose the difficulty:" }>
                <SettingsForm/>
            </Portal>
        </div>
    </>
}