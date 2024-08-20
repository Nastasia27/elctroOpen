
import Image from 'next/image';
import BlackTitle from '@/app/ui/title/BlackTitle';
import Link from 'next/link';

export const metadata = {
    title: 'Контакти КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Інформація про телефон, адресу та варіанти звернень до КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС” (адреса, графік прийому громадян)',
  }

export default function Page() {

    return(
        <div className='flex flex-col min-h-[calc(100vh-176px)] text-black justify-start items-cente w-full bg-white p-5 pt-0 lg:pt-0 lg:p-20 gap-5 lg:gap-10 text-xs lg:text-base'>
            <div>
                <BlackTitle text={'Контакти'}/>
            </div>
            <div className='flex flex-col gap-5 lg:gap-10'>
                    
                <div className='flex flex-col justify-center gap-5 lg:col-span-2'>
                    
                    <p className=''>
                        Підприємство приймає звернення в телефонному вигляді, 
                        електронному вигляді, через офіційну сторінку <span className=' text-sky-600 font-bold px-1'>
                            <Link 
                                href='https://www.facebook.com/nikeltrans'
                            >
                                Facebook
                            </Link>
                        </span>, а також особисто за адресою: м. Миколаїв, вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17,
                         понеділок-п&apos;ятниця з 8:00 до 17:00.
                    </p>
                    <p>
                        Обідня перерва з 12:00-13:00.
                    </p>
                    <p>
                        Подання скарг відбувається у письмовому вигляді особисто / 
                        на електронну пошту / в телефонному режимі - гарячу лінію підприємства / 
                        через офіційну сторінку 
                        <span className=' text-sky-600 font-bold px-1'>
                            <Link 
                                href='https://www.facebook.com/nikeltrans'
                            >
                                Facebook
                            </Link>
                        </span>.
                    </p>
                    
                </div>
                <div className='flex flex-col gap-2 lg:col-span-3 lg:gap-5'>
                    <div>
                        <p className='font-black '>
                            Гаряча лінія:
                        </p>
                        <p>
                            +380-95-084-38-04  
                        </p>
                    </div>
                    <div>
                        <p className='font-black '>
                            Електронна пошта:
                        </p>
                        <p>
                            mkelektrotrans@gmail.com
                        </p>
                    </div>
                    <div>
                        <p className='font-black'>
                            Приймальня:
                        </p>
                        <p>
                            (0512) 47-33-62
                        </p>

                    </div>
                    </div>
            </div>
        </div>
    )
}