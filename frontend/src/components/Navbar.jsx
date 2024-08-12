import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SiLivejournal } from "react-icons/si";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = ({ userName }) => {
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toPublish = () => {
    navigate('/addjournals');
  };

  const handleProfileClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLogout = () => {
    document.cookie = "journal_token='';max-age=0";
    navigate('/login');
  };

  return (
    <header className='flex items-center justify-between bg-[#fce3e3] shadow-md py-4 px-6'>
      <span 
        className='text-5xl cursor-pointer'
        onClick={() => navigate('/home')}
      >
        J<span className='text-4xl mb-2 absolute'>P</span>
      </span>
      <nav className='flex items-center gap-x-6'>
        <Link to='/home' className='text-lg hover:text-gray-700'>Home</Link>
        <Link to='/journals' className='text-lg hover:text-gray-700'>Journals</Link>
        <Link to='/about' className='text-lg hover:text-gray-700'>About Us</Link>
        <Link to='/yourarticles' className='text-lg hover:text-gray-700'>Your Articles</Link>
        <button
          onClick={toPublish}
          className='flex items-center gap-x-2 text-lg text-red-600 hover:text-red-800 font-semibold'
        >
          <SiLivejournal /> Add Your Journal
        </button>
        <div className='relative'>
          <div onClick={handleProfileClick} className='cursor-pointer flex items-center ml-6'>
            <img
              src='https://w7.pngwing.com/pngs/952/451/png-transparent-poland-computer-icons-curt-manufacturing-llc-information-boso-ale-w-ostrogach-my-account-icon-miscellaneous-company-monochrome-thumbnail.png'
              className='h-10 w-10 rounded-full'
              alt='Profile'
            />
            <span className='ml-2'>{userName}</span>
            <IoMdArrowDropdown className='ml-1' />
          </div>
          {isDropdownOpen && (
            <ul className='absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg'>
              <li className='px-4 py-2 hover:bg-gray-100'>
                <Link to='/profile'>Profile</Link>
              </li>
              <li className='px-4 py-2 hover:bg-gray-100 cursor-pointer' onClick={handleLogout}>
                Logout
              </li>
            </ul>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
