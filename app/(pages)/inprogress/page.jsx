'use client';
import WhiteButton from '@/app/ui/buttons/WhiteButton.jsx';

export default function Page() {
    return(
        <div className=" bg-white w-screen min-h-screen flex flex-col justify-center items-center gap-10">
            <h1 className='uppercase font-black'>Сторінка в розробці</h1>
            <p> Зараз ця сторінка знаходиться в стадії розробки.</p>
            <WhiteButton text={'повернутись на головну сторінку'} href={'/home'}/>

        </div>
    )
}