import React from 'react'

export default function dashboard() {
  return (
    <>
      <div className='min-h-screen bg-slate-950 text-slate-100 p-8 flex flex-col items-center justify-center gap-3'>
        <div className='bg-slate-900 border border-slate-800 rounded-2xl p-8 text-center max-w-sm w-full shadow-xl'>
          <h1 className='text-3xl font-bold text-slate-100 mb-2'>Dashboard</h1>
          <p className='text-emerald-400 font-medium text-sm bg-emerald-500/10 border border-emerald-500/20 py-2 px-4 rounded-xl inline-block'>
            Successfully logged in!
          </p>
        </div>
      </div>
    </>
  )
}