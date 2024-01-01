import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';

const AddOrders = () => {
 const [orderData, setOrderData] = useState({
  supplierName: '',
  orderDate: '',
  contactNumber: '',
  supplierAddress: '',
  expectedDelivery: '',
  itemsOrdered: '',
  totalOrderValue: '',
  orderStatus: '',
  paymentStatus: '',
  receivingStatus: '',
  invoiceNumber: '',
 });

 const handleChange = (e) => {
  const { name, value } = e.target;
  setOrderData((prevState) => ({
   ...prevState,
   [name]: value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  onSave(orderData);
 };

 return (
  <div>
   <NavBar />
   <Sidebar />
   <div className="p-4 sm:ml-64">
    <div className="w-full p-4 mt-10">
     <h1 className="text-2xl font-bold text-gray-80 py-6">Add Orders</h1>
     <div>
      <form
       className="bg-white p-6 rounded-lg space-y-4"
       onSubmit={handleSubmit}
      >
       <div className="grid grid-cols-2 gap-4">
        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierName">
          Supplier Name
         </label>
         <input
          id="supplierName"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="supplierName"
          value={orderData.supplierName}
          onChange={handleChange}
         />
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierName">
          Contact No
         </label>
         <input
          id="contactNumber"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="contactNumber"
          value={orderData.contactNumber}
          onChange={handleChange}
          type="number"
         />
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="supplierName">
          Supplier Address
         </label>
         <input
          id="supplierAddress"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="supplierAddress"
          value={orderData.supplierAddress}
          onChange={handleChange}
         />
        </div>
        <div className="grid grid-cols-2 gap-4">
         <div>
          <label className="text-foreground block mb-2" htmlFor="orderDate">
           Order Date
          </label>
          <input
           type="date"
           id="orderDate"
           className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
           name="orderDate"
           value={orderData.orderDate}
           onChange={handleChange}
          />
         </div>
         <div>
          <label
           className="text-foreground block mb-2"
           htmlFor="expectedDelivery"
          >
           Expected Delivery
          </label>
          <input
           type="date"
           id="expectedDelivery"
           className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
           name="expectedDelivery"
           value={orderData.expectedDelivery}
           onChange={handleChange}
          />
         </div>
        </div>

        <div className="col-span-2">
         <label className="text-foreground block mb-2" htmlFor="itemsOrdered">
          Items Ordered
         </label>
         <textarea
          id="itemsOrdered"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full resize-none"
          name="itemsOrdered"
          value={orderData.itemsOrdered}
          onChange={handleChange}
         />
        </div>
        <div>
         <label
          className="text-foreground block mb-2"
          htmlFor="totalOrderValue"
         >
          Total Order Value
         </label>
         <input
          type="number"
          id="totalOrderValue"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="totalOrderValue"
          value={orderData.totalOrderValue}
          onChange={handleChange}
         />
        </div>
        <div className="grid grid-cols-2 gap-4">
         <div>
          <label className="text-foreground block mb-2" htmlFor="orderStatus">
           Order Status
          </label>
          <select
           id="orderStatus"
           className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
           name="orderStatus"
           value={orderData.orderStatus}
           onChange={handleChange}
          >
           <option value="">Select Order Status</option>
           <option value="pending">Pending</option>
           <option value="confirmed">Confirmed</option>
           <option value="shipped">Shipped</option>
           <option value="delivered">Delivered</option>
           <option value="cancelled">Cancelled</option>
          </select>
         </div>
         <div>
          <label className="text-foreground block mb-2" htmlFor="paymentStatus">
           Payment Status
          </label>
          <select
           id="paymentStatus"
           className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
           name="paymentStatus"
           value={orderData.paymentStatus}
           onChange={handleChange}
          >
           <option value="">Select Payment Status</option>
           <option value="unpaid">Unpaid</option>
           <option value="partial">Partial Payment</option>
           <option value="paid">Paid</option>
           <option value="overdue">Overdue</option>
          </select>
         </div>
        </div>

        <div>
         <label
          className="text-foreground block mb-2"
          htmlFor="receivingStatus"
         >
          Receiving Status
         </label>
         <select
          id="receivingStatus"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="receivingStatus"
          value={orderData.receivingStatus}
          onChange={handleChange}
         >
          <option value="">Receiving Status</option>
          <option value="awaiting">Awaiting</option>
          <option value="received">Received</option>
          <option value="incomplete">Incomplete</option>
          <option value="damaged">Damaged</option>
         </select>
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="invoiceNumber">
          Invoice Number
         </label>
         <input
          id="invoiceNumber"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="invoiceNumber"
          value={orderData.invoiceNumber}
          onChange={handleChange}
         />
        </div>
       </div>

       <button
        type="submit"
        className="bg-kelly-900 bg-opacity-70 hover:bg-kelly-800 text-kelly-300 border-2 border-kelly border-opacity-50 font-bold py-2 px-4 rounded-lg w-full"
       >
        Save Order
       </button>
      </form>
     </div>
    </div>
   </div>
  </div>
 );
};

export default AddOrders;
