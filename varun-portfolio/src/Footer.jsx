import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-800 via-gray-900 to-black text-white py-8 mt-36">
      <div className="container mx-auto text-center">
        <h2 className="text-2xl font-semibold mb-2">Stay Connected</h2>
        <p className="text-lg mb-4">Made with ❤️ by Varun</p>
        <p className="text-sm mb-6">&copy; {new Date().getFullYear()} All Rights Reserved</p>
        
        {/* Link container */}
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-2 sm:space-y-0 sm:space-x-6">
          {/* LinkedIn Link */}
          <a 
            href="https://www.linkedin.com/in/varunraj23" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300 text-base md:text-lg"
          >
            LinkedIn
          </a>
          
          {/* GitHub Link */}
          <a 
            href="https://github.com/varunraj923" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300 text-base md:text-lg"
          >
            GitHub
          </a>
        </div>
        
        {/* Social Media Icons (optional) */}
        <div className="flex justify-center mt-4 space-x-4">
          <a 
            href="https://twitter.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-twitter fa-lg"></i> {/* You can replace this with an actual icon */}
          </a>
          <a 
            href="https://facebook.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
          >
            <i className="fab fa-facebook fa-lg"></i> {/* You can replace this with an actual icon */}
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


