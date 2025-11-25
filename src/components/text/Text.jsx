import styles from "./Text.module.css";

export function Text({ text, className })
{
    return <>
        <p className= { styles[className] } >{ text }</p>
    </>
}
