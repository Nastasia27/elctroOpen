'use client';
import Image from 'next/image';
import trolley from "@/public/icon/trollyebus.svg";
import NumberButton from '../../ui/buttons/NumberButton';
import Link from 'next/link';
import tramIcon from "@/public/icon/tram.svg";
import { useSelectedLayoutSegment } from 'next/navigation';

export default function Layout({children, tram, trolleybus}) {
    const tramList = [
        {name:1, link:'/schedule/tram1'},
        {name:3, link:'/schedule/tram3'},
        {name:6, link:'/schedule/tram6'},
        {name:7, link:'/schedule/tram7'},
        {name:10, link:'/schedule/tram10'},
        {name:11, link:'/schedule/tram11'} 
    ];
    const trolleyList = [
        {name:2, link:'/schedule/trolleybus2'},
        {name:4, link:'/schedule/trolleybus4'},
        {name:6, link:'/schedule/trolleybus6'},
        {name:7, link:'/schedule/trolleybus7'},
        {name:'7A', link:'/schedule/trolleybus7a'},
        {name:9, link:'/schedule/trolleybus9'} 
    ];

    return(
        <div className="flex h-full bg-white text-black justify-center items-center">
            <div className='pb-10'>
                <div className='pb-5 '>{children} </div>
            <div className=' flex justify-center items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 w-5/6'>
                    <div className='bg-[#F8F8F8] p-5  flex flex-col gap-5'>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex w-full justify-start items-center'>
                                <div className=' h-40 w-32'>
                                    <Image src={tramIcon} alt='іконка-трамвай рожева'
                                        width={500} height={500}
                                        className='h-full'
                                    />
                                </div>
                                <h1 className='uppercase font-black'>ТРАМВАЙ</h1>
                            </div>
                            <div className='flex flex-wrap lg:grid lg:grid-cols-3 gap-5 justify-center items-center'>
                                {tramList.map((item, index) => (
                                    <div key={index}>
                                        <Link href={item.link}>
                                            <NumberButton text={item.name}/>
                                        </Link>
                                        
                                    </div>
                                ))} 
                            </div>
                        </div>
                        <div className="block lg:hidden bg-[#F8F8F8] lg:col-span-2 ">
                            {tram}
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <div className='flex w-full justify-start items-center'>
                                <div className=' h-40 w-32'>
                                    <Image src={trolley} alt='іконка-трамвай рожева'
                                        width={500} height={500}
                                        className='h-full'
                                    />
                                </div>
                                <h1 className='uppercase font-black'>ТРОЛЕЙБУС</h1>
                            </div>
                            <div className='flex flex-wrap lg:grid lg:grid-cols-3 gap-5 justify-center items-center'>
                                {trolleyList.map((item, index) => (
                                    <div key={index}>
                                        <Link href={item.link}>
                                        <NumberButton text={item.name}/>
                                        </Link>
                                        
                                    </div>
                                ))} 
                            </div>
                        </div>   
                        <div className="block lg:hidden bg-[#F8F8F8] lg:col-span-2 ">
                            {trolleybus}
                        </div>                         
                    </div>
                    <div className="hidden lg:block bg-[#F8F8F8] lg:col-span-2 ">
                        {tram}
                        {trolleybus}
                    </div>
                </div>

            </div>

            </div>
        </div>
    )
}