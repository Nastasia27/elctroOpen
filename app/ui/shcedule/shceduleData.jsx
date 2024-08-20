'use client';
import { useState } from "react";
import clsx from "clsx";
import closeIcon from '@/public/icon/close.svg';
import Image from "next/image";

export default function ShceduleData({number, title, data, dataWeekands}) {
    const [selectedData, setSelectedData] = useState(data);
    const [isOpen, setIsOpen] = useState(true);

    const handleButtonClick = (selected) => {
        if (selected === 'data') {
            setSelectedData(data);
        } else if (selected === 'dataWeekands') {
            setSelectedData(dataWeekands);
        }
    };

    const handleClose = () => {
        setIsOpen(false);
       
    }
    

    return(
        
        <div >
            {isOpen && (
            <div className="bg-[#F8F8F8] p-5 lg:p-10 flex flex-col gap-5">
                <div className="flex gap-2 flex-col lg:flex-row items-start justify-start relative">
                    <h1 className="font-black text-xl lg:text-3xl text-[#008DD2]">{number}</h1>
                    <h1 className="font-black text-sm lg:text-2xl">{title}</h1>
                    <button type="button" onClick={handleClose} className="absolute rounded-lg shadow-lg w-6 p-1 right-0 lg:right-[-20px] lg:top-1">
                        <Image
                        src={closeIcon}
                        alt="close icon"
                        width={50}
                        height={50}/>
                    </button>
                </div>
                <div className=" flex gap-4 text-xs lg:text-base">
                    <div className="">
                        <button className={clsx("border-2 p-2 text-white lg:px-4 bg-sky-500/50", {'border-sky-600/75 bg-sky-600': selectedData === data})} onClick={() => handleButtonClick('data')}>Робочі дні</button>
                    </div>
                    <div>
                        <button className={clsx("border-2 p-2 text-white lg:px-4 bg-sky-500/50", {'border-sky-600/75 bg-sky-600': selectedData === dataWeekands})} onClick={() => handleButtonClick('dataWeekands')}>Вихідні дні</button>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    {selectedData.map((item, index) => (
                        <div key={index} className="flex flex-col gap-5">
                            <div>
                                <h1 className="font-black text-xs lg:text-lg">
                                    {item.direction}
                                </h1>
                            </div>
                            <div className="grid grid-cols-4 lg:grid-cols-6 gap-2 text-sm lg:text-base">
                                {item.time.map((item, index) => (
                                    <div key={index} className="">
                                        <p style={{color:item.includes('в депо') ? 'red' : 'black', fontWeight:item.includes('в депо') ? 'bold' : 'normal'}}>{item}</p>
                                    </div>
                                ))}
                            </div>

                        </div>
                    ))}
                </div>
            </div>
            )}
        </div>
    )
}