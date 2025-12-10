import { useState } from "react"
import { Button, SettingsForm, Portal } from "../components"
import { useNavigate } from "react-router";
import { getUuid } from "../utils";
import styles from "./Start.module.css";

export function Start(){
    const [showSettings, setShowSettings] = useState(false);
    const navigate = useNavigate();

    let uuid = getUuid();
    
    return <>
        <div className={ styles.startGameContainer }>
            <Button className = { "startButton" } text = { "start" } action = { () =>  navigate(`/game/${uuid}`) } />
            <Button className={ "settingsButton" } text = { "налаштування" } action = {() => setShowSettings(true) } />
            <Portal isOpen = { showSettings } onClose = { () => setShowSettings(false) } headerText = { "оберіть складність" }>
                <SettingsForm/>
            </Portal>
        </div>
    </>
}