const createAuthHeaders = () => {
 const token = sessionStorage.getItem('token');
 return {
  Authorization: `Bearer ${token}`,
 };
};

export default createAuthHeaders;
