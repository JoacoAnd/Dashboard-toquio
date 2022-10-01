import React from 'react'

function TableUsers(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.apellido}</td>
      <td className='emailtd'>{props.email}</td>
    </tr>
  )
}

export default TableUsers