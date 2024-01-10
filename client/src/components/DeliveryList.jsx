import React from 'react';
import Pagination from './Pagination.jsx';
import SupplierPerson from './SupplierPerson.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';
import DeliveryItem from './DeliveryItem.jsx';

const DeliveryList = () => {
 const [deliveries, setDeliveries] = useState([]);

 const [search, setSearch] = useState('');

 //  Pagination Logic

 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setItemsPerPage] = useState(10);

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentDeliveries = deliveries.slice(indexOfFirstItem, indexOfLastItem);

 useEffect(() => {
  axios
   .get('http://localhost:3000/deliveries')
   .then((res) => {
    setDeliveries(res.data);
   })
   .catch((error) => console.error('Error:', error));
 }, []);

 const handleInputChange = (e) => {
  setSearch(e.target.value);
 };

 const handleSearch = () => {
  axios
   .get(`http://localhost:3000/deliveries/search?query=${search}`)
   .then((response) => {
    setDeliveries(response.data);
   })
   .catch((error) => console.error('Error:', error));
 };

 const handleDelete = (id) => {
  axios
   .delete(`http://localhost:3000/deliveries`, { data: { id: id } })
   .then((response) => {
    console.log(response);
    const updatedDeliveries = setDeliveries(
     deliveries.filter((delivery) => delivery.DeliveryID !== id)
    );
    setDeliveries(updatedDeliveries);
    window.location.reload();
   })
   .catch((error) => console.error('Error:', error));
 };

 const handlePageChange = (pageNumber) => {
  setCurrentPage(pageNumber);
 };

 return (
  <div>
   <div className="w-full px-4">
    <div className="w-full flex text-center space-x-6 justify-between">
     <div className="flex space-x-4 items-center text-sm font-semibold">
      <div className="font-semibold text-lg text-foreground">
       Delivery Records List
      </div>
     </div>
     <div className="flex space-x-4 items-center">
      <div className="flex pt-2 relative mx-auto text-gray-600 items-center">
       {/* Search Bar */}
       <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none items-center"
        type="search"
        name="search"
        placeholder="Search"
        decoration="none"
        onChange={handleInputChange}
       />
       <button
        className="absolute right-0 top-0 mt-5 mr-4"
        onClick={handleSearch}
       >
        <svg
         xmlns="http://www.w3.org/2000/svg"
         fill="none"
         viewBox="0 0 24 24"
         strokeWidth={2}
         stroke="currentColor"
         className="text-grayish h-4 w-4"
        >
         <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
         />
        </svg>
       </button>
      </div>

      <button className="flex py-2 px-4 items-center space-x-2 text-grayish-300 bg-white rounded-lg shadow-md">
       <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-4 h-4"
       >
        <path
         strokeLinecap="round"
         strokeLinejoin="round"
         d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"
        />
       </svg>
       <div className="font-semibold">Filter</div>
      </button>
     </div>
    </div>
   </div>

   {/* Delivery List */}

   <div className="mt-4 px-4">
    <div className="min-h-screen bg-white rounded-lg p-6 shadow-md">
     <div className="overflow-x-auto">
      <table className="min-w-full">
       <thead>
        <tr className="text-left text-foreground-40 border-b border-b-grayish-700">
         <th className="p-4">#</th>
         <th className="p-4">Delivery ID</th>
         <th className="p-4">Order ID</th>
         <th className="p-4">Delivery Date</th>
         <th className="p-4">Received By</th>
         <th className="p-4">Delivery Condition</th>
         <th className="p-4">Action</th>
        </tr>
       </thead>
       <tbody>
        {currentDeliveries.map((delivery) => (
         <DeliveryItem
          key={delivery.DeliveryID}
          delivery={delivery}
          handleDelete={handleDelete}
         />
        ))}
       </tbody>
      </table>
     </div>
    </div>
    <div className="w-full flex justify-end">
     <Pagination
      totalItems={deliveries.length}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={handlePageChange}
     />
    </div>
   </div>
  </div>
 );
};

export default DeliveryList;
