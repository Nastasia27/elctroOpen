'use client';
import GalleryParalax from "../../../ui/pages/about/galleryParalax";
import AboutText from "@/app/ui/pages/about/aboutText";
import BlackTitle from "@/app/ui/title/BlackTitle";
import { montserrat, roboto } from "@/app/ui/fonts";
import Lenis from '@studio-freight/lenis';
import { useEffect } from "react";

export default function Page() {
    useEffect( () => {

        const lenis = new Lenis()
    
        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)
    
    },[])

    const indexes = [
        {
            number: '22,5+',
            text: 'млн поїздок',
            description: 'Кількість поїздок, яке забезпечує підприємство щороку'
        },
        {
            number: '69+',
            text: 'кілометрів',
            description: 'Загальна протяжність контактної мережі на обслуговуванні підприємства'
        },
        {
            number: '71+',
            text: 'кілометрів',
            description: 'Загальна протяжність трамвайної колії на обслуговуванні підприємства'
        },
        {
            number: '37',
            text: 'тролейбусів',
            description: 'Щоденно виходять на маршрути міста '
        },
        {
            number: '27',
            text: 'трамваїв',
            description: 'Щоденно виходять на маршрути міста '
        },
        {
            number: '704',
            text: 'працівники',
            description: 'Загальна кількість працівників підприємства'
        },
    ]

    return(
        <div className={`${montserrat.className} bg-white text-black flex flex-col min-h-screen justify-start items-center`}>
            <div className=" absolute lg:static w-screen text-black z-20">
                <div>
                    <BlackTitle text='про нас'/>
                </div>
                
            </div>
            
            <div className="pt-16 lg:pt-0">  
                <GalleryParalax/>
            </div>
            <div className="xs:pt-0 p-5 lg:pt-20 pb-0 z-20">
                <AboutText/>
            </div>
            <div className="pb-10">
                <h1 className="text-sm lg:text-lg font-black uppercase pt-10 lg:pt-20 text-black">
                    наші показники
                </h1>
            </div>
            <div className="flex justify-center items-center pb-10">
                <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3  lg:gap-16 justify-center items-start w-5/6 lg:py-10 p-5 ">
                    {indexes.map((item, index) => (
                        <div key={index} className="flex flex-col  justify-start items-center text-center border-2 border-[#008DD2] rounded-2xl  shadow-xl h-full">
                            <div className=" text-white font-black bg-[#008DD2] rounded-t-xl h-40 lg:h-48 w-full flex flex-col justify-center items-center gap-1 ">
                                <h1 className={`text-4xl lg:text-5xl`}>{item.number}</h1>
                                <p className=" lg:text-lg">{item.text}</p>
                            </div>
                            <p className=" text-sm lg:text-base px-5 py-5">{item.description}</p>
                        </div>
                    ))}
                </div>

            </div>
            

        </div>
    )
}