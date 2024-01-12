import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const Products = () => {
 const [totalProducts, setTotalProducts] = useState(0);
 const [outOfStockProducts, setOutOfStockProducts] = useState(0);

 const handleTotalProducts = (products) => {
  setTotalProducts(products.length);
 };

 useEffect(() => {
  axios
   .get('http://localhost:3000/products/out-of-stock/product-count')
   .then((res) => {
    const outOfStockProductsData = res.data;

    setOutOfStockProducts(outOfStockProductsData);
   });
 }, [totalProducts]);

 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="p-4 mt-10">
     <div className="flex flex-row w-full justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-80 py-6">Products</h1>
      <Link to="/products/add-products">
       <button
        type="button"
        className="text-white bg-kelly-500 hover:bg-kelly-400 focus:ring-4 focus:outline-none focus:ring-kelly-700 font-medium rounded-lg text-md px-4 py-2.5 text-center inline-flex items-center justify-between"
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         className="w-5 h-5 mr-1"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15"
         />
        </svg>
        <div>Add Product</div>
       </button>
      </Link>
     </div>

     <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
      <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
       <div className="p-4 flex items-center justify-center w-full h-full ">
        <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4"></div>
        <div className="flex justify-around w-full h-full px-8 items-center">
         <p className="text-lg font-semibold text-gray-600">Total Products</p>
         <p className="text-[36px] font-semibold text-gray-700 border rounded-lg px-2">
          {totalProducts}
         </p>
        </div>
       </div>
      </div>
      <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
       <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-green-500 bg-green-100 mr-4"></div>
        <div className="flex justify-around w-full h-full px-8 items-center">
         <p className="text-lg font-semibold text-gray-600">
          Out of Stock Products
         </p>
         <p className="text-[36px] font-semibold text-gray-700 border rounded-lg px-2">
          {outOfStockProducts}
         </p>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div>
     <ProductList onTotalProducts={handleTotalProducts} />
    </div>
   </div>
  </div>
 );
};

export default Products;
