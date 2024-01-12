import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

const Stats = () => {
 const [ordersCount, setOrdersCount] = useState([]);
 const [productsCount, setProductsCount] = useState([]);
 const [inventoryCount, setInventoryCount] = useState([]);

 useEffect(() => {
  axios.get('http://localhost:3000/orders/orders-count').then((res) => {
   const ordersDataCount = res.data;

   setOrdersCount(ordersDataCount);
  });
 }, []);

 useEffect(() => {
  axios.get('http://localhost:3000/inventory/inventory-count').then((res) => {
   const inventoryCount = res.data;

   setInventoryCount(inventoryCount);
  });
 }, []);

 useEffect(() => {
  axios.get('http://localhost:3000/products/product-count').then((res) => {
   const productCount = res.data;

   setProductsCount(productCount);
  });
 }, []);

 return (
  <div className="p-4 sm:ml-64">
   <div className="p-4 mt-10">
    <h1 className="text-2xl font-bold text-gray-80 py-6">Dashboard</h1>
    <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
     <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div className="p-4 flex items-center">
       <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4">
        <svg
         className="w-6 h-6"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         viewBox="0 0 18 20"
        >
         <path d="M17 5.923A1 1 0 0 0 16 5h-3V4a4 4 0 1 0-8 0v1H2a1 1 0 0 0-1 .923L.086 17.846A2 2 0 0 0 2.08 20h13.84a2 2 0 0 0 1.994-2.153L17 5.923ZM7 9a1 1 0 0 1-2 0V7h2v2Zm0-5a2 2 0 1 1 4 0v1H7V4Zm6 5a1 1 0 1 1-2 0V7h2v2Z" />
        </svg>
       </div>
       <div>
        <p className="mb-2 text-sm font-medium text-gray-600">Total Orders</p>
        <p className="text-lg font-semibold text-gray-700">
         {ordersCount || 0}
        </p>
       </div>
      </div>
     </div>
     <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div className="p-4 flex items-center">
       <div className="p-3 rounded-full text-green-500 bg-green-100 mr-4">
        <svg
         className="w-6 h-6"
         aria-hidden="true"
         xmlns="http://www.w3.org/2000/svg"
         fill="currentColor"
         viewBox="0 0 20 19"
        >
         <path d="M10.013 4.175 5.006 7.369l5.007 3.194-5.007 3.193L0 10.545l5.006-3.193L0 4.175 5.006.981l5.007 3.194ZM4.981 15.806l5.006-3.193 5.006 3.193L9.987 19l-5.006-3.194Z" />
         <path d="m10.013 10.545 5.006-3.194-5.006-3.176 4.98-3.194L20 4.175l-5.007 3.194L20 10.562l-5.007 3.194-4.98-3.211Z" />
        </svg>
       </div>
       <div>
        <p className="mb-2 text-sm font-medium text-gray-600">
         Inventory Items
        </p>
        <p className="text-lg font-semibold text-gray-700">
         {inventoryCount || 0}
        </p>
       </div>
      </div>
     </div>
     <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div className="p-4 flex items-center">
       <div className="p-3 rounded-full text-blue-500 bg-blue-100 mr-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         className="w-6 h-6 icon icon-tabler icon-tabler-currency-peso"
         viewBox="0 0 24 24"
         strokeWidth={1.5}
         stroke="currentColor"
         fill="none"
         strokeLinecap="round"
         strokeLinejoin="round"
        >
         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
         <path d="M8 19v-14h3.5a4.5 4.5 0 1 1 0 9h-3.5" />
         <path d="M18 8h-12" />
         <path d="M18 11h-12" />
        </svg>
       </div>
       <div>
        <p className="mb-2 text-sm font-medium text-gray-600">Total Products</p>
        <p className="text-lg font-semibold text-gray-700">
         {productsCount || 0}
        </p>
       </div>
      </div>
     </div>
     <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
      <div className="p-4 flex items-center">
       <div className="p-3 rounded-full text-teal-500 bg-teal-100 mr-4">
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={2}
         stroke="currentColor"
         className="w-6 h-6"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3"
         />
        </svg>
       </div>
       <div>
        <p className="mb-2 text-sm font-medium text-gray-600">Returns</p>
        <p className="text-lg font-semibold text-gray-700">35</p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Stats;
