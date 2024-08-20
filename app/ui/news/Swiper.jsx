'use client';
import { register } from 'swiper/element/bundle';
import { useRef, useEffect } from 'react';
import img1 from '@/public/hero/tralleybus.jpeg';
import img2 from '@/public/hero/tralleybus2.jpg';
import img3 from '@/public/hero/tram.jpg';
import img4 from '@/public/hero/tram1.JPG';
import Image from 'next/image';

register();

export function SliderImage({item}) {
    return(
        <div className='w-screen h-screen'>
            <Image 
                src={item}
                alt='tram'
                width={1200}
                height={800}
                className='w-full h-full object-cover  object-bottom'
            />           
        </div>
    )
}

export default function Swiper({imageListArr}) {
    const imageList = [img1, img2, img3, img4];

    return(
        <div className='h-screen w-full overflow-hidden'>
            <swiper-container  slides-per-view='1' loop="true" autoplay-delay='5000' pagination="true">
                {imageList.map((item, index) => 
                    <swiper-slide key={index} >
                        <SliderImage item={item}/>
                    </swiper-slide>
                )}
            </swiper-container>
        </div>
    )
}