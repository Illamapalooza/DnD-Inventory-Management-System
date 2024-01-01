const Validation = (formData) => {
 let errors = {};

 const email_pattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
 const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
 const phone_pattern = /^[0-9]{11}$/;

 if (formData.name === '') {
  errors.name = 'Username is required';
 } else {
  errors.name = '';
 }

 if (formData.email === '') {
  errors.email = 'Email is required';
 } else if (!email_pattern.test(formData.email)) {
  errors.email = 'Email is invalid';
 } else {
  errors.email = '';
 }

 if (formData.password === '') {
  errors.password = 'Password is required';
 } else if (!password_pattern.test(formData.password)) {
  errors.password = 'Password is invalid';
 } else {
  errors.password = '';
 }

 if (formData.confirmPassword === '') {
  errors.confirmPassword = 'Confirm Password is required';
 } else if (formData.confirmPassword !== formData.password) {
  errors.confirmPassword = 'Password does not matched';
 } else {
  errors.confirmPassword = '';
 }

 if (formData.address === '') {
  errors.address = 'Address is required';
 } else {
  errors.address = '';
 }

 if (formData.phone === '') {
  errors.phone = 'Phone is required';
 } else if (!phone_pattern.test(formData.phone)) {
  errors.phone = 'Phone is invalid';
 } else {
  errors.phone = '';
 }

 if (formData.role === '') {
  errors.role = 'Role is required';
 } else {
  errors.role = '';
 }

 console.log(errors);

 return errors;
};

export default Validation;
