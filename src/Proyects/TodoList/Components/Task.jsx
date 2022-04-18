import { useContext, useState } from "react"
import { NavLink } from "react-router-dom"
import { UserContext } from "../Context/UserProvider"
function Task(props) {
    const {setTasks} = useContext(UserContext)
    const tarea = {
        title:"",
        text:"",
        estado:"",
        id:""
    }
    const [task, setTask] = useState(tarea)
    const [warning, setWarning] = useState("")
    
    const handleSubmit = (e) => {
        e.preventDefault()
        if(!task.title.trim()){
            e.target[0].value = ""
            e.target[0].focus()
            setWarning("No deje el titulo incompleto")
            return
        }
        else if(!task.text.trim()){
            e.target[1].focus()
            e.target[1].value = ""
            setWarning("No deje el texto incompleto")
            return
        }
        else if(!task.text.trim() && !task.title.trim()){
            e.target[0].value = ""
            e.target[1].value = ""
            e.target[2].checked = false
            e.target[1].focus()
            setWarning("No deje el texto incompleto exitosamente")
            return
        }
        setWarning("Se agrego la tarea")
        setTasks(old => ([...old, task]))
        e.target[0].value = ""
        e.target[1].value = ""
        e.target[2].checked = false
    }
    const handleChange = (e) => {
        const {value, name, type, checked} = e.target
        setTask(old => ({...old,
            [name]: type === "checkbox" ? checked : value
        }))
    }
    return (
        <div className="container">
            <h2>Ingresa una tarea</h2>
            <form autoComplete="off" onSubmit={handleSubmit}>
                <input type="text" className="form-control mb-3" onChange={handleChange} placeholder="Titulo" name="title" />
                <input type="text" className="form-control mb-2" onChange={handleChange} name="text" placeholder="Redacta la tarea"/>
                <div className="mb-2 form-check">
                    <input type="checkbox" className="form-check-input" id="check" onChange={handleChange} name="estado"/>
                    <label className="form-check-label" htmlFor="check">Prioridad</label>
                </div>
                <button className="btn btn-dark">Enviar</button> <NavLink to="/list-tasks" className="btn btn-danger mx-3">Ver lista</NavLink>
                <div className="form-text">{warning}</div>
            </form>
            <NavLink to="/" className="btn btn-primary my-4">Ir a inicio</NavLink>
        </div>
    );
}

export default Task;