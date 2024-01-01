const Validation = (formData) => {
 let errors = {};

 const email_pattern = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
 const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

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

 console.log(errors);

 return errors;
};

export default Validation;
