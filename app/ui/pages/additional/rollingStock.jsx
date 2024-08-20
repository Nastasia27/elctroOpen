import Image from 'next/image';
import BlackTitle from '../../title/BlackTitle';
import stockTram from './IMG_4204.JPG';
import Card from '../../cards/Card';


export default function RollingStock() {
    return(
        <div className='bg-white min-h-screen flex flex-col gap-5 p-5 justify-center items-center'>
            <BlackTitle text={'Трамвай'}/>
            <Image 
                src={stockTram}
                alt='технічні характеристики рухомого складу - трамваї'
                width={500}
                height={500}
            />

        </div>
    )
}