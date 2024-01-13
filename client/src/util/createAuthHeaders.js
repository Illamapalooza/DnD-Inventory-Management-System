const createAuthHeaders = () => {
 const token = localStorage.getItem('token');

 const auth = { Authorization: `Bearer ${token}` };

 console.log(auth);

 if (token) {
  return {
   Authorization: `Bearer ${token}`,
  };
 } else {
  // Handle cases where token is not available
  console.warn('No token found in localStorage');
  return {};
 }
};

export default createAuthHeaders;
