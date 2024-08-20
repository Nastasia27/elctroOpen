import Image from "next/image";
import { montserrat } from "../fonts";

export default function Card({image, name, description}) {
    return (
        <div className="shadow-lg rounded w-full h-full border-0  overflow-hidden border-[#008DD2] flex flex-col justify-center items-center">
            <div className="h-full flex ">
                <Image
                    src={image}
                    alt={name}
                    width={500}
                    height={500}
                    className=" object-cover"
                />
            </div>
            <div className="bg-[#F8F8F8] w-full flex font-normal relative justify-start items-start p-5 text-black flex-col gap-2">
                <h1 className={`${montserrat.className} text-[#008DD2] font-black uppercase text-xs lg:text-sm`}>{name}</h1>
                <h1 className={`${montserrat.className}  uppercase text-xs lg:text-xs`}>{description}</h1>
            </div>
        </div>
    )
}