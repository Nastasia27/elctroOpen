import NewsItemByTag from "@/app/ui/news/NewsItemByTag";
import config from '@/app/config';
import BlackTitle from '@/app/ui/title/BlackTitle';
import Link from "next/link";

async function getData(tag) {

    const options = {
      
      cache: 'no-store' 
    };

    const res = await fetch(`${config.api}/api/tags?filters[title][$eq]=${tag}&populate=*`, options);
   
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }


export default async function CatagoryItem({params}) {
    const catagoryItems = await getData(params.catagoryItem);
    const catagoryItemsArray = catagoryItems.data[0].attributes.news_items.data.reverse();

    return(
        <div className="flex flex-col gap-5 min-h-screen w-screen bg-white p-5 pb-20">
            <div>
                <BlackTitle text={'новини'}/>
            </div>
            <div className='flex gap-2 text-[#008DD2] px-5 lg:px-20 py-2'>
                    <Link href='/news'>
                        <button>
                            #всі новини
                        </button>
                    </Link>
             </div>
             <div className="flex flex-col gap-5 px-5 lg:px-20">
                {catagoryItemsArray.map((item, index) => (
                    <div key={index}>
                        <Link href={`/news/id/${item.id}`}>
                            <NewsItemByTag 
                                    title={item.attributes.Title} 
                                    text={item.attributes.Description[0].children[0].text} 
                                    date={item.attributes.publishedAt}
                            />
                        </Link>
                    </div>
                ))}
             </div>

        </div>
    )
}