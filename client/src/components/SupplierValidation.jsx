const Validation = (formData) => {
 let errors = {};

 if (formData.supplierName === '') {
  errors.supplierName = 'Name is required';
 } else {
  errors.supplierName = '';
 }

 if (formData.phone === '') {
  errors.phone = 'Phone is required';
 } else {
  errors.phone = '';
 }

 if (formData.address === '') {
  errors.address = 'Address is required';
 } else {
  errors.address = '';
 }

 console.log(errors);

 return errors;
};

export default Validation;
