'use client';
import {  useRef } from 'react';
import { useInView } from "framer-motion";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const textCenter = {
    id: 'textCenter',
    beforeDatasetDraw(chart, arg, pluginOptions) {
        const { ctx, data } = chart;

        ctx.save();
        ctx.font = 'bold 40px sans-serif';
        ctx.fillStyle = 'black';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        const sum = data.datasets[0].data.reduce((acc, val) => acc + val, 0);
        ctx.fillText(sum, chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
    }
}


const options = {
    responsive: true,
    plugins: {
        legend: {
            display: true,
            position: 'right',
            labels:{
                usePointStyle:true,
            }, 
        },
        title: {
            display: false,
          }
    }
}

export default function Donut({data}) {
    const ref = useRef(null)
    const isInView = useInView(ref);
        
  return (
    <div ref={ref} className='lg:w-96'>
        {isInView && 
            <Doughnut 
            data={data}
            options={options}
            plugins={[textCenter]}
            />
        }
    </div>
  )
}
