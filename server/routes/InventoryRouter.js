import { Router } from 'express';
import Orders from '../models/Orders.js';
import Products from '../models/Products.js';
import Suppliers from '../models/Suppliers.js';
import SupplierProducts from '../models/SupplierProducts.js';
import OrderDetails from '../models/OrderDetails.js';
import Inventory from '../models/Inventory.js';

const InventoryRouter = Router();

InventoryRouter.get('/', async (req, res) => {
 await Products.findAll({
  attributes: [
   'ProductID',
   'Name',
   'Description',
   'Category',
   'UnitPrice',
   'SKU',
   'Brand',
  ],
  include: [
   {
    model: Inventory,
    as: 'Inventory', // Using the alias defined in the association
    attributes: ['Quantity', 'ReorderLevel', 'LastOrderDate'],
   },
   {
    model: SupplierProducts,
    attributes: [],
    include: [
     {
      model: Suppliers,
      attributes: ['Name'],
     },
    ],
   },
  ],
  group: ['Product.ProductID', 'SupplierProducts->Supplier.Name'],
  raw: true,
 })
  .then((products) => {
   res.json(products);
   console.log(products);
  })
  .catch((error) => {
   console.error(error);
  });
});

export default InventoryRouter;
