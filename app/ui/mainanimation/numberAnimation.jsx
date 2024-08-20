'use client';
import { motion, useMotionValue, useTransform, animate, useInView } from "framer-motion";
import { useEffect , useRef} from "react";
import { montserrat } from "../fonts";

export default function NumberAnimation() {

const count = useMotionValue(0);
const rounded = useTransform(count, latest => Math.round(latest));
const ref = useRef(null)
const isInView = useInView(ref);


useEffect(() => {
    if (isInView) {
        const animation = animate(count, 138, { duration: 6 });
    } 
  }, [isInView, count]);

    return(
        <div ref={ref} className=" w-full h-full overflow-hidden bg-slate-50 rounded shadow-lg border-[#008DD2] flex justify-center p-5">
            <div className={`${montserrat.className} uppercase text-[#008DD2] font-black flex flex-col lg:flex-row justify-between items-center text-xs lg:text-base gap-5 p-5`}>
                <div className="flex h-full justify-start items-center">
                    <h1 className="">Загальна кількість:</h1>
                </div>
                <div className="flex justify-center lg:justify-end items-end w-72"> 
                    <motion.h1 className="text-8xl lg:text-[150px] text-[#FECD08]">{rounded}</motion.h1>
                </div>
                <h1>одиниць</h1>
            </div>
        </div>
        
    )
}