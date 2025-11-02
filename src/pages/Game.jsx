import { useState } from "react"
import { Button, ExcerciseText, Timer, Header } from "../components";
import { useEngineExercise } from "../hooks";

export function Game() {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const level = JSON.parse(localStorage.getItem('difficult'));
    const { exercise, correctAnswer, shuffledAnswers } = useEngineExercise({ level });

    return <>
        <Header></Header>
        <div className="centerGameContainer">
            <Timer></Timer>
            <ExcerciseText exercise={ exercise }></ExcerciseText>
            {
            shuffledAnswers.map((ans) => (
                <Button
                    key={ ans }
                    text={ ans }
                    className = { "answerButton" }
                    action={ () => correctAnswer === ans ? setCorrectAnswers(correctAnswers + 1) : null }
                />
            ))}
            <p className="defaultText">correct answers: { correctAnswers }</p>
        </div>
    </>
}