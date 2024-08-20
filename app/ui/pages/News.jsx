
import { montserrat } from "../fonts";
import NewsItem from "../news/NewsItem";
import config from '@/app/config';
import Link from "next/link";

async function getData() {
    const options = {
    };

    const res = await fetch(`${config.api}/api/news-items?populate=*`, { cache: 'no-store' });
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }

export default async function News() {
    const newsAr = await getData();
    const newsSort = newsAr.data.reverse().slice(0, 3);

   
    return(
        <div className={` ${montserrat.className} bg-white flex flex-col justify-start relative items-center overflow-hidden gap-5 lg:gap-10 pb-10`}>
            <h1 className="font-black uppercase pt-20 text-black">новини</h1>
            <div className="flex flex-col gap-5 w-5/6">
                {newsSort.map((item, index) => (
                    <div key={index}>
                        <Link href={`/news/id/${item.id}`}>
                            <NewsItem 
                                image={`${item.attributes.Image.data[0].attributes.formats.small.url}`} 
                                title={item.attributes.Title} 
                                text={item.attributes.Description[0].children[0].text} 
                                date={item.attributes.publishedAt}/>
                        </Link>  
                    </div>
                ))}    
            </div>

        </div>
    )
}