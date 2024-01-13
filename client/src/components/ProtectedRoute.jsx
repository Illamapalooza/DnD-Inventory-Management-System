import React from 'react';
import { Route, Navigate } from 'react-router-dom';
import { useAuth } from '../util/AuthContext.jsx';

const ProtectedRoute = ({ children }) => {
 const { authState } = useAuth();

 if (!authState.isAuthenticated) {
  return <Navigate to="/auth/login" />;
 }

 return children;
};

export default ProtectedRoute;
