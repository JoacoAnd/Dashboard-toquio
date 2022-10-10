import React, { useState, useEffect } from 'react'
import SmallCard from './SmallCard';
import ChartPie from './ChartPie';

function Categorias() {
  const [categorias, setCategorias] = useState("");
  useEffect(() => {
    fetch("http://localhost:3000/api/products")
      .then(res => res.json())
      .then(data => {
        setCategorias({
          mujeres: data.meta.totalPorCategoria[0].count,
          hombres: data.meta.totalPorCategoria[1].count,
          infantes: data.meta.totalPorCategoria[2].count,
          unisex: data.meta.totalPorCategoria[3].count,
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
    <div className='categorias-div'>
      {categorias != "" &&
        <div className='cards-categorias'>
          <SmallCard cantidad={categorias.hombres} titulo="Hombres" color="azul" />
          <SmallCard cantidad={categorias.mujeres} titulo="Mujeres" color="beige" />
          <SmallCard cantidad={categorias.infantes} titulo="Infantes" color="amarillo" />
          <SmallCard cantidad={categorias.unisex} titulo="Unisex" color="verde" />
        </div>
      }
      {categorias != "" &&
        <ChartPie chartdata={categorias.chartData} />
      }
    </div>
  )
}

export default Categorias