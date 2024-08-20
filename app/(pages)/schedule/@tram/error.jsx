'use client' // Error components must be Client Components
 
import { useEffect } from 'react'
 
export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  const handleReload = () => {
    window.location.reload();
  }
 
  return (
    <div className='p-5 px-10 flex flex-col gap-5 text-start'>
      <h2>Упс...Щось пішло не так</h2>
      <button
        className='text-start'
        onClick={handleReload}
      >
        Спробуйте оновити сторінку ще раз
      </button>
    </div>
  )
}