export function AnswerButton({ text, action })
{
    return <button className="answerButton" onClick={ action }>{ text }</button>
}