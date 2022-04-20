import {  useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import style from "../styles/Card.module.css"
import Spinner from "../Components/Spinner"
import gsap from "gsap"
import Error404 from "./Error404"

const CardPokemon = () => {
  const {nombre} = useParams()

  const [pokemon, setPokemon] = useState({})
  const [peticion, setPeticion] = useState(true)
  const [load, setLoad] = useState(true)
  
  useEffect( async () => {
    try {
      const resp2 = await fetch(`https://pokeapi.co/api/v2/pokemon/${nombre}`)
      const info = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${nombre}`)
      
      setPeticion(true)
      if(resp2.ok) {
        const {height, weight, sprites, name, id, base_experience} = await resp2.json()
        const {flavor_text_entries} = await info.json() 

        const pokemonObjet = {
          nombre:name, 
          experiencia:base_experience, 
          id:id, 
          alto:height, 
          ancho:weight,
          imagen:sprites.other.dream_world.front_default,
          text: flavor_text_entries[0].flavor_text
        }
        setPokemon(pokemonObjet)
        setLoad(false)
        gsap.set("#efect1",{opacity:0, y:500,})
        gsap.to("#efect1",{
            opacity:1, 
            y:0, 
            ease:"bounce", 
            stagger:"0.2",
        })
      }
      else {
        setPeticion(false)
        setLoad(false)
      }
    } 
    catch(error) {console.log(error)}
  },[])


  if(peticion){
    return (
      <div className={style.container} >
        {
          load ? <Spinner /> :(
            <div className={style.card}  id="efect1" >
                <h2>{pokemon.nombre}</h2>
                <img src={pokemon.imagen} />
                <p> {pokemon.text} </p>
                <div>
                  <p>ID: N° {pokemon.id}</p>
                  <p>Alto: {pokemon.alto}m</p>
                  <p>Peso: {pokemon.ancho}kg</p>
                  <p>Exp: {pokemon.experiencia}</p>
                </div>
            </div>
          )
        }
        <Link to={"/pokeapi/"} >Inicio</Link>
      </div>
    )
  }
  else{
    return(
      <Error404 />
    )
  }
}

export default CardPokemon