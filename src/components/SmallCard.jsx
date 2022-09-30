import React from 'react'

function SmallCard(props) {
  return (
    <div className='smallcard-div'>
        <h4>{props.titulo}</h4>
        <p>{props.cantidad}</p>
    </div>
  )
}

export default SmallCard