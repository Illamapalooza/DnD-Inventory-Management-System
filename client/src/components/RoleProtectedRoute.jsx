import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const RoleProtectedRoute = ({ children, allowedRoles }) => {
 const token = sessionStorage.getItem('token');
 let userRole = null;

 if (token) {
  const decoded = jwtDecode(token);
  userRole = decoded.Role;
 }

 return allowedRoles.includes(userRole) ? (
  children
 ) : (
  <Navigate to="/unauthorized" />
 );
};

export default RoleProtectedRoute;
