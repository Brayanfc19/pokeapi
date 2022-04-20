
import {  BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import Toggle from "./Components/Toggle";
import Footer from "./Components/Footer"
import Home from "./routes/Home";
import CardPokemon from "./routes/CardPokemon"
import Error404 from "./routes/Error404";
import style from "./styles/Header.module.css"
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("ligth")

  const change = (tema) =>{
    setTheme(tema)
  }
  return (
      <BrowserRouter >
        <div className={theme}>
          <header className={style.container}>
              <h2>Logo</h2>
              <nav>
                <NavLink to="/pokeapi/">Inicio</NavLink>
                <NavLink to="/pokeapi/">Inicio</NavLink>
                <Toggle change={change}/>
              </nav>
          </header>

            <Routes >
              <Route path="/pokeapi" element={<Home />} />
              <Route path="/pokeapi/:nombre/" element={<CardPokemon />} />
              <Route path="/*" element={<Error404 />} />
              <Route path="/pokeapi/*" element={<Error404 />} />
            </Routes>

            < Footer />
        </div>
      </BrowserRouter>
  );
}

export default App;
