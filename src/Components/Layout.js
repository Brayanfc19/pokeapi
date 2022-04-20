import Header from "./Header"
import Footer from "./Footer"
import { useState } from "react"

const Layout = ({children}) => {
  const [theme, setTheme] = useState("ligth")

  const handleClick = (state) =>{
    state ? setTheme("dark") : setTheme("ligth")
  }
  return (
    <div className={theme}>
        < Header handleClick={handleClick} />

        {children}

        < Footer />
    </div>
  )
}

export default Layout