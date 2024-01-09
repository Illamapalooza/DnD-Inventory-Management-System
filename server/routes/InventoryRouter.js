import { Router } from 'express';

import { QueryTypes, Op } from 'sequelize';
import Database from '../database.js';

const InventoryRouter = Router();

InventoryRouter.get('/', async (req, res) => {
 const sql = `
  SELECT 
  Products.ProductID,
  Products.Name,
  Products.Description,
  Products.Category,
  Inventory.Quantity,
  Inventory.ReorderLevel,
  Inventory.LastOrderDate
  FROM 
  Products
  LEFT JOIN Inventory 
  ON Products.ProductID = Inventory.ProductID
  `;

 const inventory = await Database.session.query(sql, {
  type: QueryTypes.SELECT,
 });

 InventoryRouter.get('/search', async (req, res) => {
  try {
   const query = req.query.query; // Using 'query' as the parameter name

   const results = await Database.session.query(
    `
    SELECT 
      Inventory.*,
      Products.Name
    FROM 
      Inventory
    JOIN Products 
      ON Inventory.ProductID = Products.ProductID
    WHERE 
      Products.Name LIKE '%${query}%' OR
      Products.Category LIKE '%${query}%'
    `,
    {
     type: QueryTypes.SELECT,
    }
   );

   console.log(results);
   res.json(results);
  } catch (error) {
   console.error(error);
   res.status(500).send('Server error');
  }
 });

 res.json(inventory);
});

export default InventoryRouter;
