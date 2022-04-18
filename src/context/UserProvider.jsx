import { useState, createContext } from "react";

export const UserContext = createContext()

const UserProvider = ({children}) => {
    const [pokemons, setPokemons] = useState([])

    return (
        <UserContext.Provider value={{pokemons, setPokemons}}>
            {children}
        </UserContext.Provider>
    )
}
export default UserProvider;