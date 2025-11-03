import { useEffect } from "react";
import { useTimer } from "../../hooks";

export function Timer({ restartKey, initialTime, onFinish })
{
    const { time, isFinished } = useTimer(restartKey, initialTime);

    useEffect(() => {
        if(isFinished)
            onFinish();
    }, [isFinished]);

    return <>
        <p className="defaultText">timer: {time}s</p>
    </>
}
