import React from 'react';
import { Route, Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
 const accesstoken = sessionStorage.getItem('token');

 if (!accesstoken) {
  // If there's no token, redirect to the login page
  return <Navigate to="/auth/login" />;
 }

 // If there's a token, render the children (protected component)
 return children;
};

export default ProtectedRoute;
