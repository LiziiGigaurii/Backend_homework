import React from 'react'
import Link from 'next/link'

export default function Home() {
  return (
   <>
   <div className='min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col items-center justify-center gap-3'>
      <div className='bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-sm w-full shadow-xl flex flex-col gap-3'>
        <h1 className='text-3xl font-bold text-slate-100'>Hello!</h1>
        
        <Link href="/sign-up" 
          className='text-blue-400 hover:text-blue-300 hover:underline font-medium text-sm transition-colors'>
          Go to /sign-up
        </Link>
      </div>
    </div>
   </>
  )
}
