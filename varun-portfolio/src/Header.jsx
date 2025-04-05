import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  // Toggle the mobile menu state
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close the menu after clicking a link
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='flex items-center justify-between bg-gradient-to-r from-black via-gray-800 to-gray-900 p-4'>
      {/* Logo Section */}
      <div className='text-3xl font-bold text-[#16f2b3]'>
        <Link to="/">VARUN RAJ</Link>
      </div>

      {/* Hamburger Icon for Mobile and Tablet */}
      <div className='md:hidden'>
        <button onClick={toggleMenu} className='text-white focus:outline-none' aria-label={isOpen ? 'Close menu' : 'Open menu'}>
          {/* Hamburger icon */}
          <svg
            className={`w-6 h-6 ${isOpen ? 'hidden' : 'block'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
          </svg>
          {/* Close icon */}
          <svg
            className={`w-6 h-6 ${isOpen ? 'block' : 'hidden'}`}
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
          </svg>
        </button>
      </div>

      {/* Navigation Links */}
      <nav className={`fixed inset-0 bg-gray-800 bg-opacity-90 md:static md:bg-transparent transition-transform duration-300 ease-in-out transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:translate-x-0 md:flex md:items-center`}>
        <ul className='flex flex-col md:flex-row text-white p-4 md:p-0 md:space-x-8'>
          <li className='hover:text-pink-600 my-2 md:my-0'>
            <Link to="/" onClick={closeMenu}>HOME</Link>
          </li>
          <li className='hover:text-pink-600 my-2 md:my-0'>
            <Link to="/About" onClick={closeMenu}>ABOUT</Link>
          </li>
          <li className='hover:text-pink-600 my-2 md:my-0'>
            <Link to="/Skills" onClick={closeMenu}>SKILLS</Link>
          </li>
          <li className='hover:text-pink-600 my-2 md:my-0'>
            <Link to="/Projects" onClick={closeMenu}>PROJECTS</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;


