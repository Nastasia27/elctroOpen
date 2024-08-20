'use client';
import Image from "next/image";
import pic1 from "@/public/about/pic1.jpeg";
import pic2 from  "@/public/about/pic2.jpeg";
import pic3 from "@/public/about/pic3.jpeg";
import pic4 from "@/public/about/pic4.jpeg";
import pic5 from "@/public/about/pic5.jpeg";
import pic6 from "@/public/about/pic6.JPG";
import pic7 from "@/public/about/pic7.jpeg";
import pic8 from "@/public/about/pic8.jpeg";
import pic9 from "@/public/about/pic9.jpeg";
import pic10 from "@/public/about/pic10.jpeg";
import pic11 from "@/public/about/pic11.jpeg";
import logo from "@/public/logo.png";
import { useScroll, useTransform, motion} from 'framer-motion';
import { useRef } from 'react';

export default function GalleryParalax() {
    

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    })

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);
    const y = useTransform(scrollYProgress, [0, 1], [1, 40]);

    return(
        <div>
            <div ref={container} className="  relative  h-[200vh] lg:h-[300vh] w-screen bg-white">
                <div className="sticky overflow-hidden top-0 h-screen w-screen  ">
                    <motion.div style={{scale:scale5}} className="w-full h-full drop-shadow-lg absolute top-0 flex flex-col justify-center items-center z-10">
                            <motion.div  className="hidden relative right-[0] bg-white p-7  w-[35%] h-[15%]  bottom-[0] drop-shadow-sm lg:w-[20%] lg:h-[25%] lg:flex justify-center items-center">
                                <Image 
                                    src={logo}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className="object-contain h-full"
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale4}} className="w-full h-full drop-shadow-lg absolute top-0 flex flex-col justify-center items-center z-10">
                            <motion.div  className="relative hidden sm:flex lg:hidden  right-[0] bg-white p-2 w-[25%] h-[25%]  bottom-[0] drop-shadow-sm justify-center items-center">
                                <motion.div  className="h-full w-full flex ">
                                    <Image 
                                        src={logo}
                                        alt="picture"
                                        width={500}
                                        height={500}
                                        className="object-contain h-full "
                                    />
                                </motion.div>
                                
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale4}} className="w-full h-full drop-shadow-lg absolute top-0 flex flex-col justify-center items-center z-10">
                            <motion.div  className="relative xs:flex sm:hidden right-[0] bg-white px-7 p-3 h-[20%] w-[35%] bottom-[0] drop-shadow-sm flex justify-center items-center">
                                <motion.div style={{y:y}} className="h-full w-full flex ">
                                    <Image 
                                        src={logo}
                                        alt="picture"
                                        width={500}
                                        height={500}
                                        className="object-contain h-full "
                                    />
                                </motion.div>
                                
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale4}} className="w-full h-full absolute drop-shadow-lg top-0 flex flex-col justify-center items-center ">
                            <motion.div className="relative right-[39%] w-[35%] h-[28%]  drop-shadow-sm bottom-[4%] sm:bottom-[10%] sm:h-[45%] sm:right-[28%] sm:w-[25%] lg:right-[26.5%] lg:w-[29%] lg:h-[55%] lg:bottom-[15%] ">
                                <Image 
                                    src={pic1}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full "
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale5}} className="w-full h-full absolute drop-shadow-lg top-0 flex flex-col justify-center items-center ">
                            <motion.div className="relative right-[-39%] h-[20%] w-[35%] sm:w-[25%] sm:h-[25%] sm:right-[-28%] lg:right-[-26%] lg:w-[27%] lg:h-[25%] drop-shadow-sm top-[0%] ">
                                <Image 
                                    src={pic11}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-90 object-bottom"
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale6}} className="w-full h-full absolute drop-shadow-lg top-0 flex flex-col justify-center items-center ">
                            <motion.div className="relative left-[14%] w-[63%] h-[21%] sm:w-[21%] sm:h-[16%] sm:left-[-2%] sm:bottom-[25%] lg:left-[2%]  lg:w-[24%] lg:h-[27%] drop-shadow-sm bottom-[23%] lg:bottom-[29%]">
                                <Image 
                                    src={pic5}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-90 object-left-bottom"
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale8}} className="w-full h-full absolute drop-shadow-lg top-0 flex flex-col justify-center items-center ">
                            <motion.div className="relative left-[26%] w-[55%] h-[19%] drop-shadow-sm top-[23%] sm:h-[27%] sm:top-[30%] sm:left-[18%] lg:h-[25%] lg:w-[18%] lg:top-[29%] lg:left-[10%]">
                                <Image 
                                    src={pic4}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-90"
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale4}} className="w-full h-full absolute drop-shadow-lg top-0 flex flex-col justify-center items-center ">
                            <motion.div className="relative right-[36%] w-[30%] h-[13%] drop-shadow-sm top-[-27%] sm:right-[-21%] sm:h-[16%] sm:w-[20%] sm:top-[-25%] lg:h-[25%] lg:w-[27%] lg:top-[29%] lg:right-[14%]">
                                <Image 
                                    src={pic7}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-75 "
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale9}} className="w-full h-full absolute top-0 flex drop-shadow-lg flex-col justify-center items-center ">
                            <motion.div className="relative right-[29%] w-[45%] h-[19%] drop-shadow-sm top-[23%] sm:w-[25%] sm:h-[27%] sm:top-[30%] sm:right-[25%] lg:h-[25%] lg:w-[19%] lg:top-[29%] lg:left-[30%]">
                                <Image 
                                    src={pic3}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-90 "
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale9}} className="hidden w-full h-full absolute top-0 lg:flex drop-shadow-lg flex-col justify-center items-center ">
                            <motion.div className="relative drop-shadow-sm top-[18%] lg:h-[25%] lg:w-[12%] lg:top-[29%] lg:right-[35%]">
                                <Image 
                                    src={pic9}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-90 "
                                />
                            </motion.div>
                    </motion.div>
                    <motion.div style={{scale:scale9}} className="hidden w-full h-full absolute top-0 lg:flex drop-shadow-lg flex-col justify-center items-center ">
                            <motion.div className="relative drop-shadow-sm top-[18%] lg:h-[27%] lg:w-[23%] lg:top-[-29%] lg:right-[-28%]">
                                <Image 
                                    src={pic10}
                                    alt="picture"
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full brightness-90 "
                                />
                            </motion.div>
                    </motion.div>

                    {/* <motion.div className=" relative h-[80vh] items-center justify-center w-screen">
                        <motion.div style={{scale:scale6}} className="absolute right-[40%] w-1/5 h-1/5  bottom-[35%] ">
                            <Image 
                                src={pic6}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover "
                            />
                        </motion.div>
                        <motion.div style={{scale:scale4}} className="absolute left-[2%] w-2/6 h-2/5  bottom-[45%] ">
                            <Image 
                                src={pic1}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover "
                            />
                        </motion.div> */}
                        
                        {/* <motion.div className="">
                            <Image 
                                src={pic7}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover"
                            />
                        </motion.div>
                        
                        <div className="w-full">
                            <Image 
                                src={pic2}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover"
                            />
                        </div>
                        <motion.div style={{scale:scale4}} className="w-full">
                            <Image 
                                src={pic3}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover"
                            />
                        </motion.div>
                        <motion.div style={{scale:scale4}}  className=" w-full">
                            <motion.div style={{scale:scale4}}  className="">
                            <Image 
                                src={pic4}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover "
                            />

                            </motion.div>
                            
                        </motion.div>
                        <div className=" w-full">
                            <Image 
                                src={pic5}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover"
                            />
                        </div>
                        <div className="self-start">
                            <Image 
                                src={pic6}
                                alt="picture"
                                width={500}
                                height={500}
                                className=" object-cover"
                            />
                        </div> */}

                   
                    

                </div>

            </div>

        </div>
    )
}