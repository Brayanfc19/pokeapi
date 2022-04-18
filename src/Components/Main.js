import img1 from "../img/pokebola.png"
import style from "../styles/Main.module.css"

const Main = () => {
  const handleChange = (e) => {
    const busqueda = e.target.value

    const getApi = async () =>{
      try {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${busqueda}`)
        const json = await resp.json()
        console.log(json)
      } catch (error) {
        console.log(error)
      }
    }
    getApi()
  }
  return (
    <main className={style.container}>
        <div className={style.content}>
            <h1>Encuentra a tu Pokemon</h1>
            <p>El sitio de pokemones</p>
            <div>
                <input type="search" placeholder="Busca" onChange={handleChange}/>
            </div>
        </div>
        <div className={style.contentImg}>
          <img src={img1} />
        </div>
    </main>
  )
}

export default Main