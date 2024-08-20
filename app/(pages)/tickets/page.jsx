import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import BlackTitle from "@/app/ui/title/BlackTitle";
import TicketImage from "../../ui/pages/tickets/ticketImage";
import ticketGromadMonth from '@/public/tickets/ticketGromadMonth.JPG';
import ticketGromad from '@/public/tickets/ticketGromad.JPG';
import ticketStudentMonth from '@/public/tickets/ticketStudentMonth.JPG';
import TableTicketPrice from "../../ui/pages/tickets/tableTicketPrice.jsx";
import Link from "next/link";
import TicketSingleImage from "../../ui/pages/tickets/ticketSingletImage.jsx";
import qrcode from '@/public/tickets/qrcode.svg';
import tralleybus from '@/public/tickets/tralleybus.jpeg';
import qrinhand from '@/public/tickets/qrinhand.JPG';
import SmallTitle from "@/app/ui/title/SmallTitle";
import qrInTram from '@/public/tickets/qrInTram.JPG';
import ticketPay from '@/public/tickets/ticketPay.jpg';

export const metadata = {
    title: 'Інформація про проїзні квитки КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
    description: 'Прідбати проїзний квіток можна окремо для тролейбусів чи трамваїв в касі або за допомогою QRкоду',
  }

export default function Page() {
    const ticketsArray = [
        {
            img:ticketGromadMonth,
            description:'Громадський на місяць'
        },
        {
            img:ticketGromad,
            description:'Громадський на 15 діб'
        },
        {
            img:ticketStudentMonth,
            description:'Студентський на місяць'
        }
    ]

    const addressList = [
        'просп. Центральний/3-тя Слобідська;',
        'ринок "Колос" (зупинка "Автовокзал");',
        'Чорноморський суднобудівний завод (поворотне кільце);',
        'вул. Декабристів/Сінна;',
        'вул. Декабристів/Потьомкінська;',
        'просп. Героїв України (зупинка Шкільна);',
        'вул. Космонавтів/вул. Баштанське шосе;',
        'вул. Декабристів/просп. Центральний;',
        'трамвайна зупинка ринок «Колос».'
    ]

   
    return(
        <div className={` ${montserrat.className} text-black text-justify px-10 text-xs lg:text-base bg-white min-h-screen w-full pt-0 lg:pt-0 lg:p-28 lg:pb-10 pb-10 flex flex-col gap-5`}>
            <div>
                <BlackTitle text='пРОїЗНИЙ КВИТОК'/>
            </div>
            <div className="flex flex-col justify-center gap-5 ">
                <h2 className="font-black">Купуючи проїзний квиток, ви робите свою поїздку більш економною та зручною:</h2>
                <ul className="list-disc list-inside text-left pl-5">
                    <li>Не потрібно під час кожної поїздки шукати та діставати готівку для оплати;</li>
                    <li>Немає ніяких обмежень за кількістю поїздок за один день;</li>
                    <li>Проїзний абонемент не потрібно компостувати;</li>
                    <li>Уникнення додаткових питань з боку служби контролю.</li>
                </ul>
                <p> 
                    Можна обрати варіант проїзного, який підходить саме для вашого звичного ритму переміщення містом – окремо для тролейбусів чи трамваїв, або ж поєднати ці види транспорту в одному квитку. Також можна обрати тривалість дії – на 2 дні, 15 днів або місячний квиток (діє з 1 числа до останнього дня місяця, коли був придбаний).
                </p>
            </div>
            <div className="flex flex-col gap-5 justify-center items-center">
                <div className="flex flex-col md:flex-row lg:flex-col gap-5 lg:gap-10">
                    <div className="flex flex-col lg:flex-row gap-5 justify-center items-center">
                        {ticketsArray.map((item, index) => (
                            <div key={index}>
                                <TicketImage image={item.img} description={item.description}/>
                            </div>
                        ))}
                    </div>
                    <div>
                        <TableTicketPrice/>
                    </div>
                </div>
            </div>
                <div className="flex flex-col justify-start items-start ">
                    <p className="font-black">
                         Придбати проїзні квитки можна в спеціалізованих кіосках КП ММР «Миколаївелектротранс» за адресами:
                    </p>
                    <ul className="list-disc list-inside text-left p-5">
                        {addressList.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                <div className=" grid grid-cols-5 gap-5 lg:gap-10">
                    <div className=" w-full h-full col-span-3">
                        <Image 
                            src={qrinhand} 
                            alt="фото коду для купівлі квитка"
                            width={800}
                            height={500}
                            
                        />
                    </div>
                    <div className="relative col-span-2">
                        <div className="h-5/6 w-full">
                            <Image 
                                src={tralleybus} 
                                alt="фото qr-коду для купівлі квитка"
                                width={800}
                                height={500}

                            />
                        </div>
                        <div className=" absolute bottom-0 right-[17%] w-2/3 lg:w-1/2 lg:right-[25%] bg-white ">
                            <Image 
                                    src={qrcode} 
                                    alt="фото qr-коду для купівлі квитка"
                                    width={500}
                                    height={300}
                                />
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-5">
                    <p>
                        Придбати проїзний можна за посиланням: <Link href='https://pay.mbnk.biz/nEArEmKpvxTT ' className="font-black">https://pay.mbnk.biz/nEArEmKpvxTT </Link> або безпосередньо в транспорті, відсканувавши <span className="font-semibold">єдиний QR-код для всіх банків України камерою телефону.</span>
                    </p>
                    <p>
                        Після оплати проїзного, Ви може зберегти його в мобільному гаманці або обравши інший зручний спосіб з тих, які вам запропонує система оплати (переслати на електронну пошту, у збережених повідомленнях у WhatsApp, Telegram, Viber або в інших месенджерах).
                    </p>
                    <p>
                        Звертаємо додаткову увагу, що для ідентифікації власного проїзного потрібно ввести прізвище та ім’я. 
                    </p>
                </div>
                <div>
                    <p className="font-black">
                         Основні нюанси користування системою єдиного QR-коду:
                    </p>
                    <ul className="list-disc list-inside text-left p-5">
                        <li>
                            сканування QR-коду потрібно робити виключно через камеру мобільного телефону;
                        </li>
                        <li>
                            якщо у вас не виходить зробити сканування камерою телефону - встановіть будь-який додаток зчитування QR-кодів, наприклад: <Link href='https://play.google.com/store/apps/details?id=com.gamma.scan'>https://play.google.com/store/apps/details?id=com.gamma.scan </Link>;
                        </li>
                        <li>
                            також можна здійснити необхідну оплату за посиланням: <Link href='https://pay.mbnk.biz/nEArEmKpvxTT'> https://pay.mbnk.biz/nEArEmKpvxTT.</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <TicketSingleImage/>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <SmallTitle name={'Разовий онлайн квиток'}/>
                    <div className="w-full relative flex justify-center items-center">
                        <Image 
                            src={qrInTram}
                            alt='qr код для купівлі квитка'
                            width={1000}
                            height={600}
                            className="w-full object-cover"
                        />
                        <div className="absolute top-[16%] left-[16%] w-[21%] rounded-md overflow-hidden shadow-sm shadow-white">
                            <Image 
                                src={ticketPay}
                                alt='qr код для купівлі квитка'
                                width={500}
                                height={600}
                                className="w-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            
            
        </div>
    )
}