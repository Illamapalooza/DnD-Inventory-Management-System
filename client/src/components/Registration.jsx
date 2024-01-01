import React from 'react';
import logo from '../assets/dnd-svg.svg';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Validation from './RegistrationValidation.jsx';
import axios from 'axios';

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
     navigate('/login');
    })
    .catch((err) => {
     console.log(err);
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
       <img className="w-auto h-10 sm:h-8" src={logo} alt="" />
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

      {/* Address */}

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

       <select
        name="role"
        onChange={handleInput}
        className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-lg  focus:ring-kelly-300 focus:outline-none focus:ring focus:ring-opacity-40"
       >
        <option value="">Select Role</option>
        <option value="Admin">Admin</option>
        <option value="Manager">Manager</option>
        <option value="Employee">Employee</option>
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
        <Link to="/login" className="text-sm text-kelly-500 hover:underline ">
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
