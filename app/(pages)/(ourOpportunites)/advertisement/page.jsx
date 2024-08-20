import BlackTitle from "@/app/ui/title/BlackTitle";
import Image from "next/image";
import image1 from '@/public/advertisment/advertisementInTram.JPG';
import image2 from "@/public/advertisment/advertisementInTram2.JPG";
import image3 from '@/public/advertisment/advertisment.png';

export const metadata = {
    title: 'Розміщення реклами на КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Розміщення реклами та рекламних оголошень на моніторах у нових тролейбусах та трамваях, послуги оренди трамваю та тролейбусу в Миколаєві ',
  }

export default function Page() {
    return(
        <div className="w-screen min-h-screen bg-white p-5 pt-0 lg:p-20 lg:pt-0 flex flex-col gap-5 lg:gap-10 text-justify ">
             <BlackTitle text={'Розміщення реклами'}/>
             <div className="w-full md:h-96 lg:h-[500px] xl:h-[600px]  flex flex-col md:flex-row gap-5 lg:gap-10">
                <div className="md:min-h-96 lg:min-h-[500px] xl:min-h-[600px] md:min-w-96 md:max-w-96 lg:min-w-[500px] lg:max-w-[500px] xl:min-w-[600px] xl:max-w-[600px] "> 
                    <Image 
                        src={image3}
                        alt="послуги з розміщення реклами в трамваях та тролейбусах в Миколаєві"
                        width={1000}
                        height={700}
                        className=" w-full"
                    />
                </div>
                <div className="hidden md:grid w-auto grid-rows-2 gap-5 lg:gap-10 ">
                    <div className="w-full overflow-hidden">
                            <Image 
                                src={image1}
                                alt="послуги оренди трамваю та тролейбусу в Миколаєві"
                                width={800}
                                height={500}
                                className="  "
                            />
                        </div>
                        <div className="w-full overflow-hidden">
                            <Image 
                                src={image2}
                                alt="послуги оренди трамваю та тролейбусу в Миколаєві"
                                width={800}
                                height={500}
                                className="  "
                            />
                        </div>
                </div>      
             </div>
            <div className="flex flex-col gap-5">
                <p>
                    Розміщуйте свої оголошення на моніторах у нових тролейбусах та трамваях, 
                    щоб ваша реклама була ефективною.
                </p>
                <p>
                    Не обмежуйте себе у форматах, адже 
                    у нас є можливість транслювати як відеоролики, так і зображення різної тривалості.
                </p>
                <p>
                    За додатковою інформацією телефонуйте за номером: <span className="font-black">+380-68-81-33-265</span> або 
                    завітайте на комунальне підприємство за адресою: <span className="font-black">вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17.</span>
                </p>
            </div>
            <div className="flex flex-col md:hidden gap-5">
                <div className="w-full h-44 overflow-hidden">
                    <Image 
                        src={image1}
                        alt="послуги оренди трамваю та тролейбусу в Миколаєві"
                        width={800}
                        height={500}
                        className="  "
                    />
                </div>
                <div className="w-full h-44 overflow-hidden">
                    <Image 
                        src={image2}
                        alt="послуги оренди трамваю та тролейбусу в Миколаєві"
                        width={800}
                        height={500}
                        className="  "
                    />
                </div>
                </div>

        </div>
    )
}