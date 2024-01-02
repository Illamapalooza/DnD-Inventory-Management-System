import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import AddProductForm from '../components/AddProductForm.jsx';

const AddProducts = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <AddProductForm />
  </div>
 );
};

export default AddProducts;
