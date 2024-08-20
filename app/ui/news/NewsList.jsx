import NewsItem from "./NewsItem";
import config from '@/app/config';
import Link from "next/link";
import { Suspense } from 'react';
import SkeletonNewsItem from "./SkeletonNewsItem";

export default function NewsList({news}) {
    const newsSort = news.data.reverse();

    return(
        <div className='flex flex-col gap-5  lg:px-20'>
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
    )
}