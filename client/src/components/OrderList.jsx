import React from 'react';
import OrderItem from './OrderItem.jsx';
import Pagination from './Pagination.jsx';
import { useState, useEffect } from 'react';
import axios from 'axios';

const OrderList = () => {
 const [orders, setOrders] = useState([]);

 const [search, setSearch] = useState('');

 const [suppliers, setSuppliers] = useState([]);

 const [orderDetails, setOrderDetails] = useState([]);

 //  Pagination Logic

 const [currentPage, setCurrentPage] = useState(1);
 const [itemsPerPage, setItemsPerPage] = useState(10);

 const indexOfLastItem = currentPage * itemsPerPage;
 const indexOfFirstItem = indexOfLastItem - itemsPerPage;
 const currentOrders = orders.slice(indexOfFirstItem, indexOfLastItem);

 useEffect(() => {
  // Fetch all orders and suppliers data
  axios
   .get('http://localhost:3000/orders')
   .then((ordersRes) => {
    const ordersData = ordersRes.data;
    setOrders(ordersData);

    // Fetch all suppliers data and store it in an object with SupplierID as keys
    axios
     .get('http://localhost:3000/suppliers')
     .then((suppliersRes) => {
      const suppliersData = suppliersRes.data;
      const suppliersMap = {};

      suppliersData.forEach((supplier) => {
       suppliersMap[supplier.SupplierID] = supplier.Name;
      });

      setSuppliers(suppliersMap);

      ordersData.forEach((order) => {
       const id = order.OrderID;

       axios
        .get(`http://localhost:3000/orders/order-details/`)
        .then((orderDetailsRes) => {
         const orderDetailsData = orderDetailsRes.data;
         const orderDetailsMap = {};

         orderDetailsData.forEach((orderDetail) => {
          orderDetailsMap[orderDetail.OrderID] = orderDetail.Price;
         });

         setOrderDetails(orderDetailsMap);
        })
        .catch((error) =>
         console.error('Error fetching order details:', error)
        );
      });
     })
     .catch((error) => console.error('Error fetching suppliers:', error));
   })
   .catch((error) => console.error('Error fetching orders:', error));
 }, []);

 const handleInputChange = (e) => {
  setSearch(e.target.value);
 };

 const handleSearch = () => {
  axios
   .get(`http://localhost:3000/orders/search?query=${search}`)
   .then((response) => {
    setOrders(response.data);
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
      <div className="font-semibold text-lg text-foreground">Orders List</div>
     </div>
     <div className="flex space-x-4 items-center">
      <div className="flex pt-2 relative mx-auto text-gray-600 items-center">
       <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none items-center"
        type="search"
        name="search"
        placeholder="Search Orders"
        decoration="none"
        value={search}
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

   {/* Product Items */}

   <div className="mt-4 px-4">
    <div className="min-h-screen bg-white rounded-lg p-6 shadow-md">
     <div className="overflow-x-auto">
      <table className="min-w-full">
       <thead>
        <tr className="text-left text-foreground-40 border-b border-b-grayish-700">
         <th className="p-4">#</th>
         <th className="p-4">Purchase Order Number</th>
         <th className="p-4">Supplier</th>
         <th className="p-4">Order Date</th>
         <th className="p-4">Delivery Date</th>
         <th className="p-4">Items Ordered</th>
         <th className="p-4">Order Status</th>
         <th className="p-4">Total Order Value</th>
         <th className="p-4">Payment Status</th>
         <th className="p-4">Invoice Number</th>
         <th className="p-4">Action</th>
        </tr>
       </thead>
       <tbody>
        {currentOrders.map((order) => (
         <OrderItem
          key={order.OrderID}
          order={order}
          supplier={suppliers[order.SupplierID]}
          orderDetails={orderDetails[order.OrderID]}
          itemsOrdered={order.OrderID}
         />
        ))}
       </tbody>
      </table>
     </div>
    </div>
    <div className="w-full flex justify-end ">
     <Pagination
      totalItems={orders.length}
      itemsPerPage={itemsPerPage}
      currentPage={currentPage}
      onPageChange={handlePageChange}
     />
    </div>
   </div>
  </div>
 );
};

export default OrderList;
