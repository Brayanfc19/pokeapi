import { useEffect, useState } from "react"
import style from "../styles/List.module.css"
import { Link } from "react-router-dom";
import gsap from "gsap"

const List = () => {
  const [pokemons, setPokemons] = useState([])

  useEffect( async () => {
    
    try {
      function random(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
      }
      for (let index = 1; index <= 20; index++) {
        const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${random(1,649)}`)
        const json = await resp.json()
        const {name, base_experience, id, height, weight, sprites} = json
        const pokemonObjet = {
          nombre:name, 
          experiencia:base_experience, 
          id:id, 
          alto:height, 
          ancho:weight, 
          imagen:sprites.other.dream_world.front_default
        }
        setPokemons(old => ([...old, pokemonObjet]))
        gsap.set("#efect1",{opacity:0})
      } 
      gsap.set("#efect1",{opacity:0, y:500,})
      gsap.to("#efect1",{
          opacity:1, 
          y:0, 
          ease:"bounce", 
          stagger:"0.2",
      })
    }

    catch (error) {
      console.log(error)
    }
    },[])

  return (
    <section className={style.container}>
        <h1>Pokemones</h1>
        <div className={style.contentCards}>
          {
            pokemons.map( ({nombre, imagen, id}) => (
                <Link  to={`/${nombre}`} key={id} className={style.card} id="efect1">
                  <h3>{nombre}</h3>
                  <img src={imagen} />
                  <button>Detalles</button>
                </Link>
            ))
          }
        </div>
    </section>
  )
}

export default List