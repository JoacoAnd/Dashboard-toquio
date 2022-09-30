import React from 'react'
import {Link} from 'react-router-dom'; 

function SideBar() {
  return (
    <div className='div-sidebar'>
        <div className='link-sidebar strong'>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <span>Dashboard To.quio</span>
            </Link>
        </div>
        <div className='link-sidebar'>
            <Link to="/productos" style={{ textDecoration: 'none' }}>
                <span><i class="fa-solid fa-briefcase"></i> Productos</span>
            </Link>
        </div>
        <div className='link-sidebar'>
            <Link to="/categorias" style={{ textDecoration: 'none' }}>
                <span><i class="fa-solid fa-folder-open"></i> Categorias</span>
            </Link>
        </div>
        <div className='link-sidebar'>
            <Link to="/usuarios" style={{ textDecoration: 'none' }}>
                <span><i class="fa-solid fa-user"></i> Usuarios</span>
            </Link>
        </div>
    </div>
  )
}

export default SideBar