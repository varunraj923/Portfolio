import React from 'react';

import netflix from "./netflix.png"
import FoodApp from "./FoodApp.png"






const Project = () => {
  return (
    <div className='mt-60 flex flex-col items-center'>
      <h1 className='text-4xl font-bold text-center mb-12'>Featured Projects</h1>

      {/* Flex container for side-by-side layout */}
      <div className='flex flex-col md:flex-row md:space-x-12 items-center justify-center'>
        
        {/* Project 1: Food Delivery Website */}
        <div className='w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0'>
          <h1 className='font-bold text-xl text-center'>Food Delivery Website</h1>
          <div className='flex justify-center mt-6 space-x-4'>
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"} alt="React" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=A6r5yddU9uA0&format=png&color=000000"} alt="Redux" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=62856&format=png&color=000000"} alt="GitHub" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=WoopfRcDj3RF&format=png&color=000000"} alt="TailwindCSS" />
          </div>
          <p className='text-center text-gray-500 mt-6'>
            I developed and designed a website using ReactJS, TailwindCSS, and Redux to showcase my web presence, story, work experience, education, projects, and achievements in an interactive and visually-appealing format.
          </p>
          <a
            className='block text-center text-blue-800 px-4 py-2 border-2 border-blue-700 rounded-lg mt-6 hover:bg-blue-700 hover:text-white transition-colors duration-300'
            href="https://github.com/varunraj923/Food-Delivery-App"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it Out!
          </a>
        </div>

        {/* Project 1 Image */}
        <div className='w-full max-w-lg mt-8 md:mt-0'>
          <img className='rounded-lg' src={FoodApp} alt="Food Delivery App Screenshot" />
        </div>
      </div>

      <div className='flex flex-col md:flex-row md:space-x-12 items-center justify-center mt-32'>
        
        {/* Project 2: Netflix-GPT */}
        <div className='w-full max-w-lg bg-white shadow-lg rounded-lg p-6 mb-8 md:mb-0'>
          <h1 className='font-bold text-xl text-center'>Netflix-GPT</h1>
          <div className='flex justify-center mt-6 space-x-4'>
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=22813&format=png&color=000000"} alt="React" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=bzf0DqjXFHIW&format=png&color=000000"} alt="Redux" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=4PiNHtUJVbLs&format=png&color=000000"} alt="TailwindCSS" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=87330&format=png&color=000000"} alt="Firebase" />
            <img className='w-10 h-10' src={"https://img.icons8.com/?size=100&id=62856&format=png&color=000000"} alt="GitHub" />
          </div>
          <p className='text-center text-gray-500 mt-6'>
            I developed and designed a website using ReactJS, TailwindCSS, and Redux to provide a seamless user experience for browsing and managing Netflix-like content.
          </p>
          <a
            className='block text-center text-blue-800 px-4 py-2 border-2 border-blue-700 rounded-lg mt-6 hover:bg-blue-700 hover:text-white transition-colors duration-300'
            href="https://github.com/varunraj923"
            target="_blank"
            rel="noopener noreferrer"
          >
            Check it Out!
          </a>
        </div>

        {/* Project 2 Image */}
        <div className='w-full max-w-lg mt-8 md:mt-0'>
          <img className='rounded-lg' src={netflix} alt="Netflix-GPT Screenshot" />
        </div>
      </div>
    </div>
  );
};

export default Project;


