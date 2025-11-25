import { useNavigate } from "react-router"
import styles from "./Header.module.css"
import { Button } from "../buttons/Button";
import { getUuid } from "../../utils";

export function Header()
{
    const navigate = useNavigate();
    const uuid = getUuid();
    return <>
        <div className={ styles.header }>
            <div className={ styles.nameContainer }>
                <p className={ styles.name }>Mathbro</p>
            </div>

            <div className= { styles.userPanel }>
                <Button className="headerButton" action={ () => navigate(`/game/${uuid}`)} text="Game"></Button>
                <Button className="headerButton" action={ () => navigate(`/results/${uuid}`)} text="Results"></Button>
            </div>
        </div>
    </>
}