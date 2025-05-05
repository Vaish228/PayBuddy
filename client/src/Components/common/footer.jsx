import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
    return (
       <footer className ="bg-black text-white p-6 mt-10">
        <div className = "max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <p className = "text-sm mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} PayBuddy. All rights reserved.
            </p>
            <div className="flex space-x-4">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
            <FaFacebookF />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-300">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
            <FaInstagram />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
            <FaLinkedinIn />
          </a>
        </div>
        </div>
       </footer>
       
    )
}
export default Footer;