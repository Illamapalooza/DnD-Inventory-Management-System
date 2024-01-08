import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const OrderItem = ({ order, supplier, orderDetails, itemsOrdered }) => {
 const [items, setItems] = useState([]);

 useEffect(() => {
  axios
   .get(`http://localhost:3000/orders/order-details/${itemsOrdered}`)
   .then((itemsOrderedRes) => {
    const itemsOrderedData = itemsOrderedRes.data;

    setItems(itemsOrderedData);
   });
 }, []);

 return (
  <tr className="bg-white-800 hover:bg-grayish-900 cursor-pointer">
   <td className="p-4">
    <input type="checkbox" className="rounded text-foreground" />
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {order.PONumber}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {supplier}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {order.OrderDate}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {order.ExpectedDeliveryDate}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {items.map((item) => {
     return (
      <div>
       <div>{item.ProductName}</div>
       <div>₱ {item.UnitPrice}</div>
       <div>qty: {item.Quantity}</div>
      </div>
     );
    })}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {order.Status}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    ₱ {orderDetails}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {order.PaymentStatus}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {order.InvoiceNumber}
   </td>
   <td className="flex justify-center items-center p-4 whitespace-no-wrap text-center text-sm leading-5 font-medium space-x-2">
    <Link
     to={`/orders/edit-order/${order.OrderID}`}
     className="text-grayish-200 hover:text-grayish-500"
    >
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
      />
     </svg>
    </Link>
    <a href="#" className="text-grayish-200 hover:text-grayish-500">
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
     >
      <path
       strokeLinecap="round"
       strokeLinejoin="round"
       d="M6 18 18 6M6 6l12 12"
      />
     </svg>
    </a>
   </td>
  </tr>
 );
};

export default OrderItem;
