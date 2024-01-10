import { Router } from 'express';
import Suppliers from '../models/Suppliers.js';
import { Op, QueryTypes } from 'sequelize';
import SupplierProducts from '../models/SupplierProducts.js';
import Database from '../database.js';
import Products from '../models/Products.js';

const SuppliersRouter = Router();

SuppliersRouter.post('/add-suppliers', async (req, res) => {
 const post = req.body;
 const supplier = await Suppliers.create({
  Name: post.supplierName,
  Phone: post.phone,
  Address: post.address,
  Rating: post.rating,
 });

 post.servicesProducts.forEach(async (item) => {
  await SupplierProducts.create({
   SupplierID: supplier.SupplierID,
   ProductID: item.ProductID,
   LeadTime: item.LeadTime,
  });
 });

 res.json(post);
});

SuppliersRouter.get('/supplier-products/:id', async (req, res) => {
 const id = req.params.id;
 try {
  const supplierProducts = await Database.session.query(
   `SELECT
     p.Name AS ProductName,
     p.UnitPrice AS UnitPrice,
     s.SupplierID AS SupplierID,
     sp.ProductID AS ProductID,
     sp.LeadTime as LeadTime
     FROM
         suppliers s
     JOIN
         supplierProducts sp ON s.SupplierID = sp.SupplierID
     JOIN
         products p ON sp.ProductID = p.ProductID
     WHERE s.SupplierID = ${id}`,
   {
    type: QueryTypes.SELECT,
   }
  );

  res.json(supplierProducts);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

SuppliersRouter.get('/edit-supplier/:id', async (req, res) => {
 const id = req.params.id;
 //  const supplier = await Suppliers.findByPk(id);
 const supplier = await Database.session.query(
  `SELECT
  p.Name AS ProductName,
  p.UnitPrice AS UnitPrice,
  s.SupplierID AS SupplierID,
  sp.ProductID AS ProductID,
  sp.LeadTime as LeadTime,
  s.Name AS SupplierName,
  s.Phone AS Phone,
  s.Address AS Address,
  s.Rating AS Rating
  FROM
      suppliers s
  JOIN
      supplierProducts sp ON s.SupplierID = sp.SupplierID
  JOIN
      products p ON sp.ProductID = p.ProductID
  WHERE s.SupplierID = ${id}`,
  {
   type: QueryTypes.SELECT,
  }
 );

 console.log(supplier);

 res.json(supplier);
});

SuppliersRouter.put('/edit-supplier/:id', async (req, res) => {
 const id = req.params.id;
 const post = req.body;

 const transaction = await Database.session.transaction();

 try {
  // Update supplier details
  await Suppliers.update(
   {
    Name: post.supplierName,
    Phone: post.phone,
    Address: post.address,
    Rating: post.rating,
   },
   {
    where: { SupplierID: id },
    transaction,
   }
  );

  // Get current supplier products
  const currentProducts = await SupplierProducts.findAll({
   where: { SupplierID: id },
   transaction,
  });

  // Map current products for easy lookup
  const currentProductMap = new Map(
   currentProducts.map((p) => [p.ProductID, p])
  );

  // Process each provided product
  for (const item of post.servicesProducts) {
   if (currentProductMap.has(item.ProductID)) {
    // Update existing product
    await SupplierProducts.update(
     { LeadTime: item.LeadTime },
     {
      where: { SupplierID: id, ProductID: item.ProductID },
      transaction,
     }
    );
   } else {
    // Add new product
    await SupplierProducts.create(
     {
      SupplierID: id,
      ProductID: item.ProductID,
      LeadTime: item.LeadTime,
     },
     { transaction }
    );
   }
   currentProductMap.delete(item.ProductID);
  }

  // Remove products not in the provided list
  for (const productID of currentProductMap.keys()) {
   await SupplierProducts.destroy({
    where: { SupplierID: id, ProductID: productID },
    transaction,
   });
  }

  await transaction.commit();
  res.json({ message: 'Supplier and products updated successfully' });
 } catch (error) {
  await transaction.rollback();
  res.status(500).send(error.message);
 }
});

SuppliersRouter.get('/', async (req, res) => {
 const suppliers = await Suppliers.findAll();
 res.json(suppliers);
});

SuppliersRouter.get('/search', async (req, res) => {
 const { query } = req.query;
 const suppliers = await Suppliers.findAll({
  where: {
   Name: { [Op.like]: `%${query}%` },
  },
 });
 res.json(suppliers);
});

SuppliersRouter.delete('/', async (req, res) => {
 const { id } = req.body;

 await Suppliers.destroy({
  where: {
   SupplierID: id,
  },
 })
  .then(() => {
   res.json('Supplier deleted');
  })
  .catch((err) => {
   res.status(500).send({ message: 'Error deleting item' });
  });
});

export default SuppliersRouter;
