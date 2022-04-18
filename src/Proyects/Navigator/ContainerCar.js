
import { BrowserRouter, Route, Routes } from "react-router-dom";
import List from "./Components/List";
import NavBar from "./Components/NavBar";
import "./ContainerCar.css"

function ContainerCar() {
  return (
    <div className="container-car">
      <NavBar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />}>
            <Route path="element" element={<h2>Elemento</h2>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default ContainerCar;
