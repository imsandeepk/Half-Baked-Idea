import React from 'react'

function Navbar() {
  return (
    <div className=' flex bg-slate-600 flex-row justify-between h-[100%] w-[100%] shadow-md '>
      <h1 className='px-4 py-4'>LOGO</h1>
      <div className='flex text-center justify-center flex-row'>
      <button className=' mx-2 bg-slate-300 px-2 rounded-sm self-center items-center transition  hover:scale-[120%] '>Sign In</button>
      <button className='bg-slate-300 px-2 mx-2 self-center rounded-sm items-center transition hover:scale-[120%] '>Sign Up</button>
      </div>  
    </div>
  )
}

export default Navbar