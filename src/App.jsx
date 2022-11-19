import "./App.css";
import "./components/styles.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from "./components/Main";
import PokemonDetail from "./components/PokemonDetail/PokemonDetail";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route exact path="/:category" element={<PokemonDetail />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
