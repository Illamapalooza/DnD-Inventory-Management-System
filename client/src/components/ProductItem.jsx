import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ProductItem = ({ product, handleDelete }) => {
 return (
  <tr className="bg-white-800 hover:bg-grayish-900 cursor-pointer">
   <td className="p-4">
    <input type="checkbox" className="rounded text-foreground" />
   </td>
   <td className="p-4 whitespace-no-wrap">
    <div className="flex items-center">
     <img className="h-10 w-10 rounded" src={product.imageUrl} alt="" />
     <div className="ml-4">
      <div className="text-sm leading-5 font-medium text-foreground">
       {product.Name}
      </div>
      <div className="text-sm leading-5 text-grayish">
       {product.Description}
      </div>
     </div>
    </div>
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    ₱ {product.UnitPrice}
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    200
   </td>
   <td className="p-4 whitespace-no-wrap text-sm leading-5 text-grayish-100">
    {product.Category}
   </td>
   <td className="flex p-4 whitespace-no-wrap text-right text-sm leading-5 font-medium space-x-2">
    <Link
     className="text-grayish-200 hover:text-grayish-500"
     to={`/products/edit-product/${product.ProductID}`}
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

    <button
     className="text-grayish-200 hover:text-grayish-500"
     onClick={() => handleDelete(product.ProductID)}
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

export default ProductItem;
