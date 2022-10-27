import React from 'react'
import img from "../assets/hoodie.jpeg"

function Designh() {
  return (
    <div className='flex  flex-row justify-center  '>
        <div className=' w-[70%] grid grid-cols-3 my-10 gap-10 grid-rows-3'>
        <div className='flex h-[100%] drop-shadow-lg px-3 py-3 bg-slate-100 hover:scale-110 flex-col text-center justify-center'>
            <img className=' flex h-[150%]  drop-shadow-lg  ' src={img}></img>
            <h1 className='my-4'>Price</h1>
            </div>
            <div className='flex h-[100%] drop-shadow-lg px-3 py-3 bg-slate-100 hover:scale-110 flex-col text-center justify-center'>
            <img className=' flex h-[150%]  drop-shadow-lg ' src={img}></img>
            <h1 className='my-4'>Price</h1>
            </div>
            <div className='flex h-[100%] drop-shadow-lg px-3 py-3 bg-slate-100 hover:scale-110 flex-col text-center justify-center'>
            <img className=' flex h-[150%]  drop-shadow-lg ' src={img}></img>
            <h1 className='my-4'>Price</h1>
            </div>
            <div className='flex h-[100%] drop-shadow-lg px-3 py-3 bg-slate-100 hover:scale-110 flex-col text-center justify-center'>
            <img className=' flex h-[150%]  drop-shadow-lg ' src={img}></img>
            <h1 className='my-4'>Price</h1>
            </div>
            <div className='flex h-[100%] drop-shadow-lg px-3 py-3 bg-slate-100 hover:scale-110 flex-col text-center justify-center'>
            <img className=' flex h-[150%]  drop-shadow-lg ' src={img}></img>
            <h1 className='my-4'>Price</h1>
            </div>
            <div className='flex h-[100%] drop-shadow-lg px-3 py-3 bg-slate-100 hover:scale-110 flex-col text-center justify-center'>
            <img className=' flex h-[150%]  drop-shadow-lg ' src={img}></img>
            <h1 className='my-4'>Price</h1>
            </div>
        
        
       
        </div>
        
    </div>
    
  )
}

export default Designh