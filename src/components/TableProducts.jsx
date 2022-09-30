import React from 'react'

function TableProducts(props) {
  return (
    <tr>
      <td>{props.id}</td>
      <td>{props.nombre}</td>
      <td>{props.talles}</td>
      <td>{props.categoria}</td>
      <td>{props.precio}</td>
    </tr>
  )
}

export default TableProducts