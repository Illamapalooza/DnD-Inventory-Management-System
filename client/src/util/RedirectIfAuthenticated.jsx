import React from 'react';
import { Navigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

const RedirectIfAuthenticated = ({ children }) => {
 const token = localStorage.getItem('token');

 if (token) {
  try {
   jwtDecode(token); // Decodes token and checks if it's valid
   return <Navigate to="/dashboard" />; // Redirects to dashboard if token is valid
  } catch (error) {
   // Handle invalid token case, if necessary
  }
 }

 return children; // Renders the intended component (Login or Register) if not authenticated
};

export default RedirectIfAuthenticated;
