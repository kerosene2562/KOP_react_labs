import { useState } from "react"
import { AnswerButton, ExcerciseText, Timer } from "../components";
import { useEngineExercise } from "../hooks";

export function Game() {
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const { exercise, correctAnswer, shuffledAnswers } = useEngineExercise({ level: 'easy' });

    return <>
        <div className="centerGameContainer">
            <Timer></Timer>
            <ExcerciseText exercise={ exercise }></ExcerciseText>
            {
            shuffledAnswers.map((ans) => (
                <AnswerButton
                    key={ ans }
                    text={ ans }
                    action={ () => correctAnswer === ans ? setCorrectAnswers(correctAnswers + 1) : null }
                />
            ))}
            <p className="defaultText">correct answers: { correctAnswers }</p>
        </div>
    </>
}