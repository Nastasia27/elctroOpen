import Link from "next/link";

export default async function TagButton({tags}) {

    return(
        
        <div className='flex gap-2 flex-grow flex-wrap text-[#008DD2] px-5 lg:px-20 py-2'>
                {tags.data.map((item, index) => (
                    <div key={index}>
                        <Link href={`/news/catagory/${item.attributes.title}`}>
                            <button >
                                #{item.attributes.tag}
                            </button>
                        </Link>
                    </div>
                ))} 
                
        </div>
    )
}