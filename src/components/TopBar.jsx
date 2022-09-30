import React from 'react'
import logo from '../assets/images/logotoquio.png';

function TopBar() {
  return (
    <div className='div-topbar'>
        <img src={logo} alt="logo toquio" />
        <h1>Dashboard</h1>
    </div>
  )
}

export default TopBar