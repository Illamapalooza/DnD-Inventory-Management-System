import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import AddOrderForm from '../components/AddOrderForm.jsx';

const AddOrders = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <AddOrderForm />
  </div>
 );
};

export default AddOrders;
