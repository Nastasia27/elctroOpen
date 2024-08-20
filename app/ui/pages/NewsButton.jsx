'use client';
import WhiteButton from '../buttons/WhiteButton';

export default function NewsButton() {
    return(
        <div className='bg-white max-w-screen overflow-hidden'>
             <div className="pb-10 pt-4 w-full flex justify-center">
                <WhiteButton text={'детальніше'} href={'/news'}/>
            </div>
         </div>
        
    )
}