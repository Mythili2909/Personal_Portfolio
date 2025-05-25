import React from 'react';
import HeroImage from '../assets/blazerimg.png';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiLeetcode, SiHashnode } from 'react-icons/si';

const Hero = () => {
  const handleConnectClick = () => {
    // Placeholder for future interaction (popup/modal if needed)
  };

  const handleResumeClick = () => {
    window.open(
      'https://drive.google.com/file/d/1L1OAsKXUKkY8x2zwsYpJWyvzErKBuAwb/view?usp=sharing',
      '_blank'
    );
  };

  return (
    <div className='flex flex-col items-center justify-center py-16'>
      <img
        src={HeroImage}
        alt="Mythili"
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105'
      />
      <h1 className='text-4xl font-bold text-center'>
        I'm{' '}
        <span className='text-blue-600'>
          Mythili K
        </span>
        , Full-Stack Developer
      </h1>

      <div className='mt-8 space-x-4'>
        <button
          onClick={handleConnectClick}
          className='inline-flex items-center bg-gradient-to-r from-[#0072ff] to-[#00c6ff] text-white px-4 py-2 rounded-full shadow-md hover:from-[#00c6ff] hover:to-[#0072ff] transition-colors duration-300'
        >
          Connect With Me
        </button>
        <button
          onClick={handleResumeClick}
          className='bg-gradient-to-r from-[#5a3eeb] to-[#6c4eea] text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'
        >
          Resume
        </button>
      </div>

      {/* Social Media Icons */}
      <div className="mt-8 flex justify-center space-x-8">
        <a
          href="https://www.linkedin.com/in/mythili2909/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className='text-3xl text-blue-600 hover:scale-110 transition-transform' />
        </a>
        <a
          href="https://github.com/Mythili2909"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className='text-3xl text-gray-800 hover:scale-110 transition-transform' />
        </a>
        <a
          href="https://leetcode.com/u/Mythili2909/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiLeetcode className='text-3xl text-orange-500 hover:scale-110 transition-transform' />
        </a>
        <a
          href="https://hashnode.com/@Mythili2909"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiHashnode className='text-3xl text-blue-600 hover:scale-110 transition-transform' />
        </a>
      </div>
    </div>
  );
};

export default Hero;
