import React from 'react';
import { ReactTyped } from 'react-typed';
import Lottie from 'lottie-react';
import New from './New.json';

const MidSection = () => {
  return (
    <div className='bg-gradient-to-r from-black via-gray-900 to-black h-screen'>
      <div className='flex flex-col md:flex-row justify-between items-center p-4 md:p-10'>
        {/* Text and Typed Animation Section */}
        <div className='w-full md:w-1/2 mt-10 md:mt-28'>
          <h1 className='text-4xl md:text-6xl font-bold text-white'>Hello,</h1>
          <h1 className='text-3xl md:text-5xl mt-4 font-semibold text-white'>This is Varun Raj,</h1>
          <h1 className='text-3xl md:text-5xl mt-4 font-semibold text-white'>and I am a Passionate</h1>

          <div className='mt-4'>
            <ReactTyped
              className='text-3xl md:text-5xl font-semibold text-green-500' // Responsive text size
              strings={[
                "Full Stack Developer",
                "Programmer",
                "Graphic Designer",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </div>
        </div>

        {/* Lottie Animation */}
        <div className='w-full md:w-1/2 flex justify-center mt-10 md:mt-24'>
          <Lottie className='w-64 md:w-80' animationData={New} />
        </div>
      </div>

      {/* Buttons Section below ReactTyped */}
      <div className="flex flex-row space-x-4 mt-8 mx-4 ml-14">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/varunraj23"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-blue-800 border-2 border-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-blue-500 transition-colors duration-300 text-sm"
        >
          LinkedIn
        </a>

        {/* Email Button */}
        <a
          href="mailto:varunraj1545@gmail.com"
          className="px-3 py-1 bg-blue-800 border-2 border-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-blue-500 transition-colors duration-300 text-sm"
        >
          Email
        </a>

        {/* Resume Button */}
        <a
          href="https://drive.google.com/file/d/1ScAFD0QOUq4GQ3NZW3MG666AnF6zyRrA/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="px-3 py-1 bg-blue-800 border-2 border-blue-500 text-white font-semibold rounded-xl shadow-md hover:bg-white hover:text-blue-500 transition-colors duration-300 text-sm"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default MidSection;



