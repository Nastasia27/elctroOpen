import Link from "next/link";

export default function Page() {


    return(
        <div>
            <div className="hidden lg:flex flex-col gap-5 p-5">
                <p> 
                    *<span className='text-red-600 font-black'>Увага! </span>
                    На період застосування графіків відключень АТ «Миколаївобленерго» зазначені графіки руху електротранспорту не використовуються.
                </p>
                <p>
                    Всю актуальну інформацію щодо руху електротранспорту Миколаєва можна дізнатись за телефоном гарячої лінії - (095) 084-38-04.
                </p>
                <p>
                    Також радимо використовувати сервіс 
                    <Link className='font-semibold px-2 text-[#008DD2]' href='https://www.eway.in.ua/ua/cities/mykolaiv' >EasyWay</Link> та 
                    <Link className='font-semibold px-2 text-[#008DD2]' href='https://play.google.com/store/apps/details?id=ua.in.citybus.mykolayiv'>CityBus</Link> 
                    для відстеження руху транспорту в режимі онлайн.
                </p>
            </div>
        </div>
    )
}