import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import EditSupplierForm from '../components/EditSupplierForm.jsx';

const EditSupplier = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <EditSupplierForm />
  </div>
 );
};

export default EditSupplier;
