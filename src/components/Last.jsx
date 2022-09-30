import React from 'react'

function Last(props) {
  return (
    <div className='div-last'>
        <h3>Ultimo {props.titulo}</h3>
        <p>{props.nombre}</p>
        <p>{props.otro}</p>
        <img src={props.img} alt="imagen ultimo producto creado" />
    </div>
  )
}

export default Last