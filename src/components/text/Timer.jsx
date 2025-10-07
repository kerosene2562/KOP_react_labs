import { useTimer } from "../../hooks";

export function Timer()
{
    const time = useTimer();
    return <>
        <p className="defaultText">timer: {time}s</p>
    </>
}
