
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import CardPokemon from "./Components/CardPokemon"
import Home from "./routes/Home";

function App() {
  
  return (
      <Layout>
          <BrowserRouter>
            <Routes >
              <Route path="/pokeapi" element={<Home />} />
              <Route path="/pokeapi/:nombre" element={<CardPokemon />} />
              <Route path="/pokeapi/*" element={<h2>404</h2>} />
              <Route path="/*" element={<h2>404</h2>} />
            </Routes>
          </BrowserRouter>
      </Layout>
  );
}

export default App;
