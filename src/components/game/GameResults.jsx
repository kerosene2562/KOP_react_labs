import { Button } from "../buttons/Button"
import "./GameResults.css"


export function GameResults({ correctAnswers, onRestart, totalTasks})
{
    return <>
        <div className="retultsContainer">
            <div className="gameStats">
                <p className="defaultText">total correct answers: { correctAnswers }</p>
                <p className="defaultText">total tasks: { totalTasks }</p>
                <p className="defaultText">correct answers percentage: { totalTasks != 0 ? ( correctAnswers / totalTasks * 100 ).toFixed(2) : 0 }%</p>
            </div>
            <div className="restartButtonContainer">
                <Button className="restartButton" action = { onRestart } text ={ "restart" } />
            </div>
        </div>
    </>
}