'use client';
import Image from "next/image";
import { montserrat } from "../fonts";
import picture from '/public/hero/tram.jpg';
import {motion, useScroll, useSpring, useTransform,
    MotionValue } from "framer-motion";
import { useRef } from "react";
import MainButton from "../buttons/MainButton";
import AboutText from "@/app/ui/pages/about/aboutText";
    



export default function About() {
   
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start']
    });
    
    const y = useTransform(scrollYProgress, [0,1], ['0%', '300%']);
   


    return(
        <motion.div ref={ref}
            className={` ${montserrat.className} bg-[#32363C] max-w-screen overflow-hidden flex flex-col min-h-screen w-full justify-start relative items-center `}>
                    <motion.div style={{y}} className="relative  md:h-[500px] overflow-hidden">
                        <Image
                            src={picture}
                            alt="Picture of the tram"
                            height={'100%'}
                            placeholder="blur"
                            className="object-cover w-full "
                        />
                        <div className="bg-[#32363C] bg-opacity-30 absolute top-0 h-full md:h-[500px] w-screen"></div>
                    </motion.div>

            <motion.div className="flex min-h-full lg:min-h-screen bg-[#32363C] flex-col relative z-30 justify-start items-center text-center text-white w-5/6 gap-5 ">
                <div className=" min-h-full flex flex-col gap-5 md:gap-10">
                    <h1 className="font-black uppercase pt-24 lg:pt-32">про нас</h1>
                    <AboutText/>
                    <div className="pb-10 md:p-10 md:pb-14">
                        <MainButton text={'детальніше'} href={'/about'}/>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}