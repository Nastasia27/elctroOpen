import BlackTitle from '@/app/ui/title/BlackTitle';
import Link from 'next/link';

export const metadata = {
    title: 'Розклад руху траваїв та тролейбусів КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Розклад руху електротранспорту в Миколаєві',
  }

export default function Page() {


    return(
        <div className="bg-white  text-black w-screen flex flex-col justify-center items-center ">
            <div className='pt-0 lg:pt-0'>
                <BlackTitle text='РОЗКЛАД РУХУ'/>
            </div>
            <div className="flex lg:hidden flex-col gap-5 pt-5 px-10 text-justify">
               
                    <p> 
                        *<span className='text-red-600 font-black'>Увага! </span>
                        На період застосування графіків відключень АТ «Миколаївобленерго» зазначені графіки руху електротранспорту не використовуються.
                    </p>
                    <p>
                        Всю актуальну інформацію щодо руху електротранспорту Миколаєва можна дізнатись за телефоном гарячої лінії - (095) 084-38-04.
                    </p>
                    
                <p>
                    Також радимо використовувати сервіс 
                    <Link className='font-semibold px-2 text-[#008DD2]' href='https://www.eway.in.ua/ua/cities/mykolaiv' >EasyWay</Link>та 
                    <Link className='font-semibold px-2 text-[#008DD2]' href='https://play.google.com/store/apps/details?id=ua.in.citybus.mykolayiv'>CityBus</Link> 
                    для відстеження руху транспорту в режимі онлайн.
                </p>
            </div>
        </div>
    )
}