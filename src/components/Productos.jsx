import React from 'react'
import SmallCard from './SmallCard'
import Last from './Last';
import TableProducts from './TableProducts';

function Productos() {
  return (
    <div className='productos-div'>
      <div className='divflexproductos'>
        <SmallCard cantidad="18" titulo="Total de productos" />
        <Last titulo="producto creado" nombre="Zapatos" otro="Talles: L" img="https://http2.mlstatic.com/D_NQ_NP_936729-MLA45213706383_032021-W.jpg" />
      </div>
      <table className="tablaproductos">
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Talles</th>
            <th>Categoria</th>
            <th>Precio</th>
          </tr>
          <TableProducts id="1" nombre="Zapatos" talles="L, X" categoria="Hombres" precio="$2000" />
      </table>
    </div>
  )
}

export default Productos