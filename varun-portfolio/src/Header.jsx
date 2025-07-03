import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  AiOutlineHome,
  AiOutlineCode,
  AiOutlineTrophy,
  AiOutlineMail,
  AiFillYoutube,
  AiOutlineDownload,
  AiOutlineExperiment,
  AiOutlineMenu,
  AiOutlineClose,
} from 'react-icons/ai';

const Header = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const active = (path) =>
    location.pathname === path
      ? 'bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg flex items-center space-x-1 transition duration-300'
      : 'text-gray-700 hover:text-blue-600 flex items-center space-x-1 transition duration-300';

  return (
    <header className="relative flex items-center justify-between px-6 py-4 bg-white shadow-md">
      {/* Logo */}
      <Link
        to="/"
        className="text-3xl font-extrabold text-blue-900 transition duration-300 hover:text-blue-600"
      >
        &lt;Varun Raj/&gt;
      </Link>

      {/* Desktop Navigation */}
      <nav className="items-center hidden space-x-6 text-sm font-medium md:flex">
        <Link to="/" className={active('/')}>
          <AiOutlineHome className="text-lg" />
          <span>Home</span>
        </Link>

        <Link to="/Projects" className={active('/Projects')}>
          <AiOutlineCode className="text-lg" />
          <span>Projects</span>
        </Link>

        <Link to="/Experience" className={active('/Experience')}>
          <AiOutlineExperiment className="text-lg" />
          <span>Experience</span>
        </Link>

        <Link to="/Contact" className={active('/Contact')}>
          <AiOutlineMail className="text-lg" />
          <span>Contact</span>
        </Link>

        <a
          href="https://www.youtube.com/@careerbooster880"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-1 text-gray-700 transition duration-300 hover:text-red-500"
        >
          <AiFillYoutube className="text-lg" />
          <span>YouTube</span>
        </a>
      </nav>

      {/* Resume Button for Desktop */}
      <a
        href="https://drive.google.com/file/d/1nqyNhfvNiZCNe9W7gRLqKF8PzTpc0Qk6/view?usp=drivesdk"
        target="_blank"
        rel="noopener noreferrer"
        className="items-center hidden px-4 py-2 font-medium text-white transition-all duration-300 rounded-lg md:flex bg-gradient-to-r from-blue-600 to-green-500 hover:brightness-110 hover:scale-105"
      >
        <AiOutlineDownload className="mr-2" />
        Resume
      </a>

      {/* Mobile Menu Icon */}
      <div className="md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="absolute left-0 z-50 flex flex-col items-start w-full px-6 py-4 space-y-4 text-sm font-medium bg-white shadow-lg top-16 rounded-b-xl md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)} className={active('/')}>
            <AiOutlineHome className="text-lg" />
            <span>Home</span>
          </Link>

          <Link to="/Projects" onClick={() => setMenuOpen(false)} className={active('/Projects')}>
            <AiOutlineCode className="text-lg" />
            <span>Projects</span>
          </Link>

          <Link to="/Experience" onClick={() => setMenuOpen(false)} className={active('/Experience')}>
            <AiOutlineExperiment className="text-lg" />
            <span>Experience</span>
          </Link>

          <Link to="/Contact" onClick={() => setMenuOpen(false)} className={active('/Contact')}>
            <AiOutlineMail className="text-lg" />
            <span>Contact</span>
          </Link>

          <a
            href="https://www.youtube.com/@careerbooster880"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 text-gray-700 hover:text-red-500"
            onClick={() => setMenuOpen(false)}
          >
            <AiFillYoutube className="text-lg" />
            <span>YouTube</span>
          </a>

          <a
            href="https://drive.google.com/file/d/1nqyNhfvNiZCNe9W7gRLqKF8PzTpc0Qk6/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center px-3 py-2 font-medium text-white rounded-lg bg-gradient-to-r from-blue-600 to-green-500 hover:brightness-110 hover:scale-105"
          >
            <AiOutlineDownload className="mr-2" />
            Resume
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;



