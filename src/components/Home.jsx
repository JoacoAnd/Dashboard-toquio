import React, {useState} from 'react'
import SmallCard from './SmallCard';
import Last from './Last';
import ChartPie from './ChartPie';
import { Chart as ChartJS} from 'chart.js/auto';

function Home() {
  const [categoryData] = useState({
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
    <div className='home-div'>
      <div className='cards-home'>
        <SmallCard cantidad="5" titulo="Usuarios registrados" color="verdeoscuro" />
        <SmallCard cantidad="3" titulo="Total productos" color="verde" />
        <SmallCard cantidad="S, M, L, XL, XXL" titulo="Talles disponibles" color="amarillo" />
      </div>
      <div className='last-chart-div'>
        <Last titulo="usuario registrado" nombre="Lionel Messi" otro="lionelmessi@gmail.com" img="https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt40015891deaa4019/6265b5649084154bb3b408c0/Lionel_Messi.jpg?auto=webp&fit=crop&format=jpg&height=800&quality=60&width=1200" />
        <Last titulo="producto creado" nombre="Zapatos" otro="Talles: L" img="https://http2.mlstatic.com/D_NQ_NP_936729-MLA45213706383_032021-W.jpg" />
        <ChartPie chartdata= {categoryData}/>
      </div>
    </div>
  )
}

export default Home