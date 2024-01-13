import { Router } from 'express';
import Deliveries from '../models/Deliveries.js';
import { Op, QueryTypes } from 'sequelize';
import Users from '../models/Users.js';
import Database from '../database.js';
import validateToken from '../middlewares/AuthMiddleware.js';
import checkRole from '../middlewares/RoleAuthMiddleware.js';

const DeliveriesRouter = Router();

DeliveriesRouter.get('/', async (req, res) => {
 const deliveries = await Deliveries.findAll();
 res.json(deliveries);
});

DeliveriesRouter.get('/search', async (req, res) => {
 try {
  const query = req.query.query; // Using 'query' as the parameter name
  const results = await Deliveries.findAll({
   where: {
    [Op.or]: [
     {
      ReceivedBy: {
       [Op.like]: `%${query}%`,
      },
     },
     {
      DeliveryCondition: {
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

DeliveriesRouter.get('/received-by', async (req, res) => {
 const users = await Users.findAll({ attributes: ['UserID', 'Name'] });

 res.json(users);
});

DeliveriesRouter.put('/received-by/:id', async (req, res) => {
 const id = req.params.id; // This is the DeliveryID from the request parameters
 const post = req.body; // This is the data sent in the request body

 // Construct the SQL query
 const sqlQuery = `
        UPDATE Deliveries 
        SET ReceivedBy = '${post.ReceivedBy}'
        WHERE DeliveryID = ${id};
    `;

 // Execute the query using Sequelize
 Database.session
  .query(sqlQuery, {
   type: QueryTypes.UPDATE,
  })
  .then((result) => {
   res.json(result);
  })
  .catch((error) => {
   console.error(error);
   res.status(500).send('Server error');
  });
});

DeliveriesRouter.put('/condition/:id', async (req, res) => {
 const id = req.params.id; // This is the DeliveryID from the request parameters
 const post = req.body; // This is the data sent in the request body

 // Construct the SQL query
 const sqlQuery = `
           UPDATE Deliveries 
           SET DeliveryCondition = '${post.DeliveryCondition}'
           WHERE DeliveryID = ${id};
       `;

 // Execute the query using Sequelize
 Database.session
  .query(sqlQuery, {
   type: QueryTypes.UPDATE,
  })
  .then((result) => {
   res.json(result);
  })
  .catch((error) => {
   console.error(error);
   res.status(500).send('Server error');
  });
});

DeliveriesRouter.delete(
 '/',
 validateToken,
 checkRole(['Admin', 'Manager']),
 async (req, res) => {
  const { id } = req.body;

  console.log(req.headers.authorization);

  await Deliveries.destroy({
   where: {
    DeliveryID: id,
   },
  })
   .then(() => {
    res.json('Delivery Record deleted');
   })
   .catch((err) => {
    res.status(500).send({ message: 'Error deleting item' });
   });
 }
);
export default DeliveriesRouter;
