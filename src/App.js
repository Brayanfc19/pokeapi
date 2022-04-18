
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Components/Layout";
import CardPokemon from "./Components/CardPokemon"
import Home from "./routes/Home";
import UserProvider from "./context/UserProvider.jsx"


function App() {
  
  return (
      <Layout>
        <UserProvider>
          <BrowserRouter>
            <Routes >
              <Route path="/" element={<Home />} />
              <Route path="/:nombre" element={<CardPokemon />} />
              <Route path="/*" element={<h2>404</h2>} />
            </Routes>
          </BrowserRouter>
        </UserProvider>
      </Layout>
  );
}

export default App;
