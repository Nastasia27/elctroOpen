import Image from "next/image";
import director from "@/public/structure/director.jpeg";
import engineer from "@/public/structure/engineer.jpeg";
import deputy from "@/public/structure/deputy.jpeg";
import { montserrat } from "@/app/ui/fonts";
import BlackTitle from "@/app/ui/title/BlackTitle";
import struct from "@/public/structure/structure.png";
import config from '@/app/config';

export const metadata = {
    title: 'Структура підприємства КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Інформація щодо структури підприємства на КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС (директор підприємства, заступник та інженер)',
  }

  async function getData() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/employees?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }

  async function getStructure() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/structures?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }

export default async function Page() {
    const employees = await getData();
    const structure = await getStructure();
    const structureImg = structure.data[0].attributes.Image.data.attributes.formats.large.url;


    
    return(
        <div className={` ${montserrat.className} text-black text-center text-xs lg:text-base bg-white min-h-screen w-full `}>
            <div>
                <BlackTitle text='Структура підприємства'/>
            </div>
            <div className="p-5 lg:p-20 lg:pt-10 flex flex-col-reverse justify-center items-center lg:flex-row lg:justify-start lg:items-start gap-5 lg:gap-10">
                <div className="w-full lg:w-auto  border-2 rounded-xl border-[#008DD2] flex flex-col p-8  gap-10">
                    {employees.data.map((item, index) => (
                        <div key={index} className="flex flex-col justify-center items-center md:flex-row md:justify-start lg:flex-col lg:justify-center gap-5">
                           <div className=" shadow-lg "> 
                            <div className="h-52 min-w-52 max-w-52 lg:h-44 p-1">
                                <Image 
                                    src={item.attributes.photo.data.attributes.formats.large.url} 
                                    alt={item.position}
                                    width={500}
                                    height={500}
                                    className=" object-cover h-full "
                                />
                            </div>
                            </div>
                            <div className="flex flex-col justify-center md:items-start md:text-left lg:text-center lg:items-center items-center gap-1">
                                <h2 className="uppercase font-black">{item.attributes.name}</h2>
                                <h3 className=" font-semibold">{item.attributes.position}</h3>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-full lg:w-auto h-full  border-2 border-[#008DD2] lg:border-0 rounded-xl flex flex-col justify-center items-center p-5 pt-8 gap-5">
                    <div>
                        <p className="text-xs md:text-sm lg:text-base tracking-tighter md:tracking-wide text-justify">
                            Структура КП ММР «Миколаївелектротранс»  затверджується директором підприємства. Структурна схема відображає кількість підрозділів, підпорядкування і включає всі наявні посади разом із вакантними.  
                        </p>
                    </div>
                    <div className="w-full shadow-lg">
                        <Image 
                            src={structureImg} 
                            alt='Структурна схема КП ММР "Миколаївелектротранс"'
                            width={1000}
                            height={1000}
                            className="w-full"
                        />
                    </div>

                </div>
            </div>
        </div>
    )
}