import { Link } from "react-router-dom"
import style from "../styles/Header.module.css"
import toggle from "../styles/Toggle.module.css"

const Header = ({handleClick}) => {
  const click = (e) =>{
    handleClick(e.target.checked)
  }
  return (
    <header className={style.container}>
      <h2>Logo</h2>
      <nav>
        <Link to="/pokeapi/">Inicio</Link>
        <li>item</li>
        <li>item</li>
        <li className={toggle.container}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <input type="checkbox" onClick={click}  />
          
        </li>
      </nav>
    </header>
  )
}

export default Header