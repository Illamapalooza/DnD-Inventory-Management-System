import React from 'react';
import logo from '../assets/dnd-svg.svg';

const handleSubmit = (e) => {
 e.preventDefault();
};

const LoginForm = () => {
 return (
  <div className="flex h-screen justify-center items-center">
   <div className="w-full max-w-sm mx-auto overflow-hidden bg-white rounded-lg shadow-md">
    <div className="px-6 py-4">
     <div className="flex justify-center mx-auto">
      <img className="w-auto h-7 sm:h-8" src={logo} alt="" />
     </div>

     <h3 className="mt-3 text-xl font-medium text-center text-foreground">
      Inventory Management System
     </h3>

     <p className="mt-1 text-center text-grayish">Login</p>

     <form onSubmit={handleSubmit}>
      <div className="w-full mt-4">
       <input
        className="block w-full px-4 py-2 mt-2 text-foreground placeholder-gray-500 bg-white border rounded-lg focus:border-kelly-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-kelly-300"
        type="email"
        placeholder="Email Address"
        aria-label="Email Address"
       />
      </div>

      <div className="w-full mt-4">
       <input
        className="block w-full px-4 py-2 mt-2 text-gray-700 placeholder-gray-500 bg-white border rounded-lg  focus:border-kelly-400 focus:ring-opacity-40 focus:outline-none focus:ring focus:ring-kelly-300"
        type="password"
        placeholder="Password"
        aria-label="Password"
       />
      </div>

      <div className="flex items-center justify-between mt-4">
       <a href="#" className="text-sm text-gray-600 hover:text-gray-500">
        Forget Password?
       </a>

       <button className="px-6 py-2 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-kelly-500 rounded-lg hover:bg-kelly-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
        Sign In
       </button>
      </div>
     </form>
    </div>

    <div className="flex items-center justify-center py-4 text-center bg-white">
     <span className="text-sm text-gray-600">Don't have an account?</span>

     <a
      href="#"
      className="mx-2 text-sm font-bold text-kelly-500 hover:underline"
     >
      Register
     </a>
    </div>
   </div>
  </div>
 );
};

export default LoginForm;
