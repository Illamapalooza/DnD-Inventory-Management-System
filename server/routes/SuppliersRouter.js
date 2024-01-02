import { Router } from 'express';
import Suppliers from '../models/Suppliers.js';
import { Op } from 'sequelize';

const SuppliersRouter = Router();

SuppliersRouter.post('/add-suppliers', async (req, res) => {
 const post = req.body;
 await Suppliers.create({
  Name: post.supplierName,
  Phone: post.phone,
  Address: post.address,
  Rating: post.rating,
 });
 res.json(post);
});

SuppliersRouter.get('/edit-supplier/:id', async (req, res) => {
 const id = req.params.id;
 const supplier = await Suppliers.findByPk(id);
 res.json(supplier);
});

SuppliersRouter.post('/edit-supplier/:id', async (req, res) => {
 const id = req.params.id;
 const post = req.body;
 await Suppliers.update(
  {
   Name: post.supplierName,
   Phone: post.phone,
   Address: post.address,
   Rating: post.rating,
  },
  {
   where: {
    SupplierID: id,
   },
  }
 );
 res.json(post);
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
