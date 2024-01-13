import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
 const [authState, setAuthState] = useState({
  token: localStorage.getItem('token'),
  isAuthenticated: !!localStorage.getItem('token'),
  // other user details if needed
 });

 const login = (token) => {
  localStorage.setItem('token', token);
  setAuthState({
   token: token,
   isAuthenticated: true,
   // set other user details
  });
 };

 const logout = () => {
  localStorage.removeItem('token');
  setAuthState({
   token: null,
   isAuthenticated: false,
   // reset other user details
  });
 };

 return (
  <AuthContext.Provider value={{ authState, login, logout }}>
   {children}
  </AuthContext.Provider>
 );
};

export const useAuth = () => useContext(AuthContext);
