import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import ProductList from '../components/ProductList';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import InventoryProductList from '../components/InventoryProductList.jsx';
import InventorySummary from '../components/InventorySummary.jsx';
import RecentActivity from '../components/RecentActivity.jsx';

const Inventory = () => {
 const [totalProducts, setTotalProducts] = useState(0);

 const handleTotalProducts = (products) => {
  setTotalProducts(products.length);
 };

 const inventoryData = {
  totalItems: 120,
  lowStock: 15,
  outOfStock: 3,
  valuation: 50000,
 };

 const recentActivities = [
  'Widget A - Restocked',
  'Gadget B - Sold',
  'Component C - Received',
 ];

 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="p-4 mt-10">
     <div className="flex flex-row w-full justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-80 py-6">Inventory</h1>
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
        <div>Add Inventory Items</div>
       </button>
      </Link>
     </div>

     <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-2">
      <InventorySummary {...inventoryData} />
      <RecentActivity activities={recentActivities} />
     </div>
    </div>
    <div>
     <InventoryProductList onTotalProducts={handleTotalProducts} />
    </div>
   </div>
  </div>
 );
};

export default Inventory;
