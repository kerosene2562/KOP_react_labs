import { useState } from "react"
import { AnswerButton, ExcerciseText, Timer } from "../components";

export function Game(){
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [timer, setTimer] = useState(60);
    const [exercise, setExercise] = useState('71 + 13 =');

    const answers = [
        { text: "84", isCorrect: true },
        { text: "73", isCorrect: false },
        { text: "98", isCorrect: false },
        { text: "54", isCorrect: false }
    ];

    return <>
        <div className="centerGameContainer">
            <Timer></Timer>
            <ExcerciseText></ExcerciseText>
            {
            answers.map((ans) => (
                <AnswerButton
                    key={ans.text}
                    text={ans.text}
                    action={() => ans.isCorrect ? setCorrectAnswers(correctAnswers + 1) : null}
                />
            ))}
            <p className="defaultText">correct answers: { correctAnswers }</p>
        </div>
    </>
}