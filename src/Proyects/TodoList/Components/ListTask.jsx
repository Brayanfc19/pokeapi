import { useContext } from "react";
import { Link} from "react-router-dom";
import { UserContext } from "../Context/UserProvider";

function ListTask(props) {
    const {tasks, setTasks} = useContext(UserContext)
    const eliminar = (id) => {
        setTasks( old => (old.filter(item => item.id !== id)))
    }
    return (
        <div >
            <h2>Lista de tareas</h2>
            <p>{tasks == "" && "Agrega una tarea"}</p>
            <div>
                {
                    tasks.map((item,indice) => (
                        <div key={item.id = indice} className="card p-5 m-5">
                            <h3>{item.title}</h3>
                            <h6>{item.estado? "Prioritario": "No prioritario"}</h6>
                            <p className="my-1">{item.text}</p>
                            <button className="btn btn-danger" onClick={() => eliminar(item.id)}>Eliminar</button>
                            <Link to={`/list-tasks/${indice}`} className="btn btn-dark my-2">Editar</Link>
                        </div>
                        
                    ))
                    
                }
            </div>
                <Link to="/task" className="btn btn-primary my-3">Crear tarea</Link><br/>
                <Link to="/" className="btn btn-primary my-1">Ir a inicio</Link>
        </div>
    );
}

export default ListTask;