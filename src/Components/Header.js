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
        <li> <Link to="/pokeapi/">Inicio</Link></li>
        <li>item</li>
        <li>item</li>
        <li className={toggle.container}><input type="checkbox" onClick={click}  /></li>
      </nav>
    </header>
  )
}

export default Header