'use client';
import train from '@/public/train.svg';
import line from '@/public/line.svg';
import Image from 'next/image';
import { motion } from "framer-motion";
import { useRouter } from 'next/navigation'


export default function TrainAnimation() {
    const router = useRouter()
    function onComplete() {
        router.push('/home');
      }

    return(
        <div className='bg-white min-h-screen flex flex-col justify-center items-center overflow-hidden'>
            <div className='relative flex flex-col justify-center items-center'>
                <motion.div 
                initial={{x:'-500px'}}
                    animate={{
                        skew: ['-5deg',0, '-5deg'],
                        x: [-250, 0, 1000],
                        opacity:[ 0, 1, 1],
                      }}
                      transition={{
                        duration:3,
                        ease: ["easeInOut"],
                        repeatDelay: 1
                      }}
                      onAnimationComplete={onComplete}
                    >
                    <Image
                    src={train}
                    alt='train'
                    priority={true}
                    />
                </motion.div>
                <div className='absolute top-[200px]'>
                    <Image
                        src={line}
                        alt='line'
                        priority={true}
                    />
                </div>
            </div>
        </div>
    )
}