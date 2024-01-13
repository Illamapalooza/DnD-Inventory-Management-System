import React from 'react';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Validation from '../components/OrderValidation.jsx';
import createAuthHeaders from '../util/createAuthHeaders.js';

const AddOrderForm = () => {
 const [orderData, setOrderData] = useState({
  supplierID: '',
  poNumber: '',
  orderDate: '',
  expectedDeliveryDate: '',
  itemsOrdered: [],
  status: '',
  paymentStatus: '',
  invoiceNumber: '',
  totalValue: '',
 });

 const [suppliers, setSuppliers] = useState([]);

 const [products, setProducts] = useState([]);

 useEffect(() => {
  axios
   .get('http://localhost:3000/orders/suppliers')
   .then((res) => {
    setSuppliers(res.data);
   })
   .catch((err) => {
    console.log(err);
   });
 }, []);

 useEffect(() => {
  axios
   .get('http://localhost:3000/orders/products')
   .then((res) => {
    setProducts(res.data);
   })
   .catch((err) => {
    console.log(err);
   });
 }, []);

 const [errors, setErrors] = useState({});

 const [totalValue, setTotalValue] = useState(0);

 useEffect(() => {
  const newTotalValue = calculateTotalValue();
  setTotalValue(newTotalValue);

  setOrderData((prevState) => ({
   ...prevState,
   totalValue: newTotalValue,
  }));
 }, [orderData.itemsOrdered, products]);

 const handleChange = (e) => {
  setOrderData((prevState) => ({
   ...prevState,
   [e.target.name]: e.target.value,
  }));
 };

 const handleSubmit = (e) => {
  e.preventDefault();
  setErrors(Validation(orderData));
  if (
   errors.poNumber === '' &&
   errors.orderDate === '' &&
   errors.expectedDeliveryDate === '' &&
   errors.supplierID === '' &&
   errors.itemsOrdered === '' &&
   errors.paymentStatus === '' &&
   errors.invoiceNumber === ''
  ) {
   axios
    .post('http://localhost:3000/orders/add-orders', orderData, {
     headers: createAuthHeaders(),
    })
    .then((res) => {
     if (res.status === 200) {
      alert('Order Added Successfully');
      setOrderData({
       supplierID: '',
       poNumber: '',
       orderDate: '',
       expectedDeliveryDate: '',
       itemsOrdered: [{ ProductID: '', Name: '', Quantity: '' }],
       status: '',
       paymentStatus: '',
       invoiceNumber: '',
       totalValue: '',
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
  setOrderData({
   supplierID: '',
   poNumber: '',
   orderDate: '',
   expectedDeliveryDate: '',
   itemsOrdered: [{ ProductID: '', Name: '', Quantity: '' }],
   status: '',
   paymentStatus: '',
   invoiceNumber: '',
  });
 };

 const handleItemChange = (index, e) => {
  const newItems = [...orderData.itemsOrdered];
  newItems[index][e.target.name] = e.target.value;
  setOrderData({ ...orderData, itemsOrdered: newItems });
 };

 const handleAddItem = () => {
  setOrderData({
   ...orderData,
   itemsOrdered: [
    ...orderData.itemsOrdered,
    { ProductID: '', Name: '', Quantity: 0 },
   ],
  });
 };

 const handleRemoveItem = (index) => {
  const newItems = orderData.itemsOrdered.filter((_, i) => i !== index);
  setOrderData({ ...orderData, itemsOrdered: newItems });
 };

 const calculateTotalValue = () => {
  let total = 0;

  const orderItems = orderData.itemsOrdered;

  for (const item of orderItems) {
   const product = products.find(
    (current) => current.ProductID == item.ProductID
   );
   if (product && !isNaN(item.Quantity) && !isNaN(product.UnitPrice)) {
    const price = parseFloat(product.UnitPrice);
    const qty = parseFloat(item.Quantity);
    total += price * qty;
   }
  }

  return total;
 };
 //  HTML
 return (
  <div>
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
         <label className="text-foreground block mb-2" htmlFor="supplierID">
          Supplier
         </label>
         <select
          id="supplierID"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="supplierID"
          value={orderData.supplierID || ''}
          onChange={handleChange}
          defaultValue=""
         >
          <option value="" disabled>
           Select Supplier
          </option>
          {suppliers.map((supplier) => (
           <option key={supplier.SupplierID} value={supplier.SupplierID}>
            {supplier.Name}
           </option>
          ))}
         </select>

         {errors.supplierID && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.supplierID}
          </span>
         )}
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
           value={orderData.orderDate || ''}
           onChange={handleChange}
          />
          {errors.orderDate && (
           <span className="font-thin text-red-600 text-[12px] my-0 py-0">
            {errors.orderDate}
           </span>
          )}
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
           name="expectedDeliveryDate"
           value={orderData.expectedDeliveryDate || ''}
           onChange={handleChange}
          />
          {errors.expectedDeliveryDate && (
           <span className="font-thin text-red-600 text-[12px] my-0 py-0">
            {errors.expectedDeliveryDate}
           </span>
          )}
         </div>
        </div>

        <div>
         <label className="text-foreground block mb-2" htmlFor="poNumber">
          Purchase Order Number
         </label>
         <input
          id="poNumber"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="poNumber"
          value={orderData.poNumber || ''}
          onChange={handleChange}
         />
         {errors.poNumber && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.poNumber}
          </span>
         )}
        </div>

        <div>
         <label className="text-foreground block mb-2" htmlFor="invoiceNumber">
          Invoice Number
         </label>
         <input
          id="invoiceNumber"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="invoiceNumber"
          value={orderData.invoiceNumber || ''}
          onChange={handleChange}
         />
         {errors.invoiceNumber && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.invoiceNumber}
          </span>
         )}
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="paymentStatus">
          Payment Status
         </label>
         <select
          id="paymentStatus"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="paymentStatus"
          value={orderData.paymentStatus || ''}
          onChange={handleChange}
         >
          <option value="">Select Payment Status</option>
          <option value="Pending">Pending</option>
          <option value="Paid">Paid</option>
          <option value="Cancelled">Cancelled</option>
          <option value="Refunded">Refunded</option>
          <option value="Overdue">Overdue</option>
         </select>
         {errors.paymentStatus && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.paymentStatus}
          </span>
         )}
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="status">
          Order Status
         </label>
         <select
          id="status"
          className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full"
          name="status"
          value={orderData.status || ''}
          onChange={handleChange}
         >
          <option value="">Select Order Status</option>
          <option value="Pending">Pending</option>
          <option value="Delivered">Delivered</option>
          <option value="Cancelled">Cancelled</option>
         </select>
         {errors.status && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.status}
          </span>
         )}
        </div>
        <div className="col-span-2">
         <label className="text-foreground block mb-2" htmlFor="itemsOrdered">
          Order Items
         </label>
         {orderData.itemsOrdered.map((item, index) => (
          <div key={index} className="grid grid-flow-col gap-4 mb-2">
           <select
            name="ProductID"
            placeholder="Product Name"
            value={item.ProductID}
            onChange={(e) => handleItemChange(index, e)}
            className="p-2 border border-gray-300 rounded-lg"
           >
            <option value="">Select Product</option>
            {products.map((product) => (
             <option key={product.id} value={product.ProductID}>
              {product.Name}
             </option>
            ))}
           </select>
           <input
            type="number"
            name="Quantity"
            placeholder="Quantity"
            value={item.Quantity}
            onChange={(e) => handleItemChange(index, e)}
            className="p-2 border border-gray-300 rounded-lg"
           />
           <div className="flex justify-evenly ">
            <button
             onClick={() => handleRemoveItem(index)}
             className="text-red-500 hover:bg-gray-50 border-2 border-red-300 px-2 py-1 rounded-lg w-36"
            >
             Remove
            </button>
           </div>
          </div>
         ))}
         {errors.itemsOrdered && (
          <span className="font-thin text-red-600 text-[12px] my-0 py-0">
           {errors.itemsOrdered}
          </span>
         )}
         <div
          onClick={handleAddItem}
          className="bg-kelly-500 text-white p-2 rounded-lg hover:bg-kelly-400 w-36 cursor-pointer text-center mt-4"
         >
          Add More Items
         </div>
        </div>
        <div>
         <label className="text-foreground block mb-2" htmlFor="totalValue">
          Total Value
         </label>
         <div className="bg-gray-100 p-2 rounded-lg">
          ₱{totalValue.toFixed(2)}
         </div>
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

export default AddOrderForm;
