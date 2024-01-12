import React from 'react';

const InventorySummary = ({ totalItems, lowStock, outOfStock, valuation }) => {
 return (
  <div className="bg-white shadow-md p-4 min-w-0 rounded-lg">
   <h2 className="font-bold text-lg mb-3">Inventory Summary</h2>
   <div className="grid grid-cols-2 gap-4">
    <div>
     <p className="font-semibold">Total Items:</p>
     <p>{totalItems}</p>
    </div>
    <div>
     <p className="font-semibold">Low Stock:</p>
     <p>{lowStock}</p>
    </div>
    <div>
     <p className="font-semibold">Out of Stock:</p>
     <p>{outOfStock}</p>
    </div>
    <div>
     <p className="font-semibold">Valuation:</p>
     <p>₱{valuation.toFixed(2)}</p>
    </div>
   </div>
  </div>
 );
};

export default InventorySummary;
