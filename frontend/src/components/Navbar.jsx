import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(true); // Set to true to show profile pic

  return (
    <div className='flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-400'>
      <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />

      <ul className='hidden md:flex items-start gap-5 font-medium'>
        {/* Navigation Links */}
        <NavLink to="/" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 hover:text-blue-500 transition duration-200'>HOME</li>
        </NavLink>

        <NavLink to="/doctors" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 hover:text-blue-500 transition duration-200'>ALL DOCTORS</li>
        </NavLink>

        <NavLink to="/about" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 hover:text-blue-500 transition duration-200'>ABOUT</li>
        </NavLink>

        <NavLink to="/contact" className={({ isActive }) => (isActive ? 'text-primary' : '')}>
          <li className='py-1 hover:text-blue-500 transition duration-200'>CONTACT</li>
        </NavLink>
      </ul>

      <div className='flex items-center gap-2 cursor-pointer group relative'>
        {token ? (
          <div className='flex items-center'>
            {/* Profile Picture */}
            <img className='w-8 h-8 rounded-full object-cover' src={assets.profile_pic} alt="Profile" />
            {/* Dropdown Icon */}
            <img className='w-2.5 ml-2' src={assets.dropdown_icon} alt="Dropdown Icon" />
            <div className='absolute top-0 right-0 pt-14 text-base font-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                <p onClick={()=>navigate('my-profile')} className='hover:text-black cursor-point'>My Profile</p>
                <p onClick={()=>navigate('my-appointment')}className='hover:text-black cursor-point'>My Appointment</p>
                <p onClick={()=>setToken(false)} className='hover:text-black cursor-point'>Logout</p>
                </div>
            </div>
          </div>
        ) : (
          <button
            onClick={() => navigate('/login')}
            className='bg-primary text-white py-2 px-4 rounded-full font-light hidden md:block'
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
};

export default Navbar;
