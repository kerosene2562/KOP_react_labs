import { Game } from "./pages/Game.jsx";
import { Result } from "./pages/Results.jsx";
import { getUserStats, updateUserStats } from "./modules/User.jsx"
import { Start } from "./pages/Start.jsx";
import { useState } from "react";

function App() {
  const [currantPage, setCurrentPage] = useState('result');

  return(
    <>
      {currantPage == "start" ? <Start /> : null}
      {currantPage == "game" ? <Game /> : null}
      {currantPage == "result" ? <Result user={ getUserStats() } /> : null}
    </>
  );
}

export default App;
