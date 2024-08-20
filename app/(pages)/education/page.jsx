import SwiperCar from '@/app/ui/pages/education/swiper';
import { montserrat } from "@/app/ui/fonts";
import config from '@/app/config';

export const metadata = {
    title: 'Навчання в КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'ОТРИМАЙ ПРОФІЛЬНУ ОСВІТУ В УЧБОВО ВИРОБНИЧОМУ ЦЕНТРІ КП «МИКОЛАЇВЕЛЕКТРОТРАНС»',
  }

async function getData() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/benefit-studies?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  };

  async function getVideo() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/study-videos?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  };

  async function getText() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/study-texts?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  };



export default async function Page() {
    const benefits = await getData();
    const videoLink = await getVideo();
    const text = await getText();

    const requirements = [
        'копія паспорта;',
        'копія ідентифікаційного коду;',
        'копія документа про закінчену освіту;',
        'медична довідка щодо придатності до керування транспортним засобом;',
    ]

    return(
        <div className={` ${montserrat.className} bg-white flex justify-center items-center pt-28 pb-10 lg:pt-32 text-black`}>
            <article className="w-5/6 flex flex-col justify-center items-center gap-5 lg:gap-10 text-wrap text-justify indent-8">
                <div className="uppercase font-black text-[#008DD2] w-full md:text-xl lg:text-2xl indent-0 text-center">
                    <h1>ОТРИМАЙ ПРОФІЛЬНУ ОСВІТУ В УЧБОВО ВИРОБНИЧОМУ ЦЕНТРІ КП «МИКОЛАЇВЕЛЕКТРОТРАНС»</h1>
                </div>
                <div className="w-full lg:w-3/4 border-2 rounded-md overflow-hidden border-[#008DD2]">
                    <video width="1920" height="1080" controls preload="metadata" muted autoPlay playsInline>
                        <source src={videoLink.data[0].attributes.video.data.attributes.url} type="video/mp4" />
                        Your browser does not support the video tag.
                        </video>
                </div>
                <div className="w-full text-xs md:text-base flex flex-col gap-5">
                    <p className="indent-8"> <span className=" font-bold"> Учбово-виробничий центр (УВЦ)</span> 
                            КП ММР «Миколаївелектротранс», здійснює підготовку майбутніх водіїв за спеціальностями  
                            <span className=" font-bold"> «Водій трамвая» </span>та 
                            <span className=" font-bold">«Водій тролейбуса»</span>. 
                            Ми можемо одночасно навчати до 30 людей на кожну зі спеціальностей.
                    </p>
                    <p>
                        Під час навчання викладаються загальнопрофесійні та професійно-теоретичні дисципліни: основи трудового законодавства, основи законодавства України, основи галузевої економіки і підприємства, інформаційні технології, основи енергоефективності, основи професійної етики, будова та технічне обладнання тролейбусів та трамваїв, електрозабезпечення тролейбусів та трамваїв, підготовка тролейбуса та трамваю до експлуатації, надання першої домедичної допомоги, основи правила обслуговування пасажирів, організація руху, правила дорожнього руху, основи безпеки руху, медичне забезпечення безпеки дорожнього руху.
                    </p>
                    <div>
                        <SwiperCar/>
                    </div>
                    <div className="flex flex-col gap-5">
                        <p><span className=" font-bold"> Учбово-виробничий центр </span> атестований у Міністерстві освіти і науки України, а також має акредитацію в головному сервісному центрі МВС України.</p>
                        <div className="flex flex-col gap-2">
                            <h2 className=" font-bold">Переваги:</h2>
                            <ul className="list-disc list-inside text-start">
                                {benefits.data.map((item, index) => (
                                    <li key={index}>{item.attributes.item}</li>
                                ))}
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h2 className=" font-bold">Для навчання, необхідно подати такі документи:</h2>
                            <ul className="list-disc list-inside text-start">
                                {requirements.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-5 ">
                        {text.data.map((item, index) => (
                            <p key={index}>{item.attributes.text}</p>
                        ))}
                        <p><span className=" font-bold"> Залишити свою заявку можна у будь-який час і ми повідомимо про старт навчання найближчої групи.</span> 
                        </p>
                            <p >
                            <span className=" font-bold"> За додатковою інформацією </span> звертайтеся до <span className=" font-bold">  Учбово-виробничий центру </span> КП ММР «Миколаївелектротранс» 
                                за адресою м. Миколаїв, вул. Євгена Єщенка (вул. Андреєва-Палагнюка), 17, 
                                за номером <span className=" font-bold">+38 050-327-48-91</span> або <span className=" font-bold">+38 (063) 137-28-00</span>.
                            </p>

                    </div>
                </div>
            </article>
        </div>
    )
}