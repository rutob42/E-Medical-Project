import React from 'react';
// Replace with your actual asset paths
import { assets } from '../assets/assets';

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-blue-500 rounded-lg px-6 md:px-10 lg:px-20 border border-red-500'>
      {/* Left Side */}
      <div className='flex-1 border border-green-500'>
        <p className='text-white text-lg font-bold'>
          Book Appointment <br /> with Brilliant Specialists
        </p>
        <div className='flex items-center'>
          <img className='w-16 h-16' src={assets.group_profiles || 'https://via.placeholder.com/150'} alt="Group" />
          <p className='text-white ml-4'>View your trusted doctors</p>
        </div>
        <a href="" className='text-white flex items-center mt-4'>
          Book appointment
          <img className='ml-2' src={assets.arrow_icon || 'https://via.placeholder.com/20'} alt="Arrow Icon" />
        </a>
      </div>

      {/* Right Side */}
      <div className='flex-1 border border-yellow-500'>
        <img className='w-full h-auto' src={assets.header_img || 'https://via.placeholder.com/300'} alt="Header" />
      </div>
    </div>
  );
}

export default Header;
