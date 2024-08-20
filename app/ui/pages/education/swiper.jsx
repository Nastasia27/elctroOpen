
'use client'
import img1 from '@/public/education/educ.jpeg';
import img2 from '@/public/education/educ1.jpeg';
import img3 from '@/public/education/educ2.jpeg';
import img4 from '@/public/education/educ3.jpeg';
import img5 from '@/public/education/educ4.jpeg';
import img6 from '@/public/education/educ5.jpeg';
import img7 from '@/public/education/educ6.jpeg';
import img8 from '@/public/education/educ7.JPG';
import img9 from '@/public/education/educ8.jpeg';
import img10 from '@/public/education/educ9.jpeg';
import img11 from '@/public/education/educ10.jpeg';
import img12 from '@/public/education/educ11.jpeg';
import img13 from '@/public/education/educ12.jpeg';
import img14 from '@/public/education/educ13.jpeg';
import img16 from '@/public/education/educ15.jpeg';
import img17 from '@/public/education/educ16.jpeg';
import Image from 'next/image';
import { register } from 'swiper/element/bundle';

register();

export default function SwiperCar() {
    const images = [img1, img2, img3, img4, img5, img6, img7,img8, img9, img10, img11, img12, img13, img14, img16, img17 ];

    return(
        <div className='overflow-hidden'>
        <div className='w-screen h-full overflow-hidden'>
            <swiper-container className='w-full h-full' autoplay space-between="20"   slides-per-view="3" speed="500" loop="true" >
                {images.map((item, index) => (
                    <swiper-slide key={index} className=' flex justify-start items-center'>
                        <div className=' h-36 md:h-48 lg:h-96 rounded-md overflow-hidden shadow-md my-2 lg:my-4 md:mr-4 '>
                            <Image
                                src={item}
                                alt="Picture of the author"
                                width={900} 
                                height={500} 
                                className='object-cover h-full '
                            />
                        </div>
                    </swiper-slide>
                ))}
     
                </swiper-container>
           

        </div>
        </div>
    )
}
