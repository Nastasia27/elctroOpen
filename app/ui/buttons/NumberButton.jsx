'use client';

import { montserrat } from "../fonts";
import { motion } from "framer-motion";
import Link from "next/link";

export default function NumberButton({text}) {
    return(
  
            <motion.button 
                className={`${montserrat.className} font-black text-xs lg:text-lg   bg-[#008DD2] text-white p-2 py-3  w-16 lg:w-20 uppercase`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.8 }}
            >
                № {text}
            </motion.button>

        
    )
}