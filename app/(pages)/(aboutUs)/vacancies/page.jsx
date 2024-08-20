import BlackTitle from "@/app/ui/title/BlackTitle";
import Image from "next/image";
import building from '@/public/general/mykolaivelectrotrans.JPG';
import check from '@/public/icon/check.svg';
import pic1 from "@/public/about/pic8.jpeg";
import pic2 from "@/public/about/pic4.jpeg";
import pic3 from '@/public/aboutUs/vacancies/pic1.jpg';
import pic4 from "@/public/education/educ11.jpeg";
import pic5 from '@/public/aboutUs/vacancies/pic2.jpg';
import Link from "next/link";
import tel from '@/public/icon/tel.svg';
import location from '@/public/icon/location.svg';
import config from '@/app/config';

export const metadata = {
    title: 'Про вакансії на КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Комунальне підприємство «Миколаївелектротранс» запрошує на роботу фахівців',
  }

export const dynamic = 'force-dynamic';

async function getData() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/vacancies?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }

export default async function Page() {
    const imageArr = [
        pic1, pic2, pic3, pic4, pic5
    ];
    const vacansiesStrapi = await getData();

   
    return(
        <div className="bg-white w-full min-h-screen flex flex-col justify-start items-center p-5 pt-0 lg:p-10 lg:pt-0 gap-5">
            <div> 
                <BlackTitle text={'ВАКАНСІЇ'}/>
            </div>
            <div className="flex flex-col gap-5 items-center h-full">
                <div className="relative w-full flex gap-5 flex-col justify-center items-center">
                    <div className=" w-full  overflow-hidden lg:h-[500px]">
                        <Image 
                            src={building}
                            alt="фото депо КП ММР Миколаївелектротранс"
                            width={1000}
                            height={500}
                            className="w-full object-cover"
                        />
                    </div>
                    <div className="lg:bg-white lg:p-8 lg:rounded-lg flex flex-col lg:absolute lg:top-[40%] justify-center items-center gap-2 lg:gap-5">
                        <h1 className=" bg-[#008DD2] w-48 text-center p-2 uppercase text-white font-black rounded-lg">Пропонуємо</h1>
                        <ul className="font-black text-[#008DD2]">
                            <li className="flex items-center"> <Image src={check} alt="іконка галочка"/> Офіційне працевлаштування</li>
                            <li className="flex items-center"> <Image src={check} alt="іконка галочка"/>Конкурентну заробітню плату</li>
                            <li className="flex items-center"> <Image src={check} alt="іконка галочка"/>Повний соціальний пакет</li>
                        </ul>
                    </div>
                </div>
                <div className="grid grid-cols-5 gap-2 md:gap-5">
                    {imageArr.map((item, index) => (
                        <div key={index}>
                            <Image 
                                src={item}
                                alt="фото робітників підприємства"
                                width={500}
                                height={500}
                                className="w-full h-full"/>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col justify-center items-center gap-5">
                    <div className="flex flex-col justify-center items-center gap-2 font-black">
                        <div className="flex flex-row gap-2 items-center">
                            <Image 
                                src={tel}
                                alt='іконка телефона'
                                width={20}
                            />
                            <Link href='tel:0512473418' >
                                (0512) 47-34-18,
                            </Link>
                            <Link href='tel:0994151037'>099-415-10-37</Link>
                        </div>
                        <div className="flex flex-row gap-2 items-center">
                            <Image 
                                src={location}
                                alt='іконка локації'
                                width={20}
                            />
                            <Link href='https://www.google.com.ua/maps/place/%D0%9A%D0%9F+%D0%9C%D0%9C%D0%A0+%22%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D0%B5%D0%BB%D0%B5%D0%BA%D1%82%D1%80%D0%BE%D1%82%D1%80%D0%B0%D0%BD%D1%81%22+(%D0%A2%D1%80%D0%B0%D0%BC%D0%B2%D0%B0%D0%B9%D0%BD%D0%B5+%D0%B4%D0%B5%D0%BF%D0%BE+%E2%84%961),+%D0%B2%D1%83%D0%BB%D0%B8%D1%86%D1%8F+%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D1%94%D0%B2%D0%B0,+17,+%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2,+%D0%9C%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D1%97%D0%B2%D1%81%D1%8C%D0%BA%D0%B0+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+54020/@46.9628574,31.9758139,18z/data=!4m9!1m2!2m1!1z0JDQvdC00YDRltGU0LLQsC3Qv9Cw0LvQsNCz0L3RjtC60LAsMTcg0JzQuNC60L7Qu9Cw0ZfQsg!3m5!1s0x40c5c9775616281d:0x110f02df4a573ba0!8m2!3d46.9627532!4d31.9758149!16s%2Fg%2F1wf20bsv?hl=ru'>
                                вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17
                            </Link>
                        </div>
                        <p>Графік роботи: 8:00 - 17:00</p>

                    </div>
                    <div>
                        <h1 className="text-center font-black">
                            Комунальне підприємство «Миколаївелектротранс» запрошує на роботу фахівців
                        </h1>
                        
                        {/* strapi response*/}
                        <div className="p-5 flex flex-col gap-2">
                            {vacansiesStrapi.data.map((item, index) => (
                                <div key={index}>
                                    <h3 className="font-black">{index+1}. {item.attributes.position}</h3>
                                    <p>Заробітня плата: {item.attributes.salary}</p>
                                    <p>Кваліфікаційні вимоги: {item.attributes.qualification}</p>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>

            </div>

        </div>
    )
}