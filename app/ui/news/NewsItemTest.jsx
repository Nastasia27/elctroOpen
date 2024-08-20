import Image from 'next/image';
import { montserrat } from '../fonts';

export default function NewsItemTest({image, title, text, tag, date}) {
    return(
        <div className={`${montserrat.className} bg-[#F8F8F8] grid grid-flow-row grid-cols-2 grid-rows-2 gap-5 lg:grid-cols-4  font-semibold p-5 relative`}>
            <div className='lg:row-span-2'>
                <div className='block h-28 w-28 lg:h-36 lg:w-36 relative'>
                    <Image
                        src={image}
                        alt="фото новин кп ммр миколаївелектротранс"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className=' object-cover'
                    />
                </div>
                
            </div>
            <div className=' text-[#008DD2] uppercase text-sm md:text-base flex items-center justify-content pt-2 '>
                <h1>{title}</h1>
            </div>
            <div className=' col-span-2 font-normal text-sm md:text-base lg:col-span-3'>
                <div className='text-black'>
                    <p>{text.substring(0,150)}...</p>
                </div>
                
            </div>
            <div className='absolute text-black text-xs top-4 right-5'> {date}</div>

        </div>
    )
}