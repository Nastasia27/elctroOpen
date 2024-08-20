import NewsItemByTag from "@/app/ui/news/NewsItemByTag";
import config from '@/app/config';
import BlackTitle from '@/app/ui/title/BlackTitle';
import Link from "next/link";
import Image from "next/image";
import { montserrat } from "@/app/ui/fonts";
import NewsImage from '@/app/ui/news/NewsImage.jsx';

async function getData(newsId) {

    const options = {
      cache: 'no-store' 
    };

    const res = await fetch(`${config.api}/api/news-items/${newsId}?populate=*`, options);
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }


export default async function NewsById({params}) {
    const id = await getData(params.id);

    const mainText = id.data.attributes.Description;
    const images = id.data.attributes.Image.data;


    return(
        <div className={`${montserrat.className} flex flex-col text-sm lg:text-lg gap-5 min-h-screen w-screen bg-white text-black p-5 lg:p-20 pb-20 pt-28 lg:pt-36`}>
            <div>
                <p className="">{id.data.attributes.publishedAt.substring(0,10)}</p>
            </div>
            <div className={`  flex text-sm lg:text-lg flex-col justify-center items-start `}>
                <h1 className="font-black uppercase ">
                    {id.data.attributes.Title}
                </h1>
            </div>
            <div className='flex gap-2 text-[#008DD2] '>
                    <Link href='/news'>
                        <button>
                            #всі новини
                        </button>
                    </Link>
             </div>
             <div className="flex flex-col gap-5 ">
                {mainText.map((item, index) => (
                    <div key={index}>
                        {item.type === 'paragraph' &&
                         <div key={index}>
                            <p>
                                {item.children[0].text}
                            </p>
                            {item.children[1] && 
                                <Link className="font-semibold" href={item.children[1].url}>{item.children[1].children[0].text}</Link>
                            }
                         </div>
                         }
                         {item.type === 'list' &&
                            <div key={index}>
                                <ul className=" list-disc list-inside">
                                    <li>{item.children[0].children[0].text}</li>
                                    {item.children[0].children[1] && 
                                        <Link href={item.children[0].children[1].url}>{item.children[0].children[1].children[0].text}</Link>
                                    }
                                </ul>
                            </div>
                         }

                    </div>
                    // <p key={index} >
                    //     {item.children[0].text}
                    //     {item.children[1] && 
                    //         <Link className="text-[#008DD2]" href={item.children[1].url}>
                    //             {item.children[1].url}
                    //         </Link>}
                    //     {item.children[0].children[0].text && 
                    //         <ul className="">
                    //             <li></li>
                    //         </ul>
                    //     }
                    // </p>
                ))}
             </div >
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-5 ">
                {images.map((item, index) => (
                    <div key={index}>
                            <NewsImage 
                                imageUrl={item.attributes.formats.large.url} 
                                imageAlt={id.data.attributes.Title}
                            />
                    </div>
                ))}
            </div>

        </div>
    )
}