import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Catogery() {
    const navtotshirt=()=>{
        
    }
  return (
    <div>
    <div  className='flex mt-20 flex-row justify-center'>
        <button onClick={navtotshirt} className='px-4 rounded-md mx-1 h-[120%] w-auto bg-slate-400 hover:scale-110 '><Link to="/catogery/tshirts">Tshirts</Link></button>
        <button className='px-4 rounded-md mx-1 h-[120%] w-auto bg-slate-400 hover:scale-110 '> <Link to="/catogery/hoodies">Hoodies</Link></button>
    </div>
    <Outlet/>
    </div>
  )
}

export default Catogery