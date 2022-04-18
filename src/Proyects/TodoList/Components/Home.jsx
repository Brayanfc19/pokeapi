import React from 'react';
import {NavLink} from "react-router-dom"

function Home(props) {
    return (
        <div>
            <h2>Este es la pagina inicial</h2>
            <NavLink to="/task" className="btn btn-primary">Go to chores</NavLink>
        </div>
    );
}

export default Home;