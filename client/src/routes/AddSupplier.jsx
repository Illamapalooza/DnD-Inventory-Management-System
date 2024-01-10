import React from 'react';
import NavBar from '../components/NavBar';
import Sidebar from '../components/Sidebar';
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Validation from '../components/SupplierValidation.jsx';
import AddSupplierForm from '../components/AddSupplierForm.jsx';

const AddSupplier = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <AddSupplierForm />
  </div>
 );
};

export default AddSupplier;
