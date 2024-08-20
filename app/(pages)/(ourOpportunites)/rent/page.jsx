import BlackTitle from "@/app/ui/title/BlackTitle";
import Image from "next/image";
import mainBaner from '@/public/rent/mainBaner.png';
import rentImage1 from '@/public/rent/rentImage1.jpg';
import rentImage2 from '@/public/rent/rentImage2.JPG';
import rentImage3 from '@/public/rent/rentImage3.jpg';
import rentImage4 from '@/public/rent/rentImage4.jpg';
import logo from '@/public/logo.png';
import mainImage from '@/public/hero/tram.jpg';

export const metadata = {
    title: 'Оренда електротранспорту на КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Послуги оренди трамваю та тролейбусу в Миколаєві ',
  }

export default function Page() {
    
    return(
        <div className=" min-h-screen bg-white p-5 pt-0 lg:p-20 lg:pt-0 flex flex-col gap-5 lg:gap-10 text-justify ">
            <BlackTitle text={'ОРЕНДА'}/>
            <div className=" hidden md:block lg:w-full h-72 md:h-full">
                <Image 
                    src={mainBaner}
                    alt="послуги оренди трамваю та тролейбусу в Миколаєві"
                    width={1000}
                    height={700}
                    className="w-full h-full object-cover object-left"
                />
            </div>
            <div className="flex md:hidden flex-col gap-5">
                <div className="w-full">
                    <Image
                        src={mainImage}
                        alt='фото трамваїв та тролейбусів в Миколаєві'
                        width={500}
                        height={500}
                        className="w-full object-cover"
                    />
                </div>
                <div className="flex flex-col">
                    <h1 className="font-black pb-5 text-center">
                        ПОСЛУГИ ОРЕНДИ ТРАНСПОРТУ
                        ДЛЯ ВАШОЇ ОСОБЛИВОЇ ПОДІЇ
                    </h1>
                    <h2 className="font-black py-2">
                         Для дитячих установ, за годину:
                    </h2>
                    <p>Трамвай: 1626 грн</p>
                    <p>Тролейбус: 1378 грн </p>
                    
                    <h2 className="font-black py-2">
                        Для фізичних осіб та організацій, за годину:
                    </h2>
                    <p>Трамвай: 2114 грн</p>
                    <p>Тролейбус: 1793 грн </p>
                </div>

            </div>
            <div className="flex flex-col gap-5 lg:gap-10">
                <p>
                    Електротранспорт підходить для будь-яких заходів - від випускних вечорів 
                    до весільних церемоній, від днів народження до екскурсій по місту, фотосесій 
                    та інших івентів.
                </p>
                <div>
                    <p>
                        Для оренди трамвая або тролейбусу потрібно:
                    </p>
                    <ul className=" text-left list-disc list-inside pl-2 lg:pl-5">
                        <li>
                            звернутися на підприємство за адресою: 
                            вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17
                            або зателефонувати за номером (068) 813-32-65;
                        </li>
                        <li>
                            погодити маршрут, зручну дату та час;
                        </li>
                        <li>
                            підписати офіційний договір;
                        </li>
                        <li>
                            сплатити за послугу. 
                        </li>
                    </ul>      
                </div>
            </div>
            <div className="grid grid-cols-6 grid-rows-2 gap-2 md:gap-5 lg:gap-10">
                <div className="w-full h-full">
                    <Image
                        src={rentImage3}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-full col-span-3">
                    <Image
                        src={rentImage1}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full object-cover"
                    />
                </div>
                <div className="w-full h-full col-span-2 row-span-2">
                    <Image
                        src={rentImage2}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full h-full col-span-2">
                    <Image
                        src={rentImage4}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="w-full col-span-2 flex justify-center">
                    <Image
                        src={logo}
                        alt=""
                        width={500}
                        height={500}
                        className="w-full  object-contain"
                    />
                </div>

            </div>

        </div>
    )
}