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

 if (formData.sku === '') {
  errors.sku = 'SKU is required';
 } else {
  errors.sku = '';
 }

 if (formData.quantity === '') {
  errors.quantity = 'Quantity is required';
 } else {
  errors.quantity = '';
 }

 if (formData.description === '') {
  errors.description = 'Description is required';
 } else {
  errors.description = '';
 }

 if (formData.brand === '') {
  errors.brand = 'Brand is required';
 } else {
  errors.brand = '';
 }

 if (formData.supplier === '') {
  errors.supplier = 'Supplier is required';
 } else {
  errors.supplier = '';
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
