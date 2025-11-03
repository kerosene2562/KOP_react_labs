import { useEffect, useState } from "react";
import { Button } from "..";
import { useForm } from "react-hook-form";
import "./SettingsForm.css";

export function SettingsForm()
{
    const [difficult, setGameDifficult] = useState('easy');
    const {register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = () => {
        localStorage.setItem('difficult', JSON.stringify(difficult));
    }

    useEffect(() => {
        let savedDifficult = localStorage.getItem('difficult');
        if(difficult)
        {
            setGameDifficult(JSON.parse(savedDifficult));
        }
    }, []);

    const getButtonClass = (level) => 
    {
        return difficult == level ? "selectedDifficultButton" : "difficultButton"
    }

    return <>
        <form className="settingsForm" onSubmit={ handleSubmit(onSubmit) }>
            <div className="difficultContainer">
                <Button id = {"easy"} className={ getButtonClass("easy") } type = { "submit" } text = { "easy" } action = { () => setGameDifficult("easy") } />
                <Button id = {"medium"} className={ getButtonClass("medium") } type = { "submit" } text = { "medium" } action = { () => setGameDifficult("medium") } />
                <Button id = {"hard"} className={ getButtonClass("hard") } type = { "submit" } text = { "hard" } action = { () => setGameDifficult('hard') } />
            </div>
        </form>
        
    </>
}