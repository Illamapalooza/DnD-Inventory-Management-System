import React, { useEffect } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import EditProductForm from '../components/EditProductForm.jsx';

const EditProduct = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <EditProductForm />
  </div>
 );
};

export default EditProduct;
