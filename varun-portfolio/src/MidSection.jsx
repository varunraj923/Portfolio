import React from 'react';
import { ReactTyped } from 'react-typed';
import Lottie from 'lottie-react';
import New from './New.json';
import { AiFillLinkedin, AiOutlineMail, AiOutlineDownload } from 'react-icons/ai';

const MidSection = () => {
  return (
    <div className='h-screen bg-gradient-to-r from-black via-gray-900 to-black'>
      <div className='flex flex-col items-center justify-between p-4 md:flex-row md:p-10'>
        {/* Text and Typed Animation Section */}
        <div className='w-full mt-10 md:w-1/2 md:mt-28'>
          <h1 className='text-4xl font-bold text-white md:text-6xl'>Hello,</h1>
          <h1 className='mt-4 text-3xl font-semibold text-white md:text-5xl'>This is Varun Raj,</h1>
          <h1 className='mt-4 text-3xl font-semibold text-white md:text-5xl'>and I am a Passionate</h1>

          <div className='mt-4'>
            <ReactTyped
              className='text-3xl font-semibold text-green-500 md:text-5xl' // Responsive text size
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
        <div className='flex justify-center w-full mt-10 md:w-1/2 md:mt-24'>
          <Lottie className='w-64 md:w-80' animationData={New} />
        </div>
      </div>

      {/* Buttons Section below ReactTyped */}
     <div className="flex flex-row mx-4 mt-8 space-x-4 ml-14">
  {/* LinkedIn Button */}
  <a
    href="https://www.linkedin.com/in/varunraj23"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 bg-blue-800 border-2 border-blue-500 shadow-md rounded-xl hover:bg-white hover:text-blue-500"
  >
    <AiFillLinkedin className="text-lg" />
    LinkedIn
  </a>

  {/* Email Button */}
  <a
    href="mailto:varunraj1545@gmail.com"
    className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 bg-blue-800 border-2 border-blue-500 shadow-md rounded-xl hover:bg-white hover:text-blue-500"
  >
    <AiOutlineMail className="text-lg" />
    Email
  </a>

  {/* Resume Button */}
  <a
    href="https://drive.google.com/file/d/1ScAFD0QOUq4GQ3NZW3MG666AnF6zyRrA/view?usp=drive_link"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-2 px-3 py-1 text-sm font-semibold text-white transition-colors duration-300 bg-blue-800 border-2 border-blue-500 shadow-md rounded-xl hover:bg-white hover:text-blue-500"
  >
    <AiOutlineDownload className="text-lg" />
    Resume
  </a>
</div>
    </div>
  );
};

export default MidSection;



