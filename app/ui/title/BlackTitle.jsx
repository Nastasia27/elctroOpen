import {montserrat} from '../fonts';

export default function BlackTitle({text}) {
    return (
        <div className={` ${montserrat.className} flex text-sm lg:text-lg flex-col justify-center items-center `}>
            <h1 className="font-black uppercase pt-28 lg:pt-24  text-black">
                {text}
            </h1>
        </div>
    )
    
}