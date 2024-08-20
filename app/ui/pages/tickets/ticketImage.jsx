import Image from "next/image";


export default function TicketImage({image, description}) {
    return(
        <div className="flex flex-col relative w-full gap-4 justify-center items-center">
            <div className="h-20 w-64"></div>
            <div className="h-24 w-64 border border-[#008DD2] flex justify-center items-end">
                <div className="p-2 text-sm font-semibold">{description}</div>
            </div>
            <div className="absolute z-10 top-2 w-56 h-20">
                <Image src={image} alt={description} width={500} height={500}/>
            </div>
            
        </div>
    )
}