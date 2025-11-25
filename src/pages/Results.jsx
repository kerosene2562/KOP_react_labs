import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "../styles/index.module.css";

export function Result(){
    const navigate = useNavigate();
    const { userId } = useParams();
    const storedId = localStorage.getItem("uuid");
    useEffect(() => {
        if(!userId || storedId != userId)
            navigate("/start");
    }, []);

    const gameStats = JSON.parse(localStorage.getItem(`${userId}_gameSave`)) || {};

    return <>
        <div className= { styles.resBox }>
            <p className="defaultText">last game correct answers: { gameStats.lastGameCorrectAnswers }</p>
            <p className="defaultText">total correct answers: { gameStats.correctAnswers }</p>
            <p className="defaultText">games: { gameStats.totalGames }</p>
            <p className="defaultText">correct answers percentage: { (gameStats.correctAnswers / gameStats.totalTasks * 100).toFixed(2) }%</p>
        </div>
    </>
}