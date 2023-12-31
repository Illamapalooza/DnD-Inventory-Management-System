import React from 'react';
import ProductItem from './ProductItem.jsx';
import Pagination from './Pagination.jsx';

const ProductList = () => {
 const sampleProduct = [
  // Sample food items
  {
   id: 1,
   name: 'Fresh Avocados',
   description: 'Ripe - Organic',
   price: '2.99',
   quantity: '156',
   category: 'Whole Foods',
   imageUrl:
    'https://images.unsplash.com/photo-1523049673857-eb18f1d7b578?q=80&w=1975&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   isActive: true,
  },
  {
   id: 2,
   name: 'Almond Milk',
   description: 'Unsweetened - 1L',
   price: '3.50',
   quantity: '200',
   category: "Trader Joe's",
   imageUrl:
    'https://images.unsplash.com/photo-1600788907416-456578634209?q=80&w=1950&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
   isActive: false,
  },
 ];

 return (
  <div>
   <div className="w-full px-4">
    <div className="w-full flex text-center space-x-6 justify-between">
     <div className="flex space-x-4 items-center text-sm font-semibold">
      <div className="font-semibold text-lg text-foreground">Products List</div>
      <div className="flex justify-around bg-white px-1 py-1 rounded-full space-x-2 shadow-sm">
       <button className="focus:bg-kelly-500 px-4 py-2 rounded-full focus:outline-none focus:border-kelly-300 ">
        All
       </button>
       <button className="focus:bg-kelly-500 px-3 py-2 rounded-full focus:outline-none focus:border-kelly-300">
        Active
       </button>
       <button className="focus:bg-kelly-500 px-3 py-2 rounded-full focus:outline-none focus:border-kelly-300">
        Sold
       </button>
      </div>
     </div>
     <div className="flex space-x-4 items-center">
      <div class="flex pt-2 relative mx-auto text-gray-600 items-center">
       <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none items-center"
        type="search"
        name="search"
        placeholder="Search"
        decoration="none"
       />
       <button type="submit" className="absolute right-0 top-0 mt-5 mr-4">
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
         <th className="p-4">Product</th>
         <th className="p-4">Price</th>
         <th className="p-4">Qty</th>
         <th className="p-4">Category</th>
         <th className="p-4">Availability</th>
         <th className="p-4">Action</th>
        </tr>
       </thead>
       <tbody>
        {sampleProduct.map((product) => (
         <ProductItem key={product.id} product={product} />
        ))}
       </tbody>
      </table>
     </div>
    </div>
    <div className="w-full flex justify-end ">
     <Pagination
      totalItems={100}
      itemsPerPage={20}
      currentPage={1}
      onPageChange={3}
     />
    </div>
   </div>
  </div>
 );
};

export default ProductList;
