export function Result({ user }){
    return <>
        <div className="resBox">
            <p className="defaultText">last game correct answers: { user.lastCorrectAnswers }</p>
            <p className="defaultText">total correct answers: { user.correctAnswers }</p>
            <p className="defaultText">games: { user.games }</p>
            <p className="defaultText">correct answers percentage: { user.correctAnswersPercentage }%</p>
        </div>
    </>
}