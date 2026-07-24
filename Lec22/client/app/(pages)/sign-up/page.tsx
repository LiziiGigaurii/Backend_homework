"use client"
import React, {AnyActionArg, useState} from 'react'
import { useForm } from "react-hook-form"
import { SignUpchema } from '../validators/Sign-Up'
import { yupResolver } from '@hookform/resolvers/yup'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import axios from "axios"

export default function SignUp() {

  const {register, handleSubmit, formState: { errors }} = useForm({
    resolver: yupResolver(SignUpchema)
  })

  const [error,setError] = useState("")

  const router = useRouter()

  async function onSubmit(data) {
    try {
      setError("")
      const res = await axios.post("http://localhost:3030/auth/sign-up", data)
      if (res.status === 200) {
        router.push("/sign-in")
      }

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className='flex items-center justify-center h-screen bg-slate-950 text-slate-100'>
        <form onSubmit={handleSubmit(onSubmit)} className='h-auto w-[400px] bg-slate-900 p-6 rounded-2xl flex flex-col gap-4 border border-slate-800 shadow-xl'>

          <input type="text" placeholder="username" className='border border-slate-700 rounded-xl pl-4 py-4 bg-slate-800/50 text-slate-100 placeholder-slate-400 outline-none focus:border-blue-500' {...register("username")}/>
          <p className='text-xs text-rose-400'>{errors.username?.message}</p>

          <input type="text" placeholder="email" className='border border-slate-700 rounded-xl pl-4 py-4 bg-slate-800/50 text-slate-100 placeholder-slate-400 outline-none focus:border-blue-500' {...register("email")}/>
          <p className='text-xs text-rose-400'>{errors.email?.message}</p>

          <input type="password" placeholder="password" className='border border-slate-700 rounded-xl pl-4 py-4 bg-slate-800/50 text-slate-100 placeholder-slate-400 outline-none focus:border-blue-500' {...register("password")}/>
          <p className='text-xs text-rose-400'>{errors.password?.message}</p>
          
          <button type="submit" className='bg-blue-600 hover:bg-blue-500 text-white rounded-xl py-3 font-medium transition-colors cursor-pointer'>Sign-Up</button>

          <div className='flex items-center justify-center gap-2 text-sm text-slate-400 mt-2'>
            <span>Already have an account?</span>
            <Link className='text-blue-400 hover:text-blue-300 hover:underline font-medium transition-colors' href="/sign-in">
              Sign in
            </Link>
          </div>

        </form>
      </div>
    </>
  )
}