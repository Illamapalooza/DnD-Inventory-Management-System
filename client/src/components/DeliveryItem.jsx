import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const DeliveryItem = ({ delivery, handleDelete }) => {
 const [receivedBy, setReceivedBy] = useState('');
 const [selectedOption, setSelectedOption] = useState('');
 const [isDisabled, setIsDisabled] = useState(false);
 const [user, setUser] = useState([]);

 useEffect(() => {
  axios
   .get(`http://localhost:3000/deliveries/received-by`)
   .then((res) => {
    setUser(res.data);

    setReceivedBy(delivery.ReceivedBy);

    if (delivery.ReceivedBy) {
     setIsDisabled(true);
    }
   })
   .catch((error) => console.error('Error:', error));
 }, []);

 const handleReceiveChange = (e) => {
  e.preventDefault();
  const deliveryID = delivery.DeliveryID;
  const receiver = e.target.value;

  axios
   .put(`http://localhost:3000/deliveries/received-by/${deliveryID}`, {
    ReceivedBy: receiver,
   })
   .then((response) => {
    console.log(response);
   })
   .catch((error) => console.error('Error:', error));

  setReceivedBy(receivedBy);
 };

 const handleConditionChange = (e) => {
  e.preventDefault();
  const deliveryID = delivery.DeliveryID;
  const deliveryCondition = e.target.value;

  axios
   .put(`http://localhost:3000/deliveries/condition/${deliveryID}`, {
    DeliveryCondition: deliveryCondition,
   })
   .then((response) => {
    console.log(response);
   })
   .catch((error) => console.error('Error:', error));
 };

 return (
  <tr className="bg-white-800 hover:bg-grayish-900 cursor-pointer">
   <td className="p-4">
    <input type="checkbox" className="rounded text-foreground" />
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {delivery.DeliveryID}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {delivery.OrderID}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {delivery.DeliveryDate}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    <select
     name="receivedBy"
     id={delivery.DeliveryID}
     className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full pl-4 focus:outline-none cursor-pointer"
     onChange={handleReceiveChange}
     key={delivery.DeliveryID}
     disabled={isDisabled}
    >
     <option value={receivedBy || ''}>{receivedBy || 'N/A'}</option>
     {user.map((receivedBy) => (
      <option value={receivedBy.Name}>{receivedBy.Name}</option>
     ))}
    </select>
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    <select
     name="deliveryCondition"
     id={delivery.DeliveryID}
     className="bg-none text-foreground border border-grayish rounded-lg p-2 w-full pl-4 focus:outline-none cursor-pointer"
     onChange={handleConditionChange}
    >
     <option value={delivery.DeliveryCondition || ''}>
      {delivery.DeliveryCondition || 'Select Condition'}
     </option>
     <option value="Good">Good</option>
     <option value="Damaged">Damaged</option>
     <option value="Lost">Lost</option>
     <option value="Satiscatory">Satiscatory</option>
    </select>
   </td>
   <td className="flex justify-left p-4 whitespace-no-wrap text-center text-sm leading-5 font-medium space-x-2 pl-6">
    <button
     className="text-grayish-200 hover:text-grayish-500"
     onClick={() => handleDelete(delivery.DeliveryID)}
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
       d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
      />
     </svg>
    </button>
   </td>
  </tr>
 );
};

export default DeliveryItem;
