import { useState } from "react"
import { StartButton } from "../components"

export function Start(){
    const [gameState, setGameState] = useState('not started')
    return <>
        <div className="startGameContainer">
            <p className="defaultText">game state: {gameState} </p>
            <StartButton onClick = { () =>  setGameState('started')} />
        </div>
        
    </>
}