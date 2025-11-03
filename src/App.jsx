import { Game, Result, Start  } from "./pages";
import { getUserStats } from "./modules/User.jsx"
import { useState } from "react";

function App() {
  const [currantPage, setCurrentPage] = useState('game');

  return(
    <>
      {currantPage == "start" ? <Start /> : null}
      {currantPage == "game" ? <Game /> : null}
      {currantPage == "result" ? <Result user={ getUserStats() } /> : null}
    </>
  );
}

export default App;