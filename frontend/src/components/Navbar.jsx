import React from 'react'
import DropDownButton from '../elements/DropDownButton'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <header class="p-3 bg-transparent drop-shadow-lg dark:bg-[#040D12]">
        <nav class=" flex justify-around">
            <h2 class=" text-2xl font-extrabold text-slate-800 dark:text-white">
                Krishna<span className='text-orange-700'>'</span>s<span className='text-blue-700'>Mercy</span>
            </h2>
            <ul class="hidden gap-6 text-center text-[1rem] md:flex dark:text-white">
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li>
                <DropDownButton/>
            </li>
            </ul>
        </nav>
    </header>
  )
}

export default Navbar