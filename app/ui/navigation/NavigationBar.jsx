'use client';

import Image from 'next/image';
import Link from 'next/link';
import clsx from 'clsx';
import { montserrat } from '../fonts';
import logo from '@/public/logo.png';
import arrow from "@/public/navbar/arrow.svg";
import { useState } from 'react';
import SubNavigation from '../navigation/SubNavigation';


const links  = [
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
  { name: 'prozzoro',
    href: 'https://prozorro.gov.ua/uk/search/tender?text=03328468',
  },
];
const contactLink = [
  { name: 'Контакти', href: '/contacts'},
]

export default function NavigationBar() {

  const [hovered, setHovered] = useState(null);

  return (
    <nav className={`${montserrat.className} hidden md:flex w-full flex-row bg-[#32363C] bg-opacity-95 px-10 lg:px-20 py-5 uppercase items-center justify-between fixed top-0 z-50`}>
      <div className='flex flex-row justify-start'> 
        <Link href={'/home'}>
          <Image
              src={logo}
              alt="Логотип КП МПП Миколаївелектротранс"
              width={60} 
              height={'auto'}
            />
        </Link>
       <div className='flex flex-row justify-start'>
        {links.map((link, index) => (
            <div key={index}>
              <Link
                  key={link.name}
                  href={link.href}
                  className={clsx('flex items-center justify-center gap-1 lg:gap-3 text-xs lg:text-base font-black text-white hover:text-[#008DD2]  p-2 px-5 relative',
                  )}
                  onMouseEnter={() => setHovered(link.name)}
                  onMouseLeave={() => setHovered(null)}
                >
                  <p className="block">{link.name}</p>
                  {link.subItems && (
                    <Image
                    src={arrow}
                    alt="стрілка"
                    width={20} 
                    className={clsx('flex items-center justify-center',
                  {
                    'rotate-90' : hovered === link.name,
                  })}
                  />)}
                 
                  {link.subItems && hovered === link.name && (
                    <SubNavigation items={link.subItems} isHovered={true}/>
                  )}
                  
              </Link>
            </div>
        ))}
        </div>
        </div>
     
        <div className='flex flex-row justify-between'> 
          {contactLink.map((link, index) => (
              <div key={index}>
                  <Link
                    key={link.name}
                    href={link.href}
                    className={clsx('flex  items-center justify-center gap-3 text-xs lg:text-base  font-black text-white hover:text-[#008DD2] md:justify-start md:p-2 md:px-5'
                    )}
                  >
                    <p className="block">{link.name}</p>
                  </Link>
              </div>
          ))}
      </div>
    </nav>
  );
}

