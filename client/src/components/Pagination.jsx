import React from 'react';

const Pagination = ({
 totalItems,
 itemsPerPage,
 currentPage,
 onPageChange,
}) => {
 const totalPages = Math.ceil(totalItems / itemsPerPage);
 const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

 return (
  <div className="flex items-center space-x-2 bg-white-800 p-4">
   <span className="text-foreground-200">Total {totalItems} Items</span>
   <button
    className="rounded-xl bg-none text-foreground px-3 py-1 border border-grayish-700"
    onClick={() => onPageChange(currentPage - 1)}
    disabled={currentPage === 1}
   >
    &lt;
   </button>
   {pages.map((page) => (
    <button
     key={page}
     className={`rounded-xl px-3 py-1 ${
      currentPage === page
       ? 'bg-kelly-500'
       : 'bg-none border border-grayish-700'
     } text-goreground`}
     onClick={() => onPageChange(page)}
    >
     {page}
    </button>
   ))}
   <button
    className="rounded-xl bg-none text-foreground px-3 py-1 border border-grayish-700"
    onClick={() => onPageChange(currentPage + 1)}
    disabled={currentPage === totalPages}
   >
    &gt;
   </button>
   <button
    className="rounded-xl bg-kelly-500 text-foreground px-3 py-1 border border-grayish-700"
    onClick={() => onPageChange(totalPages)}
    disabled={currentPage === totalPages}
   >
    &gt;|
   </button>
  </div>
 );
};

export default Pagination;
