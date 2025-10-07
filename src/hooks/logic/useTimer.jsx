import { useEffect, useState } from "react";

export function useTimer(initialTime = 60)
{
    const [time, setTime] = useState(initialTime);
    useEffect(() => { 
        const interval = setInterval(() => { 
            setTime(prev => (prev - 1 < 0 ? prev : prev - 1)) 
        }, 1000); 
        return () => clearInterval(interval); 
    }, []);

    return time;
}