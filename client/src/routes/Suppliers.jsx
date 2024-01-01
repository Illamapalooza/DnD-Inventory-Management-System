import React from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import SupplierList from '../components/SupplierList';

const Suppliers = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <div className="flex flex-row w-full justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-80 py-6">Suppliers</h1>
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
       <div>Add Supplier</div>
      </button>
     </div>
    </div>
    <div>
     {' '}
     <SupplierList />
    </div>
   </div>
  </div>
 );
};

export default Suppliers;
