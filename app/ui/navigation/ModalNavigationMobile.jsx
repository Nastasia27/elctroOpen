'use client';
import closeImage from "@/public/navigationMobile/close.svg";
import { montserrat } from "../fonts";
import Image from "next/image";
import { useState } from "react";

import Link from "next/link";
import arrow from "@/public/navbar/arrow2.svg";
import clsx from "clsx";

export default function ModalNavigationMobile({navItem, isOpen, setIsOpen}) {
    const [isOpenSubModal, setIsOpenSubModal] = useState(null);
    const [isOpenModal, setIsOpenModal] = useState(isOpen);
   
    const handleClick = () => {
        setIsOpenModal(false);
        setIsOpenSubModal(null);
        setIsOpen(false);
    }

    const handleClickNavItem = (index) => {
        if (isOpenSubModal === index) {
            setIsOpenSubModal(null);
        } else (setIsOpenSubModal(index))
    }

    return(
        <div>
        {isOpenModal && 
            <div className={` ${montserrat.className} bg-[#FBFBFB] bg-opacity-95 h-screen w-screen absolute top-0 left-0 z-40 font-black uppercase text-black overflow-x-auto`}>
            <div className="flex justify-center py-16 relative">
                <h1>меню</h1>
                <button onClick={handleClick}>
                    <Image className="absolute top-14 right-10"
                    src={closeImage}
                    alt="close icon"
                    />
                </button>
            </div>
            
            <div className="flex justify-center flex-col pb-5">
                <div className="px-10 gap-3 flex flex-col">
                {navItem.map((item, index) => (
                    <div key={index}
                        className="border-0 border-b-2 border-[#008DD2] pb-2"
                        onClick={() => {
                            handleClickNavItem(index);
                            if (!item.subItems) {
                                setIsOpen(false);
                            }
                        }}
                    >
                        <Link href={item.href}>
                            <div className="flex justify-between">
                                <p>{item.name}</p>
                                {item.subItems && 
                                    <Image
                                        src={arrow}
                                        alt="стрілка"
                                        width={20} 
                                        className={clsx('flex items-center justify-center',
                                        {
                                            'rotate-90' : isOpenSubModal === index,
                                        })}
                                    />
                                }
                            </div>
                        </Link>
                        <div >
                            {item.subItems && isOpenSubModal === index && (
                                <div className="">
                                {isOpenSubModal && 
                                   item.subItems.map((subItem, subIndex) => (
                                           <Link key={subIndex}
                                                href={subItem.href} 
                                                className=" font-normal"
                                                onClick={handleClick}>
                                               <p className="py-1">{subItem.subname}</p>
                                           </Link>
                                       ))} 
                           </div>
                            )}
                        </div>
                    </div>
                ))}
                </div>
            </div>
        </div>
    }
        </div>
    )
}