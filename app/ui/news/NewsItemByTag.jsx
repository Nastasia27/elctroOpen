
import { montserrat } from '../fonts';


export default function NewsItemByTag({title, text, tag, date}) {
    return(
        <div className={`${montserrat.className} bg-[#F8F8F8] grid grid-flow-row grid-cols-2 grid-rows-2 gap-5 lg:grid-cols-4  font-semibold p-5 relative`}>
            <div className=' text-[#008DD2] col-span-2 uppercase text-sm md:text-base flex items-center justify-content pt-2 '>
                <h1>{title}</h1>
            </div>
            <div className=' col-span-2 font-normal text-sm md:text-base lg:col-span-3'>
                <div className='text-black'>
                    <p>{text.substring(0,150)}...</p>
                </div>
            </div>
            <div className=' absolute text-black text-xs top-4 right-5'> {date.substring(0,10)}</div>
        </div>
    )
}