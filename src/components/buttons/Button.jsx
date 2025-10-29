export function Button({ text, action, className })
{
    return <button className={ className } onClick={ action }>{ text }</button>
}