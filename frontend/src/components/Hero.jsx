import React from 'react'
import { Outlet } from 'react-router-dom'
import img from "../assets/design.jpeg"

function Hero() {
  return (
    <div>
    <div className='w-[100%] h-[140%] flex justify-center content-center bg-slate-600 drop-shadow-md shadow-md'>
        <div className='flex flex-col'>
        <h2 className='text-2xl self-center text-white'>Get Your Favorite Designs Here</h2>
        <img className=' w-100 h-96 self-center my-10 drop-shadow-lg' src={img}/>
        </div>
        
    </div>
    <Outlet/>
    </div>
    
  )
}

export default Hero