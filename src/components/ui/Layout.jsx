import { Header } from "..";
import { Outlet, useLocation } from "react-router"; 
import styles from "./Layout.module.css";

export const Layout = ({ children }) => {

    const location = useLocation();
    let page = location.pathname.split("/")[1];
    if(!page)
        page = "start";

    const backgroundSrc = `../src/assets/${page}.gif`;

    return(
        <div className= { styles.leyout }>
            <Header></Header>
            <div className= { styles.backgroundContainer }>
                <img className= { styles.background } src={ backgroundSrc } alt="background" />
            </div>
            <main className= { styles.mainContainer }>
                <Outlet/> { children }
            </main>
        </div>
    )
}