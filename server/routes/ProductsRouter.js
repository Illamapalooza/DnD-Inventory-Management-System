import { Router } from 'express';
import Products from '../models/Products.js';
import { Op } from 'sequelize';

const ProductsRouter = Router();

ProductsRouter.post('/add-products', async (req, res) => {
 const post = req.body;
 await Products.create({
  Name: post.productName,
  UnitPrice: post.unitPrice,
  SKU: post.sku,
  Description: post.description,
  Brand: post.brand,
  Supplier: post.supplier,
  Category: post.category,
 });
 res.json(post);
});

ProductsRouter.get('/', async (req, res) => {
 const products = await Products.findAll();
 res.json(products);
});

ProductsRouter.get('/edit-product/:id', async (req, res) => {
 const id = req.params.id;
 const product = await Products.findByPk(id);
 res.json(product);
});

ProductsRouter.delete('/', async (req, res) => {
 const { id } = req.body;

 await Products.destroy({
  where: {
   ProductID: id,
  },
 })
  .then(() => {
   res.json('Product deleted');
  })
  .catch((err) => {
   res.status(500).send({ message: 'Error deleting item' });
  });
});

ProductsRouter.post('/edit-product/:id', async (req, res) => {
 const id = req.params.id;
 const post = req.body;
 await Products.update(
  {
   Name: post.productName,
   UnitPrice: post.unitPrice,
   SKU: post.sku,
   Description: post.description,
   Brand: post.brand,
   Supplier: post.supplier,
   Category: post.category,
  },
  { where: { ProductID: id } }
 );
 res.json(post);
});

ProductsRouter.get('/search', async (req, res) => {
 try {
  const query = req.query.query; // Using 'query' as the parameter name
  const results = await Products.findAll({
   where: {
    [Op.or]: [
     {
      Name: {
       [Op.like]: `%${query}%`,
      },
     },
     {
      Description: {
       [Op.like]: `%${query}%`,
      },
     },
    ],
   },
  });
  res.json(results);
 } catch (error) {
  console.error(error);
  res.status(500).send('Server error');
 }
});

export default ProductsRouter;
