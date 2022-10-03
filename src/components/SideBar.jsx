import React from 'react';
import { Link, useRouteMatch, useLocation } from 'react-router-dom';

function SideBar() {
    const to = useLocation();
    
    return (
        <div className='div-sidebar'>
            <div className='link-sidebar strong'>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <span className={to.pathname == "/" ? "active" : ""}>Dashboard To.quio</span>
                </Link>
            </div>
            <div className='link-sidebar'>
                <Link to="/productos" style={{ textDecoration: 'none' }}>
                    <span className={to.pathname == "/productos" ? "active" : ""}><i className="fa-solid fa-briefcase"></i> Productos</span>
                </Link>
            </div>
            <div className='link-sidebar'>
                <Link to="/categorias" style={{ textDecoration: 'none' }}>
                    <span className={to.pathname == "/categorias" ? "active" : ""}><i className="fa-solid fa-folder-open"></i> Categorias</span>
                </Link>
            </div>
            <div className='link-sidebar'>
                <Link to="/usuarios" style={{ textDecoration: 'none' }}>
                    <span className={to.pathname == "/usuarios" ? "active" : ""}><i className="fa-solid fa-user"></i> Usuarios</span>
                </Link>
            </div>
        </div>
    )
}

export default SideBar