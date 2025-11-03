import { useEffect, useState } from "react";

export function useTimer( restartKey, initialTime = 60)
{
    const [time, setTime] = useState(initialTime);
    const [isFinished, setIsFinished] = useState(false);
    useEffect(() => { 
        setTime(initialTime);
        setIsFinished(false);
        const interval = setInterval(() => { 
            setTime(prev => {
                if(prev <= 1)
                {
                    clearInterval(interval);
                    setIsFinished(true);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000); 
        return () => clearInterval(interval); 
    }, [restartKey, initialTime]);

    return {time, isFinished};
}