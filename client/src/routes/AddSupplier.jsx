import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Validation from '../components/SupplierValidation.jsx';

const AddSupplier = () => {
 const [supplierData, setSupplierData] = useState({
  supplierName: '',
  phone: '',
  address: '',
  rating: '',
 });

 const [errors, setErrors] = useState({});

 const handleChange = (e) => {
  setSupplierData((prevSupplierData) => ({
   ...prevSupplierData,
   [e.target.name]: e.target.value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(Validation(supplierData));
  if (
   errors.supplierName === '' &&
   errors.phone === '' &&
   errors.address === ''
  ) {
   axios
    .post('http://localhost:3000/suppliers/add-suppliers', supplierData)
    .then((res) => {
     if (res.status === 200) {
      alert('Supplier Added Successfully');
     } else {
      alert('Invalid Credentials');
     }
    })
    .catch((err) => {
     console.log(err);
    });
  }
 };

 const handleReset = (e) => {
  e.preventDefault();
  setFormData({
   supplierName: '',
   phone: '',
   address: '',
   rating: '',
  });
 };

 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <h1 className="text-2xl font-bold text-gray-80 py-6">Add Supplier</h1>
     <div>
      <form
       className="bg-white p-6 rounded-lg space-y-4"
       onSubmit={handleSubmit}
       onReset={handleReset}
      >
       <div className="grid grid-cols-2 gap-4">
        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierName">
          Name
         </label>
         <input
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="supplierName"
          value={supplierData.supplierName}
          onChange={handleChange}
         />
         {errors.supplierName && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.supplierName}
          </span>
         )}
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierName">
          Phone
         </label>
         <input
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="phone"
          value={supplierData.phone}
          onChange={handleChange}
         />
         {errors.phone && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.phone}
          </span>
         )}
        </div>

        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierName">
          Address
         </label>
         <input
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="address"
          value={supplierData.address}
          onChange={handleChange}
         />
         {errors.address && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.address}
          </span>
         )}
        </div>

        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierRating">
          Quality Rating
         </label>
         <input
          type="number"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="rating"
          value={supplierData.rating}
          onChange={handleChange}
          step={0.1}
         />
        </div>
       </div>

       <button
        type="submit"
        className="bg-kelly-900 bg-opacity-70 hover:bg-kelly-800 text-kelly-300 border-2 border-kelly border-opacity-50 font-bold py-2 px-4 rounded-lg w-full"
       >
        Add Supplier
       </button>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddSupplier;
