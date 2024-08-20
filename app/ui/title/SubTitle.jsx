import {montserrat} from '../fonts';

export default function SubTitle({text}) {
    return (
        <div className={` ${montserrat.className} flex text-xs lg:text-base flex-col justify-center items-center `}>
            <h1 className="font-black uppercase text-black">
                {text}
            </h1>
        </div>
    )
    
}