import Image from 'next/image';
import { montserrat } from '../fonts';

export default function SkeletonNewsItem() {
    return(
        <div className={` bg-slate-50 rounded-lg grid grid-flow-row grid-cols-3 grid-rows-2 gap-3 md:gap-5 lg:grid-cols-4  font-semibold p-5 pt-7 lg:p-5 relative`}>
            
            <div className='row-span-1 lg:row-span-2 lg:col-span-1  block h-12 w-full lg:h-full lg:w-full relative'>
                <div className="flex items-center justify-center w-full h-full bg-gray-300 rounded  dark:bg-gray-700">
                    <svg className="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                        <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z"/>
                    </svg>
                    </div>
            </div>
                
            <div className=" col-span-2 lg:col-span-3 h-5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 ml-3 mb-4"></div>
                
            <div className=' col-span-3  font-normal text-sm md:text-base '>
                <div >
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                    <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-full mb-2.5"></div>
                </div>
                
                
            </div>

        </div>
    )
}