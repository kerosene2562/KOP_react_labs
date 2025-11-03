import "./Text.css";

export function Text({ text, className })
{
    return <>
        <p className= { className } >{ text }</p>
    </>
}
