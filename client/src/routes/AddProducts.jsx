import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';

const AddProducts = () => {
 const [imagePreview, setImagePreview] = useState(null);

 const handleImageChange = (e) => {
  const file = e.target.files[0];
  if (file && file.type.substr(0, 5) === 'image') {
   setImagePreview(URL.createObjectURL(file));
  } else {
   setImagePreview(null);
  }
 };

 const [formData, setFormData] = useState({
  productName: '',
  price: '',
  quantity: '',
  description: '',
  brand: '',
  supplier: '',
  category: '',
  availabilityStatus: 'active', // 'active' or 'inactive'
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prevFormData) => ({
   ...prevFormData,
   [name]: value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  onSubmit(formData);
 };

 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <h1 className="text-2xl font-bold text-gray-80 py-6">Add Products</h1>
     <div className="flex w-full space-x-6">
      {/* Upload Image */}
      <div className="flex flex-col bg-white p-8 rounded-lg w-1/2">
       <div className="font-semibold top-0 text-lg text-grayish-300 mb-4">
        Upload Image
       </div>
       {imagePreview ? (
        <img
         src={imagePreview}
         alt="Preview"
         style={{ maxWidth: '100%' }}
         className="mb-4 h-auto rounded"
        />
       ) : (
        <div className="mb-4 h-72 flex flex-col items-center justify-center bg-white rounded border border-grayish w-full">
         <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1}
          stroke="currentColor"
          className="w-1/2 h-1/2 text-grayish-700 opacity-70"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
         </svg>

         <span className="text-grayish-600">No image selected</span>
        </div>
       )}
       <input
        type="file"
        accept="image/*"
        className="file:mr-4 file:py-2 file:px-4
                   file:rounded-full file:border-0
                   file:text-sm file:font-semibold
                   file:bg-kelly-900 file:text-kelly
                   hover:file:bg-kelly-900 file:bg-opacity-50
                   cursor-pointer
                   "
        onChange={handleImageChange}
       />
      </div>

      {/* Input Information */}
      <form className="bg-white p-8 rounded-lg flex-1" onSubmit={handleSubmit}>
       <div className="grid grid-cols-1 gap-6">
        <input
         className="bg-white text-foreground rounded-lg p-2 border border-grayish"
         name="productName"
         placeholder="Product Name"
         value={formData.productName}
         onChange={handleChange}
        />

        <div className="grid grid-cols-2 gap-4">
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish"
          name="price"
          placeholder="Price"
          type="number"
          value={formData.price}
          onChange={handleChange}
         />
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish"
          name="quantity"
          placeholder="Quantity"
          type="number"
          value={formData.quantity}
          onChange={handleChange}
         />
        </div>

        <textarea
         className="bg-white text-foreground rounded-lg p-2 border border-grayish"
         name="description"
         placeholder="Description"
         value={formData.description}
         onChange={handleChange}
         style={{ resize: 'none' }}
        />
        <input
         className="bg-white text-foreground rounded-lg p-2 border border-grayish"
         name="brand"
         placeholder="Brand"
         value={formData.brand}
         onChange={handleChange}
        />
        <input
         className="bg-white text-foreground rounded-lg p-2 border border-grayish"
         name="supplier"
         placeholder="Supplier"
         value={formData.supplier}
         onChange={handleChange}
        />
        <input
         className="bg-white text-foreground rounded-lg p-2 border border-grayish"
         name="category"
         placeholder="Category"
         value={formData.category}
         onChange={handleChange}
        />
        <select
         className="bg-white text-foreground rounded-lg p-2 border border-grayish"
         name="availabilityStatus"
         value={formData.availabilityStatus}
         onChange={handleChange}
        >
         <option value="active">Active</option>
         <option value="inactive">Inactive</option>
        </select>
        <div className="flex justify-end space-x-2">
         <button
          type="submit"
          className="bg-none hover:bg-grayish-900 text-foreground font-bold py-2 px-4 rounded-lg border border-grayish"
         >
          Cancel
         </button>
         <button
          type="submit"
          className="bg-kelly-500 hover:bg-kelly-400 text-white font-bold py-2 px-4 rounded-lg"
         >
          Add Product
         </button>
        </div>
       </div>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddProducts;
