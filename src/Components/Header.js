import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Bars3Icon } from '@heroicons/react/24/solid';

const Header = () => {
  const [toggleMenu, setToggle] = useState(false);
  
  return (
    <header className='flex justify-between px-7 py-5 bg-primary'>
      <Link to="/" className='font-bold flex text-white'>Keerthu's</Link>
      <nav className='hidden md:block'>
        <ul className='flex text-white'>
          <li>Home</li>
          <li>Contact</li>  
          <li>Task</li>
        </ul>
      </nav>
      {toggleMenu && <nav className='block md:hidden'>
        <ul className='flex flex-col text-white mobile-nav'>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
        </ul>
      </nav>}
      <button onClick={() => setToggle(!toggleMenu)} className='block md:hidden'>
        <Bars3Icon className='text-white h-5' />
      </button>
    </header>
  );
};

export default Header;
