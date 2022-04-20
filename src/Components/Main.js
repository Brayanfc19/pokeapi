
import img1 from "../img/pokebola.png"
import style from "../styles/Main.module.css"
import Search from "./Search"

const Main = () => {

  return (
    <main className={style.container}>
        <div className={style.content}>
            <h1>Encuentra a tu Pokemon</h1>
            <p>El sitio de pokemones</p>
            <Search />
        </div>
        <div className={style.contentImg}>
          <img src={img1} alt="pokemon"/>
        </div>
    </main>
  )
}

export default Main