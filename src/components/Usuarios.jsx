import React from 'react'
import SmallCard from './SmallCard'
import Last from './Last'
import TableUsers from './TableUsers'

function Usuarios() {

  let users = [
    {
      id: "1",
      nombre: "Lionel",
      apellido: "Messi",
      email: "lionelmessi@gmail.com"
    },
    {
      id: "2",
      nombre: "Mauricio",
      apellido: "Macri",
      email: "mauriciomacri@hotmail.com"
    },
    {
      id: "3",
      nombre: "Enrique",
      apellido: "Carranza",
      email: "kike@dh.com"
    },
    {
      id: "4",
      nombre: "Nik",
      apellido: "Gaturro",
      email: "nik@gaturro.com"
    },
  ]

  return (
    <div className='productos-div'>
      <div className='divflexproductos'>
        <div className='flexcontent' style={{ flexDirection: 'column' }}>
          <SmallCard cantidad="5" titulo="Total de usuarios" color="verdeoscuro" />
          <SmallCard cantidad="0" titulo="Usuarios borrados" color="amarillo" />
        </div>
        <Last titulo="usuario registrado" nombre="Lionel Messi" otro="lionelmessi@gmail.com" img="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200" />
      </div>
      <table className="tablausuarios">
        <thead>
          <tr>
            <th>Id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user, i) => {
              return <TableUsers key={user + i} id={user.id} nombre={user.nombre}
                apellido={user.apellido} email={user.email} />
            })
          }
        </tbody>
      </table>
    </div>
  )
}

export default Usuarios