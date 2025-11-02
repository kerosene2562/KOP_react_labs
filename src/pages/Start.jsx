import { useEffect, useState } from "react"
import { Button } from "../components"

export function Start(){
    const [gameState, setGameState] = useState('not started');
    
    return <>
        <div className="startGameContainer">
            <Button className = { "startButton" } text = { "start" } action = { () =>  setGameState('started')} />
        </div>
    </>
}