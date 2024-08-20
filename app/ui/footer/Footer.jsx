'use client';

import fb from '@/public/footer/fb.svg';
import inst from '@/public/footer/inst.svg';
import Image from 'next/image';
import Link from 'next/link';
import { montserrat } from '../fonts';
import { motion } from "framer-motion";


export default function Footer() {

    const iconItems = [
        {item:fb, link:'https://www.facebook.com/nikeltrans', name:'facebook'},
        {item:inst, link:'https://www.instagram.com/mykolayivelektrotrans', name:'instagram'},
    ]

    return(
        <div className={`${montserrat.className} bg-[#F8F8F8] dark:bg-[#F8F8F8] text-xs md:text-base  flex flex-col justify-center text-center p-2 pt-5 md:pt-10 uppercase gap-1 md:gap-2 dark:text-black`}>
            <div className='flex flex-col lg:grid lg:grid-cols-3 justify-center gap-1 lg:gap-5 items-center lg:px-10'>
                <div className=''>
                    <p className='text-xs md:text-base'>
                        вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17
                    </p>
                </div>
                <div>
                    <h1 className='color-black font-black'>телефон гарячої лінії</h1>
                    <Link href='tel:+380950843804'>
                        <motion.h1 
                            className=' text-[#008DD2] font-black text-sm md:text-2xl' 
                            whileHover={{scale:1.05}}
                        >
                            +380950843804
                        </motion.h1>
                    </Link>
                </div>
                
                <Link className='p-2' href='mailto:mkelektrotrans@gmail.com'>
                    <motion.h1 whileHover={{scale:1.05}} className='text-xs md:text-base '>mkelektrotrans@gmail.com</motion.h1>
                </Link>
            </div>
            
            <div className='flex justify-center gap-1 md:gap-5 m-1'>
                {iconItems.map((icon, index) => (
                    <motion.div key={index}
                                whileHover={{scale:1.1}}>
                        <Link key={index} href={icon.link}>
                            <Image key={index}
                                    src={icon.item}
                                    alt={`${icon.name} icon`}
                                    className='h-6 w-auto md:h-10 fill-green'
                            />
                    </Link>
                    </motion.div>
                ))}   
            </div>
            <p className=' text-[0.5rem] md:text-xs '>© 2024 KP MPP MYKOLAIVELECTROTRANS. ALL rights reserved.</p>
        </div>
    )
}