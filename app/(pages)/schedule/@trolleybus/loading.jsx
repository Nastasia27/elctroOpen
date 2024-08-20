import SkeletonNewsItem from '@/app/ui/news/SkeletonNewsItem.jsx';
import SkeletonNewsList  from '@/app/ui/news/SkeletonNewsList.jsx'

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
      <div className="bg-[#F8F8F8] animate-pulse w-screen p-5 lg:p-10 flex flex-col gap-5">
                <div className="flex gap-4 flex-col items-start justify-start relative">
                    <div className='w-20 h-10 bg-slate-300 rounded-lg'></div>
                    <div className='w-40 h-8 bg-slate-300 rounded-lg'></div>     
                </div>
            </div>
    )
  }