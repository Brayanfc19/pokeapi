import React, { useContext} from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { UserContext } from '../Context/UserProvider';

function TaskEdit(props) {
    const navigate = useNavigate()
    const {id} = useParams()
    const ide = parseInt(id)
    
    const {tasks, setTasks} = useContext(UserContext)

    const item = tasks.find( item => (item.id === ide))

    const handleSubmit = (e) => {
        e.preventDefault()
        const title = e.target[0].value
        const text = e.target[1].value
        const estado = e.target[2].checked

        setTasks( old => (old.filter(item => item.id !== ide)))
        setTasks( old => ([...old, {title, text, estado, id:ide}]))
        navigate("/list-tasks")
    }
    if(item){
        return(
            <div className="container">
                <h2>Edita la tarea</h2>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <input type="text" className="form-control mb-3"  name="title" placeholder="Titulo" defaultValue={item.title} />
                    <input type="text" className="form-control mb-2"  name="text" placeholder="Redacta la tarea" defaultValue={item.text}/>
                    <div className="mb-2 form-check">
                        <input type="checkbox" className="form-check-input" id="check" name="estado" defaultChecked={item.estado}/>
                        <label className="form-check-label" htmlFor="check">Prioridad</label>
                    </div>
                    <button className="btn btn-dark" >Actualizar</button>
                </form>
            </div>
        )
    }else return (<h2>Error 404</h2>)
}

export default TaskEdit;