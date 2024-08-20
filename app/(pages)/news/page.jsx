
import NewsItem from '@/app/ui/news/NewsItem';
import BlackTitle from '@/app/ui/title/BlackTitle';
import config from '@/app/config';
import TagButton from '@/app/ui/news/TagButton';
import NewsList from '@/app/ui/news/NewsList';

export const metadata = {
  title: 'Новини про рух електротранспорту в Міколаєві на КП ММР “МИКОЛАЇВЕЛЕКТРОТРАНС”',
  description: 'НовіРозклад руху електротранспорту в Миколаєві',
}

export const dynamic = 'force-dynamic';

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

  async function getTagList() {
    const options = {
      
    };

    const res = await fetch(`${config.api}/api/tags`, options, {cache: 'no-store'});
    if (!res.ok) {
      console.error('failed to fetch data:', res.status);
      throw new Error('Failed to fetch data')
    }
    const data = await res.json();
    return data;
  }

  export async function generateStaticParams() {
    const tags = await getTagList();
    const news = await getData();


    return tags.data.map((item) => ({
        catagoryItem: item.attributes.title,
    }))
}




export default async function NewsServer() {
    const news = await getData();
    const tags = await getTagList();

    return(
        <div className='flex flex-col gap-5 min-h-screen w-screen bg-white p-5 pb-20 pt-0 lg:pt-0 '>
            <div>
                <BlackTitle text={'новини'}/>
            </div>
            <div className='flex flex-col justify-start'>
                <TagButton tags={tags}/>
                <NewsList news={news}/>
            </div>
        </div>
    )
}