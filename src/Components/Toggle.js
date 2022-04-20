import { useState } from "react"
import toggle from "../styles/Toggle.module.css"


const Toggle = ({change}) => {
    
    const [togglemove, setTogglemove] = useState("moveleft")
  
    const handleClick = (e) =>{
      const state = e.target.checked
      state ? change("dark") : change("ligth")
      state ? setTogglemove("moverigth") : setTogglemove("moveleft")
    }

    return (
    <div className={toggle.container}>
        <div className={togglemove}></div>
        <i className="fa-solid fa-sun"></i>
        <input type="checkbox" onClick={handleClick}  />
        <i className="fa-solid fa-moon"></i>
    </div>
  )
}

export default Toggle