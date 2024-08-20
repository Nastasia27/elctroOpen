'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { montserrat } from '../fonts';
import logo from '@/public/logo.png';
import { useState } from 'react';
import ModalNavigationMobile from './ModalNavigationMobile';
import Link from 'next/link';


const links  = [
  {name: 'новини', href: '/news',},
  { name: 'про нас', 
    href: '', 
    subItems: [
     {subname: 'Історія підприємства', href: '/history'},
     {subname: 'Структура (схематично, керівництво)', href: '/structure'},
     {subname: 'Рухомий склад', href: '/rollingstock'},
     {subname: 'Загальні відомості', href: '/general'},
     {subname: 'Вакансії', href: '/vacancies'},
     {subname: 'Нормативна база', href: '/normativebase'},
     {subname: 'Діяльність профспілки', href: '/union'},
    ]},
  { name: 'Наші можливості', 
    href: '',
    subItems: [
      {subname: 'Оплата QR-код', href: '/tickets'},
      {subname: 'Розміщення реклами', href: '/advertisement'},
      {subname: 'Оренда', href: '/rent'},
      {subname: 'Навчання', href: '/education'},
     ]
  },
  { name: 'prozzoro', href: 'https://prozorro.gov.ua/uk/search/tender?text=03328468',},
  { name: 'Розклад руху', href: '/schedule'},
  { name: 'Контакти', href: '/contacts'},
];


export default function NavigationMobile() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`${montserrat.className} flex md:hidden flex-row w-screen bg-[#32363C] bg-opacity-95 px-10 lg:px-20 py-5 uppercase items-center justify-between fixed top-0 z-50`}>
      <div className='flex flex-row w-screen justify-between font-black text-white hover:text-[#008DD2]  p-2 px-5 relative'> 
      <Link href={'/home'}>
          <Image
              src={logo}
              alt="Логотип КП МПП Миколаївелектротранс"
              width={60} 
              height={'auto'}
            />
        </Link>
        <button onClick={() => setIsOpen(true)} className='uppercase text-base'>меню</button>
        
      </div>
      {isOpen && <ModalNavigationMobile navItem={links} isOpen={isOpen} setIsOpen={setIsOpen}/>}
          
    </nav>
  );
}

