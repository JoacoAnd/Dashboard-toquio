import React, { useEffect, useState } from 'react'
import SmallCard from './SmallCard'
import Last from './Last'
import TableUsers from './TableUsers'

function Usuarios() {

  const [usuario, setUsuario] = useState("");

  useEffect(() => {
    fetch("http://localhost:3000/api/usuarios")
      .then(res => res.json())
      .then(data => {
        setUsuario({
          total: data.meta.total,
          usuarios: data.data,
          ultimo: data.data[data.meta.total - 1]
        })
      })
      .catch(err => console.log(err))
  }, [])

  return (
    <div className='productos-div'>

      {usuario != "" &&
        <div className='divflexproductos'>
          <div className='flexcontent' style={{ flexDirection: 'column' }}>
            <SmallCard cantidad={usuario.total} titulo="Total de usuarios" color="verdeoscuro" />
            <SmallCard cantidad="User - Admin" titulo="Roles de usuario" color="amarillo" />
          </div>
          <Last titulo="usuario registrado" nombre={usuario.ultimo.userNombre} otro={usuario.ultimo.userEmail} img={usuario.ultimo.userAvatar} />
        </div>}

      {usuario != "" &&
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
              usuario.usuarios.map((user, i) => {
                return <TableUsers key={user + i} id={user.id_usuario} nombre={user.userNombre}
                  apellido={user.userApellido} email={user.userEmail} />
              })
            }
          </tbody>
        </table>
      }
    </div>
  )
}

export default Usuarios