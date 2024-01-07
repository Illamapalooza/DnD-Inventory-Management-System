import React from 'react';
import Navbar from '../components/NavBar.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { Link } from 'react-router-dom';
import DeliveryList from '../components/DeliveryList.jsx';

const Deliveries = () => {
 return (
  <div>
   <Navbar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <div className="flex flex-row w-full justify-between items-center">
      <h1 className="text-2xl font-bold text-gray-80 py-6">Delivery Records</h1>
     </div>
    </div>
    <div>
     <DeliveryList />
    </div>
   </div>
  </div>
 );
};

export default Deliveries;
