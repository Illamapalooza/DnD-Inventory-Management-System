import React from 'react';

const OrderValidation = (formdata) => {
 const errors = {};

 if (formdata.poNumber === '') {
  errors.poNumber = 'PO Number is required';
 } else {
  errors.poNumber = '';
 }

 if (formdata.orderDate === '') {
  errors.orderDate = 'Order Date is required';
 } else {
  errors.orderDate = '';
 }

 if (formdata.expectedDeliveryDate === '') {
  errors.expectedDeliveryDate = 'Expected Delivery Date is required';
 } else {
  errors.expectedDeliveryDate = '';
 }

 if (formdata.supplierID === '') {
  errors.supplierID = 'Supplier is required';
 } else {
  errors.supplierID = '';
 }

 if (formdata.itemsOrdered === '') {
  errors.itemsOrdered = 'Items Ordered is required';
 } else {
  errors.itemsOrdered = '';
 }

 if (formdata.paymentStatus === '') {
  errors.paymentStatus = 'Payment Status is required';
 } else {
  errors.paymentStatus = '';
 }

 if (formdata.invoiceNumber === '') {
  errors.invoiceNumber = 'Invoice Number is required';
 } else {
  errors.invoiceNumber = '';
 }

 console.log(errors);
 return errors;
};

export default OrderValidation;
