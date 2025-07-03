import React from 'react';
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillYoutube,
  AiOutlineMail,
  AiTwotoneHeart,
  AiFillInstagram,
} from 'react-icons/ai';
import { MdEmail, MdPhone } from 'react-icons/md';

const Footer = () => {
  return (
    <footer className="bg-[#0e1628] text-white py-12 px-4 md:px-10">
      <div className="flex flex-col justify-between gap-10 mx-auto max-w-7xl md:flex-row">

        {/* Left Section */}
        <div className="flex-1">
          <h2 className="mb-4 text-2xl font-bold">Varun Raj</h2>
          <p className="mb-2 text-sm text-gray-400 md:text-base">
            Passionate MERN Stack developer creating elegant web solutions with performance and user experience in mind.
          </p>
          <p className="text-sm text-gray-400 md:text-base">
            Open to freelance projects and collaborations across the globe.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1">
          <h2 className="mb-4 text-xl font-semibold">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-400 md:text-base">
            <li><a href="#about" className="transition hover:text-white">About</a></li>
            <li><a href="#projects" className="transition hover:text-white">Projects</a></li>
            <li><a href="#skills" className="transition hover:text-white">Skills</a></li>
            <li><a href="#contact" className="transition hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Connect Section */}
        <div className="flex-1">
          <h2 className="mb-4 text-xl font-semibold">Connect</h2>
          <div className="flex flex-wrap gap-3 mb-4">
            <a href="https://github.com/varunraj923" target="_blank" rel="noreferrer" className="p-2 transition bg-gray-800 rounded-lg hover:bg-white hover:text-black">
              <AiFillGithub size={22} />
            </a>
            <a href="https://www.linkedin.com/in/varunraj23" target="_blank" rel="noreferrer" className="p-2 transition bg-blue-700 rounded-lg hover:bg-white hover:text-blue-700">
              <AiFillLinkedin size={22} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noreferrer" className="p-2 transition bg-red-600 rounded-lg hover:bg-white hover:text-red-600">
              <AiFillYoutube size={22} />
            </a>
            <a href="mailto:varunraj1545@gmail.com" className="p-2 transition bg-green-600 rounded-lg hover:bg-white hover:text-green-600">
              <AiOutlineMail size={22} />
            </a>
            <a href="https://www.instagram.com/rajvarun450" target="_blank" rel="noreferrer" className="p-2 transition rounded-lg bg-gradient-to-tr from-pink-500 via-red-500 to-yellow-500 hover:opacity-90">
              <AiFillInstagram size={22} />
            </a>
          </div>

          <div className="space-y-1 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <MdEmail /> varunraj1545@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <MdPhone /> (+91) 7827092040
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="pt-6 mt-10 text-xs text-center text-gray-500 border-t border-gray-700 sm:text-sm">
        <p className="flex items-center justify-center gap-1">
          Made with <AiTwotoneHeart className="text-red-500" /> using React & Tailwind CSS
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Varun Raj. All rights reserved. | Open to exciting freelance opportunities and innovative collaborations.
        </p>
      </div>
    </footer>
  );
};

export default Footer;




