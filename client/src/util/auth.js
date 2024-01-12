import jwt_decode from 'jwt-decode';

export const getUserRole = () => {
 const token = sessionStorage.getItem('token');
 if (token) {
  try {
   const decoded = jwt_decode(token);
   return decoded.Role;
  } catch (error) {
   console.error('Error decoding token:', error);
   return null;
  }
 }
 return null;
};
