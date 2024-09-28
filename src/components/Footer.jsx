import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white text-center p-2 md:p-4 ">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm md:text-base">&copy; 2024 My Password Manager. All Rights Reserved.</p>
        <div className="mt-2 md:mt-0">
          <a href="/privacy" className="text-gray-400 hover:text-white mx-2 text-sm md:text-base">Privacy Policy</a>
          <a href="/terms" className="text-gray-400 hover:text-white mx-2 text-sm md:text-base">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
