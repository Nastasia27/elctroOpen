

import Image from 'next/image';
import BlackTitle from '@/app/ui/title/BlackTitle';
import SubTitle from '@/app/ui/title/SubTitle';
import k1 from '@/public/rollingStock/K1.jpeg';
import t3m03 from '@/public/rollingStock/T-3M.jpeg';
import t3m from '@/public/rollingStock/T3M.jpeg';
import ktm5 from '@/public/rollingStock/KTM-5.jpeg';
import ktm8 from '@/public/rollingStock/KTM-8.jpeg';
import scoda from '@/public/rollingStock/SCODA-14TR.jpeg';
import maz from '@/public/rollingStock/MAZ-ETON.jpeg';
import ziu from '@/public/rollingStock/ZIU9.jpeg';
import pmz from '@/public/rollingStock/PMZ-T2.jpeg';
import laz from '@/public/rollingStock/LAZ-E183.jpeg';
import laz5852 from '@/public/rollingStock/LAZ5252.jpeg';
import dnipro from '@/public/rollingStock/DNIPRO-T203PO.jpeg';
import pts from '@/public/rollingStock/photo_2024-07-16_09-43-35.jpg';
import Card from '../../../ui/cards/Card';
import NumberAnimation from '../../../ui/mainanimation/numberAnimation';
import Table from '../../../ui/tables/table';
import TableLg from '../../../ui/tables/tableLg';
import ChartBlock from '@/app/ui/tables/chartBlock';
import Link from 'next/link';

export const metadata = {
    title: 'Про рухомий склад на КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Кількість та технічні характеристики трамваїв та тролейбусів на МИКОЛАЇВЕЛЕКТРОТРАНС',
  }

export default function RollingStock() {
    const stockItems = [
        {image:k1, name:'K-1', description:'Прийнято в експлуатацію - 2006 р.'},
        {image:t3m03, name:'Т-3М.03', description:'Прийнято в експлуатацію - 2015 р.'},
        {image:t3m, name:'Т-3М', description:'Прийнято в експлуатацію - 2000 р.'},
        {image:ktm5, name:'КТM-5', description:'Прийнято в експлуатацію - 1982 р.'},
        {image:ktm8, name:'КТM-8', description:'Прийнято в експлуатацію - 1995 р.'},
        {image:scoda, name:'Skoda 14tr', description:'Прийнято в експлуатацію - 2015 р.'},
        {image:maz, name:'МАЗ-ЕТОн Т10300', description:'Прийнято в експлуатацію - 2012 р.'},
        {image:ziu, name:'Зіу-9', description:'Прийнято в експлуатацію - 1989 р.'},

        {image:pmz, name:'ПМЗ Т-2', description:'Прийнято в експлуатацію - 2002 р.'},
        {image:laz, name:'ЛАЗ Е183', description:'Прийнято в експлуатацію - 2007 р.'},
        {image:laz5852, name:'ЛАЗ 5252', description:'Прийнято в експлуатацію - 1998 р.'},
        {image:dnipro, name:'ДНІПРО Т203', description:'Прийнято в експлуатацію - 2021 р.'},
        {image:pts, name:'PTS T-12309', description:'Прийнято в експлуатацію - 2024 р.'}
    ]
    return(
        <div className='bg-white relative min-h-screen w-screen flex flex-col gap-5 px-10 p-5 pt-0 justify-center items-center'>
            <div className=''>
                <BlackTitle text={'Рухомий склад'}/>
            </div>
            <div className='flex gap-2 flex-grow flex-wrap text-[#008DD2] w-full uppercase text-xs lg:text-base items-start justify-start'>
                <Link href={'#galery'} >
                    <button className='uppercase'>#Галерея</button>
                </Link>
                <Link href={'#quantity'} >
                    <button href='#quantity' className='uppercase'>#кількість</button>
                </Link>
                <Link href={'#characteristic'} >
                    <button href='#characteristic' className='uppercase'>#характеристики</button>
                </Link>
            </div>
            <div id='galery' className='pt-5'><SubTitle text={'Галерея моделей рухомого складу'}/></div>
            <div>
                <p> На балансі комунального підприємства</p>
            </div>
           <div  className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 justify-center items-center mb-5'>
                {stockItems.map((item, index) => (
                    <div key={index} className='h-full'>
                        <Card image={item.image} name={item.name} description={item.description} />
                    </div>
                ))} 
                <div className='w-full h-full flex justify-center lg:col-span-3'>
                    <NumberAnimation/>
                </div>  
           </div >
           <div id='quantity' className='flex justify-center items-center'>
                <ChartBlock/>
           </div>
           <div id='characteristic' className='relative flex flex-col min-h-screen '> 
                <div  className='sticky top-0  pt-24 pb-8 lg:pb-7 bg-white z-10'>
                    <SubTitle  text={'Технічні характеристики'}/>
                </div>
                <div  className='sticky pb-10'>
                        <Table/>
                        <TableLg/>
                </div>
                
           </div>
           
        </div>
    )
}