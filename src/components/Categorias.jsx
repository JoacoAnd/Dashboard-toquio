import React, { useState } from 'react'
import SmallCard from './SmallCard';
import ChartPie from './ChartPie';

function Categorias() {
  const [categoryData, setCategoryData] = useState({
    labels: ["S", "M", "L", "XL", "XXL"],
    datasets: [
      {
        label: "Grafico",
        data: [1, 2, 3, 4, 5],
        backgroundColor: [
          "#86A614",
          "#F4D03F",
          "#F39C12",
          "#BEAC94",
          "#2980B9"
        ],
        borderColor: "#567317",
        borderWidth: 1
      }
    ]
  })

  return (
    <div className='categorias-div'>
      <div className='cards-categorias'>
        <SmallCard cantidad="5" titulo="S" color="verde"/>
        <SmallCard cantidad="2" titulo="M" color="amarillo"/>
        <SmallCard cantidad="3" titulo="L" color="naranja"/>
        <SmallCard cantidad="6" titulo="XL" color="beige"/>
        <SmallCard cantidad="1" titulo="XXL" color="azul"/>
      </div>
      <ChartPie chartdata= {categoryData}/>
    </div>
  )
}

export default Categorias