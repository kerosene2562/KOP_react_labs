import { useEffect, useState } from "react";

export function Timer()
{
    const [time, setTime] = useState(60);
    useEffect(() => { 
        const interval = setInterval(() => { 
            setTime(prev => (prev - 1 < 0 ? prev : prev - 1)) 
        }, 1000); 
        return () => clearInterval(interval); 
    }, []);
    return <>
        <p className="defaultText">timer: {time}s</p>
    </>
}
