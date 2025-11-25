import { Button } from "../buttons/Button"
import styles from "./GameResults.module.css"


export function GameResults({ correctAnswers, onRestart, onDifficulty, onResults, totalTasks})
{
    return <>
            <div className={ styles.retultsContainer }>
                <div className= { styles.gameStats }>
                    <p className="defaultText">total correct answers: { correctAnswers }</p>
                    <p className="defaultText">total tasks: { totalTasks }</p>
                    <p className="defaultText">correct answers percentage: { totalTasks != 0 ? ( correctAnswers / totalTasks * 100 ).toFixed(2) : 0 }%</p>
                </div>
                <div className={ styles.restartButtonContainer }>
                    <Button className="restartButton" action = { onRestart } text ={ "Restart" } />
                    <Button className="restartButton" action = { onDifficulty } text ={ "Difficulty" } />
                    <Button className="restartButton" action = { onResults } text ={ "Results" } />
                </div>
            </div>
    </>
}