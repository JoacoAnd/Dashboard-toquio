import React, { useState, useEffect } from 'react'
import SmallCard from './SmallCard'
import Last from './Last';
import TableProducts from './TableProducts';

function Productos() {

  const [producto, setProducto] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => {
        setProducto({
          total: data.meta.total,
          productos: data.data,
          ultimo: data.data[data.meta.total - 1]
        })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='productos-div'>
      
      { producto != "" &&
        <div className='divflexproductos'>
        <div className='flexcontent' style={{ flexDirection: 'column' }}>
          <SmallCard cantidad={producto.total} titulo="Total de productos" color="verde" />
          <SmallCard cantidad="S, M, L, XL, XXL" titulo="Talles disponibles" color="amarillo" />
        </div>
        <Last titulo="producto creado" nombre={producto.ultimo.nombre} otro={`$${producto.ultimo.precio}`} img={producto.ultimo.imagen} />
      </div>
      }
      {producto != "" &&
        <table className="tablaproductos">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Talles</th>
            <th>Categoria</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {
            producto.productos.map((product, i) => {
              let talles = [];
              product.talles.map(t => {
                  return talles.push(t.talle)
              })
              return <TableProducts key={product + i} id={product.id_producto} nombre={product.nombre} 
                talles={talles.join(", ")} categoria={product.categoria.categoria} precio={product.precio} />
            })
          }
        </tbody>
      </table>}
    </div>
  )
}

export default Productos