import Image from 'next/image';
import { montserrat } from '../fonts';

export default function NewsItem({image, title, text, tag, date}) {
    return(
        <div className={`${montserrat.className} bg-[#F8F8F8] grid grid-flow-row grid-cols-3 grid-rows-2 gap-3 md:gap-5 lg:grid-cols-4  font-semibold p-5 pt-7 lg:p-7 relative`}>
            <div className='lg:row-span-2 flex justify-start items-start '>
                <div className='block h-12 w-32 lg:h-32 lg:w-60 relative'>
                    <Image
                        src={image}
                        alt="фото новин кп ммр миколаївелектротранс"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        className=' object-cover'
                    />
                </div>
                
            </div>
            <div className=' text-[#008DD2] uppercase  md:text-base flex items-start lg:items-start col-span-2 lg:col-span-3 justify-content '>
                <h1 className=''>{title}</h1>
            </div>
            <div className=' col-span-3 font-normal text-sm md:text-base lg:col-span-3'>
                <div className='text-black hidden md:block'>
                    <p>{text.substring(0,120)}...</p>
                </div>
                <div className='text-black block md:hidden'>
                    <p>{text.substring(0,60)}...</p>
                </div>
                
            </div>
            <div className='absolute text-black text-xs top-2 lg:top-3 right-5'> {date.substring(0,10)}</div>

        </div>
    )
}