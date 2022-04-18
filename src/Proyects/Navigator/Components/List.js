import React from 'react';
import { NavLink,Outlet } from 'react-router-dom';

function List() {
    return (
        <div className='container-grid'>
            <div>
                <ul clas>
                    <NavLink to="/element">Element</NavLink>
                    <NavLink to="/element">Productos</NavLink>
                    <NavLink to="/element">Materias</NavLink>
                    <NavLink to="/element">Element</NavLink>
                </ul>
            </div>
            <Outlet />
        </div>
    );
}

export default List;