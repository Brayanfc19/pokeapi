
import { Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import CardPokemon from "./routes/CardPokemon"
import Home from "./routes/Home";
import Error404 from "./routes/Error404";

function App() {
  
  return (
      <Layout>
            <Routes >
              <Route path="/*" element={<Error404 />} />
              <Route path="/pokeapi" element={<Home />} />
              <Route path="/pokeapi/:nombre/" element={<CardPokemon />} />
              <Route path="/pokeapi/*" element={<Error404 />} />
            </Routes>
      </Layout>
  );
}

export default App;
