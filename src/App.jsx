import { Game, Result, Start, Settings  } from "./pages";
import { getUserStats } from "./modules/User.jsx"
import { useState } from "react";

function App() {
  const [currantPage, setCurrentPage] = useState('settings');

  return(
    <>
      {currantPage == "start" ? <Start /> : null}
      {currantPage == "game" ? <Game /> : null}
      {currantPage == "settings" ? <Settings /> : null}
      {currantPage == "result" ? <Result user={ getUserStats() } /> : null}
    </>
  );
}

export default App;
