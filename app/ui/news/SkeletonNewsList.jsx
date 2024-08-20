import SkeletonNewsItem from '@/app/ui/news/SkeletonNewsItem.jsx';

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className='flex flex-col gap-10 animate-pulse min-h-screen w-screen bg-white p-5 pb-20'>
            <div className='pt-20 w-full flex items-center justify-center'>
                <div className='h-5 w-24 rounded-lg bg-slate-300'></div>    
            </div>
            <SkeletonNewsItem/>
            <SkeletonNewsItem/>
  
        </div>
    )
  }