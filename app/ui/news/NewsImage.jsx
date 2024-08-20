'use client';
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function NewsIamge({ imageUrl, imageAlt}) {
    const [selectedImage, setSelectedImage] = useState(null);
    const openImageModal = (imageUrl) => {
        setSelectedImage(imageUrl);
    };
    const closeImageModal = () => {
        setSelectedImage(null);
    };

    return(
        <div className="relative h-full">
            <div onClick={() => openImageModal(imageUrl)} className="w-full h-full">
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    width={500}
                    height={500}
                    className="w-full object-cover h-full"
                />
                
            </div>
            {selectedImage && (
                <div className="fixed top-0 left-0 z-50 h-screen w-screen bg-slate-800/75 ">
                    <div onClick={closeImageModal} className="w-screen h-screen relative flex justify-center items-center p-2 md:p-0">
                        <div  className="lg:h-[90%]  relative">
                            <Image
                                src={imageUrl}
                                alt={imageAlt}
                                width={1000}
                                height={1000}
                                className="h-full object-contain"
                            /> 
                             <div onClick={closeImageModal} className="absolute -top-5 right-0 uppercase font-black text-white">
                                Закрити
                            </div>
                        </div>
                    </div>
                     
                </div>
            )}

        </div>
    )
}