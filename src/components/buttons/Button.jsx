import "./Button.css";

export function Button({ id, text, action, className, type })
{
    return <button id={ id } className={ className } onClick={ action } type={ type }>{ text }</button>
}