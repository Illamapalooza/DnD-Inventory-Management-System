const Validation = (formData) => {
 let errors = {};

 if (formData.productName === '') {
  errors.productName = 'productName is required';
 } else {
  errors.productName = '';
 }

 if (formData.unitPrice === '') {
  errors.unitPrice = 'Price is required';
 } else {
  errors.unitPrice = '';
 }

 if (formData.description === '') {
  errors.description = 'Description is required';
 } else {
  errors.description = '';
 }

 if (formData.category === '') {
  errors.category = 'Category is required';
 } else {
  errors.category = '';
 }

 console.log(errors);

 return errors;
};

export default Validation;
