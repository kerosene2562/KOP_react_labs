import { Game, Result, Start } from "./pages";
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router";
import { Layout, CookiePopup } from "./components";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout></Layout>}>
        <Route path="/start" element={<Start />} />
        <Route path="/game/:userId" element={<Game />} />
        <Route path="/results/:userId" element={<Result />} />
      </Route>
    )
  )

  return (
    <>
      <CookiePopup />
      <RouterProvider router={router} />
    </>
  );
}

export default App;