
import tram from '@/public/icon/tram.svg';
import trollyebus from '@/public/icon/trollyebus.svg';
import Image from 'next/image';
import { montserrat } from '../fonts';
import Donut from '@/app/ui/tables/doughnutCopy';

export default function ChartBlock() {
    const data = {
        labels: ['КТМ-5', 'КТМ-8', 'Т-3М', 'Т-3М.03                ', 'К-1'],
        datasets: [
          {
            label: 'Кількість',
            data: [22, 5, 3, 12, 6],
            backgroundColor: [
              '#008DD2',
              '#FECD08',
              '#FFE372',
              '#E871C5',
              '#FF9EE3',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 0,
          },
        ],
      };


    const dataTr = {
        labels: ['ЗІУ-9', 'ПМЗ Т-2', 'ЛАЗ 52522', 'ЛАЗ Е183', 'МАЗ ЕНОТ Т10300', 'SCODA 14 ТR', 'ДНІПРО Т203', 'PTS T-12309'],
        datasets: [
          {
            label: 'Кількість',
            data: [5, 5, 2, 5, 5, 26, 37, 5],
            backgroundColor: [
              '#008DD2',
              '#89C4E1',
              '#32363C',
              '#8A8C8E',
              '#FECD08',
              '#FFE372',
              '#E871C5',
              '#FF9EE3',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 0,
          },
        ],
      };

    return(
        <div className={`${montserrat.className} text-black uppercase w-5/6 flex`}>
            <div className='grid grid-cols-1 lg:grid-cols-2 text-xs lg:text-base gap-5 pb-0 justify-center items-center '>
                    <div className='flex gap-5 '>
                        <Image src={tram} alt='tram' width={180}/>
                        <div className='flex flex-col gap-5 justify-center'>
                            <h1 className='text-base font-black'>Загальна кількість трамваїв</h1>
                        </div>
                    </div>
                    <div className=' col-span-1'><Donut data={data}/></div>
                    <div className='flex gap-5 '>
                        <Image src={trollyebus} alt='trollyebus' width={180}/>
                        <div className='flex flex-col gap-5 justify-center'>
                            <h1 className='text-base font-black'>Загальна кількість тролейбусів</h1>
                        </div>
                    </div>
                    <div className=' col-span-1'><Donut data={dataTr}/></div>
            </div>
          
        </div>
    )
}