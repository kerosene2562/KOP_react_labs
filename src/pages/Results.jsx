import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import styles from "./Results.module.css";
import { useSelector } from "react-redux";
import { CONSENT_EVENT, hasConsent } from "../utils";

export function Result(){
    const navigate = useNavigate();
    const { userId } = useParams();
    const storedId = localStorage.getItem("uuid");
    const gameStats = useSelector( state => state.results );
    const [statisticsAllowed, setStatisticsAllowed] = useState(hasConsent("statistics"));
    const percentage = gameStats.totalTasks > 0 ? 
        (gameStats.correctAnswers / gameStats.totalTasks * 100).toFixed(2) : 
        0;

    useEffect(() => {
        if(!userId || storedId != userId)
            navigate("/start");
    }, [navigate, storedId, userId]);

    useEffect(() => {
        const syncConsent = () => setStatisticsAllowed(hasConsent("statistics"));
        window.addEventListener(CONSENT_EVENT, syncConsent);

        return () => window.removeEventListener(CONSENT_EVENT, syncConsent);
    }, []);

    return <>
        <div className= { styles.resBox }>
            {!statisticsAllowed && (
                <p className="defaultText">
                    Statistics cookies are disabled, so these results are available only until the page is refreshed.
                </p>
            )}
            <p className="defaultText">last game correct answers: { gameStats.lastGameCorrectAnswers }</p>
            <p className="defaultText">total correct answers: { gameStats.correctAnswers }</p>
            <p className="defaultText">games: { gameStats.totalGames }</p>
            <p className="defaultText">correct answers percentage: { percentage }%</p>
        </div>
    </>
}
