import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Validation from './SupplierValidation.jsx';
import axios from 'axios';

const AddSupplierForm = () => {
 const [supplierData, setSupplierData] = useState({
  supplierName: '',
  phone: '',
  servicesProducts: [],
  address: '',
  rating: '',
 });

 const [products, setProducts] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:3000/products').then((res) => {
   const productsData = res.data;

   setProducts(productsData);
  });
 }, []);

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
      setSupplierData({
       supplierName: '',
       phone: '',
       servicesProducts: [],
       address: '',
       rating: '',
      });
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
   servicesProducts: [],
   address: '',
   rating: '',
  });
 };

 const handleItemChange = (index, e) => {
  const newItems = [...supplierData.servicesProducts];
  newItems[index][e.target.name] = e.target.value;
  setSupplierData({ ...supplierData, servicesProducts: newItems });
 };

 const handleRemoveItem = (index) => {
  const newItems = supplierData.servicesProducts.filter((_, i) => i !== index);
  setSupplierData({ ...supplierData, servicesProducts: newItems });
 };

 const handleAddItem = () => {
  setSupplierData({
   ...supplierData,
   servicesProducts: [
    ...supplierData.servicesProducts,
    { ProductID: '', Name: '', LeadTime: '' },
   ],
  });
 };

 return (
  <div>
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
        <div className="col-span-2">
         <label className="text-foreground block mb-2" htmlFor="itemsOrdered">
          Supplier Products
         </label>
         {supplierData.servicesProducts.map((item, index) => (
          <div key={index} className="grid grid-flow-col gap-4 mb-2">
           <select
            name="ProductID"
            placeholder="Product Name"
            value={item.ProductID}
            onChange={(e) => handleItemChange(index, e)}
            className="p-2 border border-gray-300 rounded-lg"
           >
            <option value="">Select Product</option>
            {products.map((product) => (
             <option key={product.ProductID} value={product.ProductID}>
              {product.Name}
             </option>
            ))}
           </select>
           <input
            type="number"
            name="LeadTime"
            placeholder="Lead Time in Hours"
            value={item.Leadtime}
            onChange={(e) => handleItemChange(index, e)}
            className="p-2 border border-gray-300 rounded-lg"
           />
           <div className="flex justify-evenly ">
            <button
             onClick={() => handleRemoveItem(index)}
             className="text-red-500 hover:bg-gray-50 border-2 border-red-300 px-2 py-1 rounded-lg w-36"
            >
             Remove
            </button>
           </div>
          </div>
         ))}
         {errors.itemsOrdered && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.itemsOrdered}
          </span>
         )}
         <div
          onClick={handleAddItem}
          className="bg-kelly-500 text-white p-2 rounded-lg hover:bg-kelly-400 w-36 cursor-pointer text-center mt-4"
         >
          Add More Items
         </div>
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

export default AddSupplierForm;
