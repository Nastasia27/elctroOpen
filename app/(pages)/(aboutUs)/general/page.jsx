
import Image from 'next/image';
import BlackTitle from '@/app/ui/title/BlackTitle';
import mykolaivelectrotrans from '@/public/general/mykolaivelectrotrans.JPG';

export const metadata = {
    title: 'Загальна інформація про КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Загальна інформація про роботу КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС” (адреса, графік прийому громадян)',
  }

export default function Page() {

    return(
        <div className='flex flex-col text-black justify-start items-cente w-full bg-white p-5 pt-0 lg:pt-0 lg:p-20 gap-5 lg:gap-10 text-xs lg:text-base'>
            <div>
                <BlackTitle text={'Загальна  інформація'}/>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 lg:gap-10'>
                    <div className='w-full col-span-1'>
                        
                        <Image 
                            src={mykolaivelectrotrans}
                            alt='фото депо КП ММР Миколаївелектротранс'
                            width={900}
                            height={500}
                        />
                
                </div>
                <div className='flex flex-col justify-center gap-5 lg:col-span-2'>
                    <h1 className='font-black uppercase'>
                        Комунальне підприємство Миколаївської міської ради «Миколаївелектротранс»
                    </h1>
                    <p>
                        Код ЄДРПОУ 03328468.
                    </p>
                    <p>
                        Юридична адреса: 54020, м. Миколаїв, вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17
                    </p>
                    
                </div>
                <div className='flex flex-col gap-2 lg:col-span-3 lg:gap-5'>
                        <p className='font-black  text-red-600'>
                            Графік прийому громадян: 
                        </p>
                        <p>
                            Директор підприємства: кожен четвер з 9.00 год. до 10.00 год.  
                        </p>
                        <p>
                            Заступник директора з загальних та комерційних питань: кожну середу з 10.00 год. до 11.00 год. 
                        </p>
                    </div>

            </div>
            

        </div>
    )
}