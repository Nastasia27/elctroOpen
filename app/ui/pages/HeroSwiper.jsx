'use client';
import Swiper from '../Swiper';
import { roboto } from "../fonts";
import MainButton from '../buttons/MainButton';
import Link from 'next/link';

export default function HeroSwiper() {
    return(
        <div className='max-w-screen overflow-hidden relative'>
            <div className='w-screen'>
                <Swiper/>
            </div>
            <div className="bg-[#444444] opacity-50 absolute top-0 right-0 z-10 h-full w-screen"></div>
                <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full z-20 ">
                    <div className="flex flex-col text-center gap-32 lg:gap-48 ">
                        <h1 className={`${roboto.className} text-2xl md:text-4xl uppercase lg:text-5xl text-white`}>КП ММР “Миколаївелектротранс”</h1>
                        <div className="flex flex-wrap gap-5 justify-center">
                            <MainButton text={'види проїзних'} href={'/tickets'}/>
                            <MainButton text={'розклад руху'} href={'/schedule'}/>
                            <MainButton text={'відстежити онлайн'} href='https://www.eway.in.ua/ua/cities/mykolaiv'/>
                            <MainButton text={'новини'} href={'/news'}/>
                        </div>
                    </div>
                </div>
        </div>
    )
}
