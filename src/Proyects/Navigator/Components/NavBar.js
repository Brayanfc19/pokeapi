import React from 'react';

function NavBar(props) {
    return (
        <div className='navBar'>
            <h3>Logo</h3>
            <ul>
                <a href='.'>Carrito</a>
                <a href='.'>Productos</a>
                <a href='.'>Acerca de</a>
            </ul>
        </div>
    );
}

export default NavBar;