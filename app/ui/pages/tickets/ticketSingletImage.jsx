import Image from "next/image";
import ticket1 from '@/public/tickets/ticketsingle1.JPG';
import ticket2 from '@/public/tickets/ticketsingle2.JPG';
import ticket3 from '@/public/tickets/ticketsingle3.JPG';
import SmallTitle from "../../title/SmallTitle";

export default function TicketSingleImage() {
    return(
        <div className="flex flex-col pb-10 lg:px-10 relative justify-center items-center text-[10px] md:text-xs lg:text-base">
            <SmallTitle name={'Разові квитки'}/>
            <div className="grid grid-cols-6 w-full gap-1 justify-start items-start relative">
                <div className="relative flex flex-col col-span-2 items-center justify-center" >
                    <Image src={ticket1} alt='Одноразовий квиток, якій можна придбати у водія' width={200} height={200} className="z-10"/>
                    
                </div>
                <div className="relative flex flex-col col-span-2 items-center justify-center">
                    <Image src={ticket2} alt='Одноразовий квиток, якій можна придбати у водія' width={200} height={200} className="z-10"/>
                    
                </div>
                <div className="relative flex flex-col col-span-2 items-center justify-center">
                    <Image src={ticket3} alt='Одноразовий квиток, якій можна придбати у водія' width={200} height={200} className="z-10"/>
                </div>
                <div className="  col-span-2 col-start-4 border-t-0  relative">
                    <h2 className="text-center px-1">У спеціалізованих кіосках <span className="hidden md:block">КП «Миколаївелектротранс»</span> </h2>
                    <div className="w-full h-full  absolute bottom-0 border border-black col-span-2 col-start-4 border-t-0 "> </div>
                </div>
                <div className="text-center col-span-2 relative lg:p-5">
                        <h2>У водія трамвая або тролейбусу</h2>
                        <div className="absolute bottom-[100%] left-1/2 h-[200%] w-[1px] bg-black"></div>
                </div>
                
               
            </div>
            
        </div>
    )
}