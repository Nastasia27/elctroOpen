import Image from "next/image";
import { montserrat } from "../fonts";

export default function ImageCard({image, description}) {
    return (
        <div className="shadow-xl text-start rounded-lg w-full  h-full border-0  overflow-hidden border-[#008DD2] flex flex-col justify-center items-center">
            <div className="w-full flex ">
                <Image
                    src={image}
                    alt={description}
                    width={900}
                    height={700}
                    className=" object-cover w-full"
                />
            </div>
            <div className="bg-[#F8F8F8] w-full flex font-normal relative justify-start items-start p-5 text-black ">
                <h1 className={`${montserrat.className}   text-xs lg:text-base`}>{description}</h1>
            </div>
        </div>
    )
}