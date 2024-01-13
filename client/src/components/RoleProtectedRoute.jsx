import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const RoleProtectedRoute = ({ children, allowedRoles }) => {
 const token = localStorage.getItem('token');
 let userRole = null;

 if (token) {
  try {
   const decoded = jwtDecode(token);
   userRole = decoded.Role;
  } catch (error) {
   console.error('Error decoding token:', error);
  }
 }

 return userRole && allowedRoles.includes(userRole) ? (
  children
 ) : (
  <Navigate to="/unauthorized" />
 );
};

export default RoleProtectedRoute;
