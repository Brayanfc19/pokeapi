import { Link } from "react-router-dom"
import "../styles/Error404.css"

const Error404 = () => {
  return (
    <div className='container404'>
        <h2>Error404</h2>
        <Link to="/pokeapi/" >Inicio</Link>
    </div>
  )
}

export default Error404