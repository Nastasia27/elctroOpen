import Image from 'next/image';
import BlackTitle from '@/app/ui/title/BlackTitle';
import Link from 'next/link';
import Structure from '@/app/ui/union/structure.jsx';
import structImage from '@/public/union/structure.png';
import pic1 from '@/public/union/photo_2024-07-24_10-59-04 (3).jpg';
import pic2 from '@/public/union/photo_2024-07-24_10-59-04 (2).jpg';
import pic3 from '@/public/union/photo_2024-07-24_10-59-04 (4).jpg';
import pic4 from '@/public/union/photo_2024-07-24_10-59-04 (5).jpg';
import pic5 from '@/public/union/photo_2024-07-24_10-59-04.jpg';
import pic6 from '@/public/union/photo_2023-11-16_11-23-35.jpg';
import fileIcon from "@/public/icon/file.svg";



export const metadata = {
    title: 'Діяльність профспілкової організації КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Діяльність профспілкової організації КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС” (адреса, графік прийому громадян)',
  }

export default function Page() {
    const startText = [
        'Кожного дня працюємо задля спільної мети — досягнення високих стандартів умов та безпеки праці на підприємстві КП ММР «Миколаївелектротранс». Згуртовуємось, щоб бути надійною опорою один одному та дбати про єдину мету й цінності.',
        'Профспілка підприємства «Миколаївелектротранс» налічує 611 членів профспілки станом на кінець 2023.'
    ];

    const mainText = [

        {
            title:'Дозвілля та спорт',
            text:[
                'Профспілка постійно працює над створенням умов для організованого дозвілля та змістовного відпочинку профспілчан. Одноденні відпочинки на природі, спортивні змагання, культурні заходи.',
                'Наш Принцип: активна життєва позиція – розвиток членів Профспілки в напрямку культурного дозвілля, спорту, можливості позитивно змінювати компанію та своє оточення, досягнення високих професійних та особистих результатів.'
            ]
        },
        {
            title:'Матеріальна допомога',
            text:[
                ' Матеріальна допомога надається працівникам, які є членами ППОП «Миколаївелектротранс» та щомісячно сплачують членські внески впродовж 12 місяців. Підставою для надання матеріальної допомоги є заява члена Профспілки, його родича або голови первинної профспілкової організації із зазначенням фактичних обставин, у зв’язку з якими надається матеріальна допомога та повний пакет відповідних підтверджуючих документів.'
                ],
            list: [
                'На народження дитини',
                'На літній відпочинок дітей у дитячих таборах',
                'На ювілей від 45 років',
                'Поховання близького родича',
                'На лікування себе або родичів 1-го ступеня споріднення (батьки, чоловік/дружина, діти)',
                'Мобілізованим членам Профспілки, які отримали поранення (травмування/контузія тощо) під час участі в бойових діях та інших випадках, що пов’язані з війною',
                'Ветеранам праці.'
            ]
        },
        {
            title:'Допомога ЗСУ',
            text:['Члени нашої профспілки завжди долучаються до ініціатив з перерахування свого одноденного заробітку для потреб Збройних Сил України. Завдяки цьому було придбано багато необхідного для потреб різних військових підрозділів нашої армії. Дрони, зарядні пристрої й інші потрібні речі – це найменше, що ми можемо зробити й робимо для наших захисників для наближення нашої перемоги.']
        },
        {
            title:'Співпраця з партнерами',
            text: [
                'Профспілкова організація «Миколаївелектротрансу» співпрацює з різними вітчизняними й міжнародними фондами, організаціями, які сприяють нашому розвитку та підтримки ініціатив.', 
                'Завдяки співпраці з благодійним фондом Unitus вдалося забезпечити зимовим одягом наших працівників з категорії внутрішньо переміщених осіб та постраждалих від обстрілів. WORLD CENTRAL KITCHEN надавав системну допомогу нашим працівникам впроводж перших найскладніших місяців з початку повномасштабного вторгнення.',
                `Перемога в конкурсі субгрантів у рамках проєкту "Підтримка суспільно важливих ініціатив у Миколаївській області", який реалізовує команда ГО "Молодь України" спільно з БО Українська освітня платформа та за фінансування DanChurchAid дала можливість зробити повне оновлення навчального класу, на базі якого здійснюється підготовка водіїв електротранспорту.`,
                `Співпраця з Центром навчання і освіти дорослих "Південь" та Агенцією розвитку Миколаєва дозволила підтримати навчальну програму для липневого випуску групи водіїв тролейбусів у 2024 році.`,
                `Благодійний фонд «Щедрик» також долучився до навчальної програми з підготовки водіїв тролейбусів та повністю покриє затрати на підготовку нової навчальної групи водіїв тролейбусів з вересня 2024 року.'`
            ]
        }
    ];
    


    return(
        <div className='flex flex-col min-h-screen items-center text-center w-full bg-white p-5 pt-0 lg:pt-0 lg:p-20 gap-5 lg:gap-10 '>
            <div>
                <BlackTitle text={'Діяльність профспілкової організації «Миколаївелектротранс»'}/>
            </div>
            <div className='flex flex-col gap-5 justify-start text-justify'>
                <p>{startText[0]}</p>
                <div className='h-[450px] md:h-[760px] w-full flex justify-center'>
                    <Image 
                        src={structImage}
                        alt='організаційна структура профспілкової організації «Миколаївелектротранс»'
                        
                        className='h-full object-cover'
                    />
                </div>
                <p>{startText[1]}</p>
                <div>
                    <h2 className='uppercase font-black text-center pb-5'>
                        Захист трудових прав
                    </h2>
                    <div className='flex flex-col gap-2'>
                        <p>
                            Головне і пріоритетне право Профспілки — представляти й захищати трудові та соціально-економічні права, 
                            інтереси профспілчан.
                        </p>
                        <p>
                            Особливість правозахисної профспілкової функції в тому, що працівники самостійно 
                            та на добровільних засадах об’єдналися для захисту своїх прав, свобод та інтересів. 
                            Правозахисна діяльність здійснюється в межах наданих прав та обов’язків.
                        </p>
                        <ul className='list-inside list-disc text-start flex flex-col gap-1'>
                            <li className=''>
                                <span className='font-semibold'>Колективний договір </span>
                                - договір між Адміністрацією КП ММР «Миколаївелектротранс» та ППОП «Миколаївелектротранс», 
                                що представляє трудовий колектив. Колдоговір визначає взаємні виробничі, 
                                трудові і соціально-економічні відносини між двома сторонами. Положення Колективного 
                                договору розповсюджуються на всіх працівників і є обов&apos;язковими до виконання.
                            </li>
                            <li>
                                <span className='font-semibold'>Статут профспілки - </span>
                                <Link className=' text-blue-600' href={'https://www.zhkgprof.com.ua/statut-ta-prohrama/2091-statut-profspilki-2.html'}>Посилання</Link>
                            </li>
                            <li>
                                <span className='font-semibold'>Галузева угода - </span>
                                <Link className=' text-blue-600' href={'https://www.zhkgprof.com.ua/haluzevi-uhody/3859-galuzeva-ugoda-met-2024-2026-roki.html'}>Посилання</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {mainText.map((item, index) => (
                    <div key={index} className='flex flex-col gap-5'>
                        <h2 className='uppercase font-black text-center'>{item.title}</h2>
                        {item.text && (
                            <div className='flex flex-col gap-2'>
                                {item.text.map((paragraph, idx) => (
                                    <p key={idx}>{paragraph}</p>
                                ))}
                            </div>
                        )}
                        {item.list && (
                            <ul className=' list-inside list-disc text-start flex flex-col gap-1'>
                                {item.list.map((paragraph, idx) => (
                                    <li key={idx}>{paragraph}</li>
                                ))}
                            </ul>
                        )}
                    </div>
                ))}
            </div>
            <div>
            <div className='flex flex-col gap-1'>
                <h2 className='font-black'>
                    Бажаєте долучитись до Профспілки?  
                </h2>
                <div className='flex w-screen justify-center gap-2 items-center'>
                    <a 
                            href='./docs/Zaiava-na-vstup-1.doc'
                            alt="alt text"
                            target="_blank" 
                            
                    >
                        Заповніть бланк!
                    </a>
                    <div className='h-5 w-5 lg:h-7 lg:w-7'>
                        <a 
                                href='./docs/Zaiava-na-vstup-1.doc'
                                alt="alt text"
                                target="_blank" 
                                className='text-[#008DD2] p-0' 
                        >
                                <Image src={fileIcon} alt='iконка' className='h-5 lg:h-7 '/>
                        </a>
                    </div>

                </div>
                <p>Та надішліть за адресою:</p>
                <Link className='font-semibold' href={'mailto:proffkomnikpnet@gmail.com'}>proffkomnikpnet@gmail.com</Link>
            </div>
            </div>
           
            <div className='grid gap-3 md:gap-5 lg:gap-10 grid-cols-3 grid-rows-4 w-full h-96 md:h-[calc(100vh+200px)]'>
                <div className='bg-slate-400 h-full w-full row-span-2'>
                    <Image 
                        src={pic1}
                        alt='діяльність профспілкової організації «Миколаївелектротранс»'
                        
                        className='h-full object-cover'
                    />
                </div>
                <div className='bg-slate-400 h-full w-full'>
                    <Image 
                        src={pic2}
                        alt='діяльність профспілкової організації «Миколаївелектротранс»'
                        
                        className='h-full object-cover'
                    />
                </div>
                <div className='bg-slate-400 h-full w-full'>
                    <Image 
                        src={pic3}
                        alt='діяльність профспілкової організації «Миколаївелектротранс»'
                        
                        className='h-full object-cover'
                    />

                </div>
                <div className='bg-slate-400 h-full w-full'>
                    <Image 
                        src={pic4}
                        alt='діяльність профспілкової організації «Миколаївелектротранс»'
                       
                        className='h-full object-cover'
                    />

                </div>
                <div className='bg-slate-400 h-full w-full'>
                    <Image 
                        src={pic5}
                        alt='діяльність профспілкової організації «Миколаївелектротранс»'
                        
                        className='h-full object-cover'
                    />

                </div>
                <div className='bg-slate-400 h-full w-full col-span-3 row-span-2'>
                    <Image 
                        src={pic6}
                        alt='діяльність профспілкової організації «Миколаївелектротранс»'
                        
                        className='h-full object-cover'
                    />
                </div>
            </div>

            
            
        </div>
    )
}