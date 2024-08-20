'use client'

import { scroll } from "framer-motion/dom";
import { useEffect, useRef, useState } from "react";
import MainButton from '../buttons/MainButton';
import { roboto } from "../fonts";
import { motion, useScroll, useMotionValueEvent , useTransform} from "framer-motion";
import Video from '@/app/ui/Video';



export default function Hero() {
    const { scrollY } = useScroll();
    const divRef = useRef(null);
    const opacity = useTransform(scrollY, [50, 200], [1,0]);
  

    useEffect(() => {
        const video = document.querySelector("video");
        if (video) {
            video.pause();

            scroll((progress) => {
                if (video.readyState) {
                video.currentTime = video.duration * progress;
                }
            });
        }
    }, [])

    return (
        <header role="banner" ref={divRef} className="h-[120rem] relative bg-black ">
            <div className="w-full sticky top-0 overflow-hidden">
                <Video/>
                
                <div className="bg-[#444444] opacity-50 absolute top-0 right-0 z-10 h-full w-screen"></div>
                <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full z-20 ">
                    <motion.div style={{opacity}} className=" flex flex-col text-center gap-32 lg:gap-48 ">
                        <h1 className={`${roboto.className} text-2xl md:text-4xl uppercase lg:text-5xl text-white`}>КП ММР “Миколаївелектротранс”</h1>
                        <motion.div className="flex flex-wrap gap-5  justify-center" 
                            >
                            <MainButton text={'види проїзних'} href={''}/>
                            <MainButton text={'розклад руху'} href={''}/>
                            <MainButton text={'відстежити онлайн'} href={''}/>
                            <MainButton text={'новини'} href={'/news'}/>
                            
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </header>
    );
}        