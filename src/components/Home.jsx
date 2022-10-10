import React, {useState, useEffect} from 'react'
import SmallCard from './SmallCard';
import Last from './Last';
import ChartPie from './ChartPie';
import { Chart as ChartJS} from 'chart.js/auto';

function Home() {

  const [usuarios, setUsuarios] = useState("");
  const [productos, setProductos] = useState("");

  useEffect(()=> {
    fetch("http://localhost:3000/api/usuarios")
      .then(res => res.json())
      .then(data => {
        setUsuarios({
          total: data.meta.total,
          ultimo: data.data[data.meta.total - 1]
        })
      })
      .catch(err => console.log(err));

      fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => {
        setProductos({
          total: data.meta.total,
          ultimo: data.data[data.meta.total - 1],
          chartData: {
            labels: ["Hombres", "Mujeres", "Infantes", "Unisex"],
            datasets: [
              {
                label: "Grafico",
                data: [data.meta.totalPorCategoria[1].count, data.meta.totalPorCategoria[0].count, 
                  data.meta.totalPorCategoria[2].count, data.meta.totalPorCategoria[3].count],
                backgroundColor: [
                  "#2980B9",
                  "#BEAC94",
                  "#F4D03F",
                  "#86A614",
                ],
                borderColor: "#567317",
                borderWidth: 1
              }
            ]
          }
        })
      })
      .catch(err => console.log(err))



  }, [])

  return (
    <div className='home-div'>

      { usuarios != "" && productos != "" &&
        <div className='cards-home'>
        <SmallCard cantidad={usuarios.total} titulo="Usuarios registrados" color="verdeoscuro" />
        <SmallCard cantidad={productos.total} titulo="Total productos" color="verde" />
        <SmallCard cantidad="S, M, L, XL, XXL" titulo="Talles disponibles" color="amarillo" />
      </div>}
      { usuarios != "" && productos != "" &&
        <div className='last-chart-div'>
        <Last titulo="usuario registrado" nombre={usuarios.ultimo.userNombre} otro={usuarios.ultimo.userEmail} img={usuarios.ultimo.userAvatar} />
        <Last titulo="producto creado" nombre={productos.ultimo.nombre} otro={`$${productos.ultimo.precio}`}  img={productos.ultimo.imagen} />
        <ChartPie chartdata= {productos.chartData}/>
      </div>}
    </div>
  )
}

export default Home