import { Router } from 'express';
import Products from '../models/Products.js';
import { Op } from 'sequelize';
import multer from 'multer';
import path from 'path';

const ProductsRouter = Router();

const storage = multer.diskStorage({
 destination: (req, file, cb) => {
  cb(null, '../client/src/assets/ProductImages');
 },
 filename: (req, file, cb) => {
  cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
 },
});

const upload = multer({
 storage: storage,
 limits: { fileSize: 5000000 },
 fileFilter: (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const mimetype = fileTypes.test(file.mimetype);
  const extname = fileTypes.test(path.extname(file.originalname));

  if (mimetype && extname) {
   return cb(null, true);
  } else {
   cb('Error: Images Only!');
  }
 },
});

ProductsRouter.post(
 '/add-products',
 upload.single('photo'),
 async (req, res) => {
  const post = req.body;
  await Products.create({
   Name: post.productName,
   Size: post.size,
   UnitPrice: post.unitPrice,
   SKU: post.sku,
   Description: post.description,
   Brand: post.brand,
   Supplier: post.supplier,
   Category: post.category,
   Photo: req.file.path,
  });

  res.json(post);
 }
);

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
   Size: post.size,
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
     {
      Category: {
       [Op.like]: `%${query}%`,
      },
     },
     {
      Brand: {
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
