import { useState } from "react";

export function useRandomNumber({ level })
{
    const [number, setNumber] = useState(Math.floor(Math.random() * (level === 'easy' ? 100 : 1000)));
    return number;
}