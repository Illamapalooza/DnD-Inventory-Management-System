import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Validation from './RegistrationValidation.jsx';
import axios from 'axios';
import logo from '../assets/finalLogo.png';

const Registration = () => {
 const [formData, setFormData] = useState({
  name: '',
  profilePhoto: '',
  email: '',
  phone: '',
  address: '',
  role: '',
  password: '',
  confirmPassword: '',
 });

 const navigate = useNavigate();

 const [errors, setErrors] = useState({});
 const [loginError, setLoginError] = useState('');

 const handleInput = (e) => {
  setFormData((prevFormData) => ({
   ...prevFormData,
   [e.target.name]: e.target.value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(Validation(formData));
  if (errors.name === '' && errors.email === '' && errors.password === '') {
   axios
    .post('http://localhost:3000/register', formData)
    .then((res) => {
     console.log('it works');
     navigate('/auth/login');
    })
    .catch((err) => {
     console.log(err);
     setLoginError(err.response.data.error);
    });
  }
 };

 return (
  <div>
   <section className="bg-white">
    <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
     <form
      className="w-full max-w-md space-y-4"
      action=""
      onSubmit={handleSubmit}
     >
      <div className="flex justify-center mx-auto">
       <img className="w-auto h-10 sm:h-20" src={logo} alt="" />
      </div>

      <div className="flex items-center justify-center ">
       <a
        href="#"
        className="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-kelly-500 "
       >
        sign up
       </a>
      </div>

      {/* Name */}
      <div className="relative flex items-center mt-8">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-6 h-6 mx-3 text-gray-300 "
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
         />
        </svg>
       </span>

       <input
        type="text"
        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Full Name"
        name="name"
        onChange={handleInput}
       />
      </div>
      {errors.name && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.name}
       </span>
      )}

      {/* PROFILE PHOTO */}

      <label
       htmlFor="dropzone-file"
       className="flex items-center px-3 py-3 mx-auto  text-center bg-white border-2 border-dashed rounded-lg cursor-pointer "
      >
       <svg
        xmlns="http://www.w3.org/2000/svg"
        className="w-6 h-6 text-gray-300"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth="2"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"
        />
       </svg>

       <h2 className="mx-3 text-gray-400">Profile Photo</h2>

       <input
        id="dropzone-file"
        type="file"
        className="hidden"
        name="profilePhoto"
        onChange={handleInput}
       />
      </label>

      {/* EMAIL */}
      <div className="relative flex items-center ">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-6 h-6 mx-3 text-gray-300"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
         />
        </svg>
       </span>

       <input
        className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Email address"
        name="email"
        onChange={handleInput}
       />
      </div>
      {errors.email && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.email}
       </span>
      )}
      {loginError && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {loginError}
       </span>
      )}

      {/* Address */}

      <div className="relative flex items-center mt-4">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="w-6 h-6 mx-3 text-gray-300"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
         />
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
         />
        </svg>
       </span>

       <input
        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Address"
        name="address"
        onChange={handleInput}
       />
      </div>
      {errors.address && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.address}
       </span>
      )}

      {/* PHONE */}
      <div className="relative flex items-center mt-4">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="w-6 h-6 mx-3 text-gray-300"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
         />
        </svg>
       </span>

       <input
        type="number"
        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Phone +63"
        name="phone"
        onChange={handleInput}
       />
      </div>
      {errors.phone && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.phone}
       </span>
      )}

      {/* ROLE */}
      <div className="relative flex items-center mt-4">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="w-6 h-6 mx-3 text-gray-300"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
         />
        </svg>
       </span>

       <select
        name="role"
        onChange={handleInput}
        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40 cursor-pointer"
       >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Staff">Staff</option>
       </select>
      </div>
      {errors.role && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.role}
       </span>
      )}

      {/* PASSWORD */}
      <div className="relative flex items-center mt-4">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-6 h-6 mx-3 text-gray-300 "
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
         />
        </svg>
       </span>

       <input
        type="password"
        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Password"
        name="password"
        onChange={handleInput}
       />
      </div>
      {errors.password && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.password}
       </span>
      )}

      {/* CONFIRM PASSWORD */}
      <div className="relative flex items-center mt-4">
       <span className="absolute">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-6 h-6 mx-3 text-gray-300"
         fill="none"
         viewBox="0 0 24 24"
         stroke="currentColor"
         strokeWidth="2"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
         />
        </svg>
       </span>

       <input
        type="password"
        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
        placeholder="Confirm Password"
        name="confirmPassword"
        onChange={handleInput}
       />
      </div>
      {errors.confirmPassword && (
       <span className="font-thin text-red-600 text-[12px] ml-2 mb-0 py-0">
        {errors.confirmPassword}
       </span>
      )}

      <div className="">
       <button
        type="submit"
        className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-kelly-500 rounded-lg hover:bg-kelly-400 focus:outline-none focus:ring focus:ring-kelly-300 focus:ring-opacity-50"
       >
        Sign Up
       </button>

       <div className=" text-center ">
        <Link
         to="/auth/login"
         className="text-sm text-kelly-500 hover:underline "
        >
         Already have an account?
        </Link>
       </div>
      </div>
     </form>
    </div>
   </section>
  </div>
 );
};

export default Registration;
