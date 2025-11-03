import { useEffect, useState } from "react"
import { Button, SettingsForm, Portal } from "../components"

export function Start(){
    const [gameState, setGameState] = useState('not started');
    const [showSettings, setShowSettings] =useState(false);
    
    return <>
        <div className="startGameContainer">
            <Button className = { "startButton" } text = { "start" } action = { () =>  setGameState('started') } />
            <Button className={ "settingsButton" } text = { "налаштування" } action = {() => setShowSettings(true) } />
            <Portal isOpen = { showSettings } onClose = { () => setShowSettings(false) } headerText = { "оберіть складність" }>
                <SettingsForm/>
            </Portal>
        </div>
    </>
}