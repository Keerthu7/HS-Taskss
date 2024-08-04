import React, { useState } from 'react';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
    const [toggleMenu , setToggle] = useState (false)
  return (
   <header className='flex justify-between px-7 py-5 bg-primary' >
        <a href="#" className=' font-bold flex text-white'>Keerthu's</a>
        <nav className='hidden md:block '>
        <ul className='flex text-white '>
            <li><a href="C:\Users\Keerthana\Desktop\HS-Tasks\my-project\src\Homee.js">Home</a></li>
            <li><a href="C:\Users\Keerthana\Desktop\HS-Tasks\my-project\src\About.js">About</a></li>
            <li><a href="C:\Users\Keerthana\Desktop\HS-Tasks\my-project\src\Contact.js">Contacts</a></li>
        </ul>
        </nav>
        { toggleMenu &&<nav className='block md:hidden'>
        <ul className='flex flex-col text-white mobile-nav'>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contacts</a></li>
        </ul>
        </nav>}
        <button onClick ={()=> setToggle(!toggleMenu)}className='block md:hidden'><Bars3Icon className= 'text-white h-5' /></button>
    </header>
  )
}

export default Header;