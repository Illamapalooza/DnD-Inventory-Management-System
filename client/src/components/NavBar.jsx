import React from 'react';
import logo from '../assets/finalLogo.png';

const Header = () => {
 return (
  <nav className="fixed top-0 z-50 bg-white shadow-md p-4 flex justify-between items-center w-full">
   <div className="w-10 h-10 mr-6">
    <img src={logo} alt="Brand Logo" className="w-auto h-auto" />
   </div>

   <div className="icons flex items-center space-x-4">
    {/* Notifications Icon */}
    <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth={1.5}
     stroke="currentColor"
     className="h-6 w-6 text-gray-600 cursor-pointer"
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0"
     />
    </svg>

    {/* User Avatar */}
    {/* <img
     src="/path-to-your-avatar.jpg"
     alt="User Avatar"
     className="h-8 w-8 rounded-full"
    /> */}

    <svg
     xmlns="http://www.w3.org/2000/svg"
     fill="none"
     viewBox="0 0 24 24"
     strokeWidth={1.5}
     stroke="currentColor"
     className="w-6 h-6"
    >
     <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
     />
    </svg>
   </div>
  </nav>
 );
};

export default Header;
