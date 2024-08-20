import { montserrat } from "../fonts";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MainButton({text, href}) {
    return(
        <Link href={href} >
            <motion.button 
                className={`${montserrat.className} font-black text-xs lg:text-lg bg-black bg-opacity-30 border-2 border-[#008DD2] text-white py-4 px-8 rounded-full uppercase`}
                whileHover={{ scale: 1.05, backgroundColor: '#32363C'  }}
                whileTap={{ scale: 0.8 }}>
                {text}
            </motion.button>
        </Link>

    )
}
