import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import OrderList from '../components/OrderList';
import { Link } from 'react-router-dom';

const Orders = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <div className="flex flex-row w-full justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-80 py-6">Orders</h1>
      <Link to="/orders/add-orders">
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
        <div>Add Order</div>
       </button>
      </Link>
     </div>
     <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
      <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
       <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-orange-500 bg-orange-100 mr-4"></div>
        <div>
         <p className="mb-2 text-sm font-medium text-gray-600">Total Orders</p>
         <p className="text-lg font-semibold text-gray-700">6389</p>
        </div>
       </div>
      </div>
      <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
       <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-green-500 bg-green-100 mr-4"></div>
        <div>
         <p className="mb-2 text-sm font-medium text-gray-600">Active Orders</p>
         <p className="text-lg font-semibold text-gray-700">400</p>
        </div>
       </div>
      </div>
      <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
       <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-blue-500 bg-blue-100 mr-4"></div>
        <div>
         <p className="mb-2 text-sm font-medium text-gray-600">
          Complete Orders
         </p>
         <p className="text-lg font-semibold text-gray-700">376</p>
        </div>
       </div>
      </div>
      <div className="min-w-0 rounded-lg shadow-xs overflow-hidden bg-white">
       <div className="p-4 flex items-center">
        <div className="p-3 rounded-full text-teal-500 bg-teal-100 mr-4"></div>
        <div>
         <p className="mb-2 text-sm font-medium text-gray-600">
          Cancelled Orders
         </p>
         <p className="text-lg font-semibold text-gray-700">35</p>
        </div>
       </div>
      </div>
     </div>
    </div>
    <div>
     <OrderList />
    </div>
   </div>
  </div>
 );
};

export default Orders;
