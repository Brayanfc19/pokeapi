import style from "../styles/Search.module.css"
import { useNavigate } from "react-router-dom"

const Search = () => {
    let navigate = useNavigate()
    const getApi = async(value) => {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`)
        const {name} = await resp.json()
        navigate(`/pokeapi/${name}`)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        getApi(e.target[0].value)
    }
    return (
    <form onSubmit={handleSubmit} className={style.container}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="search" placeholder="Busca" />
        <button >Buscar</button>
    </form>
  )
}

export default Search