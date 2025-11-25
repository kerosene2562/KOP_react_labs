import style from "./Button.module.css";

export function Button({ id, text, action, className, type })
{
    return <button id={ id } className={ style[className] } onClick={ action } type={ type }>{ text }</button>
}