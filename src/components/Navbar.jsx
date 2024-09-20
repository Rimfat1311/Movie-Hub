import React from 'react'
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import icon from '../assets/icon.png'

const Navbar = () => {
  return (
    <div className='fixed top-0 w-full flex bg-black transperen bg-opacity-50 text-white justify-between px-6 py-5 z-40'>
        <div className='flex gap-5 cursor-pointer items-center' >
            <span className='flex'>
              <Link to="/"><img src="https://movieoapp.vercel.app/static/media/logo.5f76119f8f1f473eea2f.png" className='w-[120px]' alt="Home" /></Link>
             </span>
            <p className='font-light text-base'><Link to="/tvshows">TV Shows</Link></p>
            <p className='font-light text-base'><Link to="/movies">Movies</Link></p>
           
            
        </div>
        <div className='flex gap-5 items-center'>
            <input placeholder='Search here...' className='bg-transparent border-none outline-none text-sm w-44'/>
          <button><CiSearch className='text-2xl font-bold'/></button>
          <button><img src={icon} className='rounded-full w-8'/></button>
        </div>
         

    
    </div>
  )
}

export default Navbar
