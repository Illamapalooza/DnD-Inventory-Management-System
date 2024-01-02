import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import Validation from '../components/ProductValidation.jsx';
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const EditProductForm = () => {
 const [imagePreview, setImagePreview] = useState(null);

 const [errors, setErrors] = useState({});

 const { id } = useParams();

 useEffect(() => {
  axios.get(`http://localhost:3000/products/edit-product/${id}`).then((res) => {
   const productData = res.data;
   setFormData({
    productName: productData.Name,
    unitPrice: productData.UnitPrice,
    sku: productData.SKU,
    description: productData.Description,
    brand: productData.Brand,
    supplier: productData.Supplier,
    category: productData.Category,
   });

   setImagePreview(productData.image);
  });
 }, [id]);

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
  unitPrice: '',
  sku: '',
  description: '',
  brand: '',
  supplier: '',
  category: '',
 });

 const handleChange = (e) => {
  setFormData((prevFormData) => ({
   ...prevFormData,
   [e.target.name]: e.target.value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(Validation(formData));
  console.log(formData);
  if (
   errors.productName === '' &&
   errors.unitPrice === '' &&
   errors.description === '' &&
   errors.category === ''
  ) {
   axios
    .post(`http://localhost:3000/products/edit-product/${id}`, formData)
    .then((res) => {
     if (res.status === 200) {
      alert('Product Updated Successfully');
      setFormData({
       productName: '',
       unitPrice: '',
       sku: '',
       description: '',
       brand: '',
       supplier: '',
       category: '',
      });
     } else {
      alert('Invalid Information');
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
   productName: '',
   unitPrice: '',
   sku: '',
   description: '',
   brand: '',
   supplier: '',
   category: '',
  });

  setImagePreview(null);
 };

 return (
  <div>
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <h1 className="text-2xl font-bold text-gray-80 py-6">Edit Product</h1>
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
        <div className="mb-4 h-72 flex flex-col items-center justify-center bg-white rounded border border-grayish w-full w-full">
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
        value={formData.image || ''}
       />
      </div>

      {/* Input Information */}

      <form
       className="bg-white p-8 rounded-lg flex-1"
       action=""
       onSubmit={handleSubmit}
       onReset={handleReset}
      >
       <div className="grid grid-cols-1 gap-4">
        {/* PRODUCT NAME */}
        <div>
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="productName"
          placeholder="Product Name"
          onChange={handleChange}
          value={formData.productName || ''}
         />
         {errors.productName && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.productName}
          </span>
         )}
        </div>

        {/* UNIT PRICE */}
        <div>
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="unitPrice"
          placeholder="Unit Price"
          type="number"
          step=".01"
          onChange={handleChange}
          value={formData.unitPrice || ''}
         />
         {errors.unitPrice && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.unitPrice}
          </span>
         )}
        </div>

        {/* SKU */}

        <div>
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="sku"
          placeholder="SKU"
          type="text"
          onChange={handleChange}
          value={formData.sku || ''}
         />

         {errors.sku && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.sku}
          </span>
         )}
        </div>

        {/* DESCRIPTION */}
        <div>
         <textarea
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="description"
          placeholder="Description"
          onChange={handleChange}
          style={{ resize: 'none' }}
          value={formData.description || ''}
         />
         {errors.description && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.description}
          </span>
         )}
        </div>

        {/* BRAND */}

        <div>
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          value={formData.brand || ''}
         />
         {errors.brand && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.brand}
          </span>
         )}
        </div>

        {/* SUPPLIER */}
        <div>
         <input
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="supplier"
          placeholder="Supplier"
          onChange={handleChange}
          value={formData.supplier || ''}
         />

         {errors.supplier && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.supplier}
          </span>
         )}
        </div>

        {/* CATEGORY */}

        <div>
         <select
          className="bg-white text-foreground rounded-lg p-2 border border-grayish w-full"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          value={formData.category || ''}
         >
          <option value="">Select Category</option>
          <option value="Beverages">Beverages</option>
          <option value="Bread/Bakery">Bread/Bakery</option>
          <option value="Canned/Jarred Goods">Canned/Jarred Goods</option>
          <option value="Dairy">Dairy</option>
          <option value="Frozen Goods">Frozen Goods</option>
          <option value="Meat">Meat</option>
          <option value="Fruits">Fruits</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Condiments">Condiments</option>
          <option value="Snacks">Snacks</option>
          <option value="Grains">Grains</option>
          <option value="Poultry">Poultry</option>
          <option value="Others">Others</option>
         </select>

         {errors.category && (
          <span className="font-thin text-red-600 text-[12px] mb-0 py-0">
           {errors.category}
          </span>
         )}
        </div>

        <div className="flex justify-end space-x-2">
         <Link to="/products">
          <button
           type="reset"
           className="bg-none hover:bg-grayish-900 text-foreground font-bold py-2 px-4 rounded-lg border border-grayish"
          >
           Cancel
          </button>
         </Link>

         <button
          type="submit"
          className="bg-kelly-500 hover:bg-kelly-400 text-white font-bold py-2 px-4 rounded-lg"
         >
          Update Product
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

export default EditProductForm;
