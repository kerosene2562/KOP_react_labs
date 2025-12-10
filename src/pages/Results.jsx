import { useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./Results.module.css";
import { useSelector } from "react-redux";

export function Result(){
    const navigate = useNavigate();
    const { userId } = useParams();
    const storedId = localStorage.getItem("uuid");
    const gameStats = useSelector( state => state.results );
    const percentage = gameStats.totalTasks > 0 ? 
        (gameStats.correctAnswers / gameStats.totalTasks * 100).toFixed(2) : 
        0;

    useEffect(() => {
        if(!userId || storedId != userId)
            navigate("/start");
    }, []);

    return <>
        <div className= { styles.resBox }>
            <p className="defaultText">last game correct answers: { gameStats.lastGameCorrectAnswers }</p>
            <p className="defaultText">total correct answers: { gameStats.correctAnswers }</p>
            <p className="defaultText">games: { gameStats.totalGames }</p>
            <p className="defaultText">correct answers percentage: { percentage }%</p>
        </div>
    </>
}