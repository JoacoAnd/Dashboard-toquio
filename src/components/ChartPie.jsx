import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS} from 'chart.js/auto';

function ChartPie(props) {
    return (
        <div className='chart-pie-div'>
            <Pie data={props.chartdata}/>
        </div>
    )
}

export default ChartPie;