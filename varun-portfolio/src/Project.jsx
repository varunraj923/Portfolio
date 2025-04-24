import React from 'react';
import { SiReact, SiMongodb, SiExpress, SiNodedotjs, SiRedux, SiTailwindcss, SiFirebase, SiGithub } from 'react-icons/si';

import netflix from "./netflix.png";
import FoodApp from "./FoodApp.png";
import TechMate from './utils/TechMate.png';

const Project = () => {
  return (
    <div className='flex flex-col items-center mt-60'>
      <h1 className='mb-12 text-4xl font-bold text-center'>Featured Projects</h1>

      {/* TechMate Project */}
      <div className='flex flex-col items-center justify-center mb-32 md:flex-row md:space-x-12'>
        {/* TechMate Card */}
        <div className='w-full max-w-lg p-6 mb-8 bg-white rounded-lg shadow-lg md:mb-0'>
          <h1 className='text-xl font-bold text-center'>TechMate - Developer Networking Platform</h1>
          <div className='flex justify-center mt-6 space-x-4 text-3xl text-black'>
            <SiReact />
            <SiNodedotjs />
            <SiExpress />
            <SiMongodb />
          </div>
          <p className='mt-6 text-center text-gray-500'>
            A Tinder-like platform for developers to connect based on skills, interests, and projects. Built with the MERN stack (MongoDB, Express, React, Node.js), it features profile creation, swipe-based matching, real-time chat, and project collaboration tools.
          </p>
          <a
            className='block px-4 py-2 mt-6 text-center text-blue-800 transition-colors duration-300 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white'
            href="https://github.com/varunraj923/TechMate"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it Out!
          </a>
        </div>
        {/* TechMate Image Placeholder */}
        <div className='w-full max-w-lg mt-8 md:mt-0'>
          <div className='flex items-center justify-center w-full h-full text-gray-600 bg-gray-300 rounded-lg'>
            <img src={TechMate} alt="TechMate" />
          </div>
        </div>
      </div>

      {/* Food Delivery Website */}
      <div className='flex flex-col items-center justify-center md:flex-row md:space-x-12'>
        <div className='w-full max-w-lg p-6 mb-8 bg-white rounded-lg shadow-lg md:mb-0'>
          <h1 className='text-xl font-bold text-center'>Food Delivery Website</h1>
          <div className='flex justify-center mt-6 space-x-4 text-3xl text-black'>
            <SiReact />
            <SiRedux />
            <SiGithub />
            <SiTailwindcss />
          </div>
          <p className='mt-6 text-center text-gray-500'>
            I developed and designed a website using ReactJS, TailwindCSS, and Redux to showcase my web presence, story, work experience, education, projects, and achievements in an interactive and visually-appealing format.
          </p>
          <a
            className='block px-4 py-2 mt-6 text-center text-blue-800 transition-colors duration-300 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white'
            href="https://github.com/varunraj923/Food-Delivery-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it Out!
          </a>
        </div>
        <div className='w-full max-w-lg mt-8 md:mt-0'>
          <img className='rounded-lg' src={FoodApp} alt="Food Delivery App Screenshot" />
        </div>
      </div>

      {/* Netflix GPT */}
      <div className='flex flex-col items-center justify-center mt-32 md:flex-row md:space-x-12'>
        <div className='w-full max-w-lg p-6 mb-8 bg-white rounded-lg shadow-lg md:mb-0'>
          <h1 className='text-xl font-bold text-center'>Netflix-GPT</h1>
          <div className='flex justify-center mt-6 space-x-4 text-3xl text-black'>
            <SiReact />
            <SiRedux />
            <SiTailwindcss />
            <SiFirebase />
            <SiGithub />
          </div>
          <p className='mt-6 text-center text-gray-500'>
            I developed and designed a website using ReactJS, TailwindCSS, and Redux to provide a seamless user experience for browsing and managing Netflix-like content.
          </p>
          <a
            className='block px-4 py-2 mt-6 text-center text-blue-800 transition-colors duration-300 border-2 border-blue-700 rounded-lg hover:bg-blue-700 hover:text-white'
            href="https://github.com/varunraj923"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it Out!
          </a>
        </div>
        <div className='w-full max-w-lg mt-8 md:mt-0'>
          <img className='rounded-lg' src={netflix} alt="Netflix-GPT Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Project;
