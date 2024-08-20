
import Image from 'next/image';
import BlackTitle from '@/app/ui/title/BlackTitle';
import Link from 'next/link';



export const metadata = {
    title: 'Нормативна база КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Нормативна база КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС” (адреса, графік прийому громадян)',
  }

export default function Page() {

    return(
        <div className='flex flex-col h-[calc(100vh-176px)] text-black font-black justify-start items-cente w-full bg-white p-5 lg:pt-0 lg:p-20 gap-5 lg:gap-10 text-xs lg:text-base'>
            <div>
                <BlackTitle text={'Нормативна база'}/>
            </div>
            <div className='h-96 lg:h-72 pt-10 flex flex-col gap-5 justify-start'>
                <div className='flex flex-col gap-5 lg:gap-10'>
                    <a href='./docs/statut.pdf'
                    alt="alt text"
                    target="_blank"  
                    >
                        Статут
                    </a>
                </div>
                <div className='flex flex-col gap-5 lg:gap-10'>
                    <a href='./docs/antikorup.pdf'
                    alt="alt text"
                    target="_blank"  
                    >
                        Антикорупційна програма
                    </a>
                </div>
                <div className='flex flex-col gap-5 lg:gap-10'>
                    <a href='./docs/galuzevaugoda.PDF'
                    alt="alt text"
                    target="_blank"  
                    >
                        Галузева угода
                    </a>
                </div>

            </div>
            
        </div>
    )
}