import { Router } from 'express';
import Products from '../models/Products.js';

const ProductsRouter = Router();

ProductsRouter.post('/add-products', async (req, res) => {
 const post = req.body;
 await Products.create({
  Name: post.productName,
  UnitPrice: post.unitPrice,
  SKU: post.sku,
  Quantity: post.quantity,
  Description: post.description,
  Brand: post.brand,
  Supplier: post.supplier,
  Category: post.category,
 });
 res.json(post);
});

export default ProductsRouter;
