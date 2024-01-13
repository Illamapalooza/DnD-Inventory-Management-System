import { Router } from 'express';
import Orders from '../models/Orders.js';
import Suppliers from '../models/Suppliers.js';
import Products from '../models/Products.js';
import OrderDetails from '../models/OrderDetails.js';
import { QueryTypes, Op } from 'sequelize';
import Database from '../database.js';
import Deliveries from '../models/Deliveries.js';
import validateToken from '../middlewares/AuthMiddleware.js';
import checkRole from '../middlewares/RoleAuthMiddleware.js';

// Path: server/routes/OrdersRouter.js
const OrdersRouter = Router();

OrdersRouter.get('/', async (req, res) => {
 const orders = await Orders.findAll();
 res.json(orders);
});

OrdersRouter.post(
 '/add-orders',
 validateToken,
 checkRole(['Manager', 'Admin']),
 async (req, res) => {
  const post = req.body;

  const order = await Orders.create({
   PONumber: post.poNumber,
   OrderDate: post.orderDate,
   ExpectedDeliveryDate: post.expectedDeliveryDate,
   Status: post.status,
   PaymentStatus: post.paymentStatus,
   SupplierID: post.supplierID,
   InvoiceNumber: post.invoiceNumber,
  });

  post.itemsOrdered.forEach(async (item) => {
   await OrderDetails.create({
    OrderID: order.OrderID,
    ProductID: item.ProductID,
    Quantity: item.Quantity,
    Price: post.totalValue,
   });
  });

  const deliveries = await Deliveries.create({
   OrderID: order.OrderID,
   DeliveryDate: post.expectedDeliveryDate,
  });
  res.json(post);
 }
);

OrdersRouter.get('/supplier/:id', async (req, res) => {
 const id = req.params.id;
 const supplier = await Suppliers.findOne({
  where: { SupplierID: id },
  attributes: ['Name'],
 });
 res.json(supplier);
});

OrdersRouter.get('/products', async (req, res) => {
 try {
  const products = await Products.findAll({
   attributes: ['ProductID', 'Name', 'UnitPrice'],
  });
  res.json(products);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

OrdersRouter.get('/suppliers', async (req, res) => {
 try {
  const suppliers = await Suppliers.findAll({
   attributes: ['SupplierID', 'Name'],
  });
  res.json(suppliers);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

OrdersRouter.get('/order-details', async (req, res) => {
 try {
  const orderDetails = await OrderDetails.findAll({});
  res.json(orderDetails);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

OrdersRouter.get('/order-details/:id', async (req, res) => {
 const id = req.params.id;
 try {
  const orderDetails = await Database.session.query(
   `SELECT
    p.Name AS ProductName,
    od.Quantity AS Quantity,
    p.UnitPrice AS UnitPrice,
    o.OrderID AS OrderID,
    od.OrderDetailID AS OrderDetailID,
    od.Price as Price
    FROM
        orders o
    JOIN
        orderdetails od ON o.OrderID = od.OrderID
    JOIN
        products p ON od.ProductID = p.ProductID
    WHERE o.OrderID = ${id}`,
   {
    type: QueryTypes.SELECT,
   }
  );

  res.json(orderDetails);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

OrdersRouter.get('/search', async (req, res) => {
 const { query } = req.query;

 try {
  const search = await Database.session.query(
   `SELECT
          o.OrderID AS OrderID,
          o.PONumber AS PONumber,
          o.OrderDate AS OrderDate,
          o.ExpectedDeliveryDate AS ExpectedDeliveryDate,
          o.Status AS Status,
          o.PaymentStatus AS PaymentStatus,
          o.SupplierID AS SupplierID,
          o.InvoiceNumber AS InvoiceNumber,
          s.Name AS SupplierName,
          p.Name AS ProductName
          FROM
              orders o
            JOIN
                suppliers s ON o.SupplierID = s.SupplierID
            JOIN
                orderdetails od ON o.OrderID = od.OrderID
            JOIN
                products p ON od.ProductID = p.ProductID
            WHERE
                o.PONumber LIKE '%${query}%' OR
                s.Name LIKE '%${query}%' OR
                p.Name LIKE '%${query}%'`,
   {
    type: QueryTypes.SELECT,
   }
  );
  res.json(search);
 } catch (error) {
  res.status(500).send(error.message);
 }
});

OrdersRouter.get('/edit-order/:id', async (req, res) => {
 const id = req.params.id;
 const order = await Database.session.query(
  `SELECT
            o.OrderID AS OrderID,
            o.PONumber AS PONumber,
            o.OrderDate AS OrderDate,
            o.ExpectedDeliveryDate AS ExpectedDeliveryDate,
            o.Status AS Status,
            o.PaymentStatus AS PaymentStatus,
            o.SupplierID AS SupplierID,
            o.InvoiceNumber AS InvoiceNumber,
            s.Name AS SupplierName,
            p.Name AS ProductName,
            od.Quantity AS Quantity,
            od.Price AS Price
            FROM
                orders o
                JOIN
                    suppliers s ON o.SupplierID = s.SupplierID
                JOIN
                    orderdetails od ON o.OrderID = od.OrderID
                JOIN
                    products p ON od.ProductID = p.ProductID
                WHERE
                    o.OrderID = ${id}`,
  {
   type: QueryTypes.SELECT,
  }
 );

 res.json(order);
});

OrdersRouter.put('/payment-status/:id', async (req, res) => {
 const id = req.params.id;
 const paymentStatus = req.body.PaymentStatus;

 await Database.session.query(
  `UPDATE Orders SET PaymentStatus = '${paymentStatus}' WHERE OrderID = ${id}`,
  { type: QueryTypes.UPDATE }
 );
});

OrdersRouter.put('/status/:id', async (req, res) => {
 const id = req.params.id;
 const status = req.body.Status;

 console.log(req.body);

 await Database.session.query(
  `UPDATE Orders SET Status = '${status}' WHERE OrderID = ${id}`,
  { type: QueryTypes.UPDATE }
 );

 if (status === 'Delivered') {
  const orderDetails = await Database.session.query(
   `SELECT * FROM OrderDetails WHERE OrderID = ${id}`,
   { type: QueryTypes.SELECT }
  );

  orderDetails.forEach(async (item) => {
   const inventoryItems = await Database.session.query(
    `SELECT Quantity FROM Inventory WHERE ProductID = ${item.ProductID}`,
    { type: QueryTypes.SELECT }
   );

   if (inventoryItems.length > 0) {
    const inventoryItemQuantity = inventoryItems[0].Quantity; // Accessing the quantity of the first (and likely only) item

    // Update the quantity and last order date
    const newQuantity =
     parseInt(inventoryItemQuantity) + parseInt(item.Quantity);
    await Database.session.query(
     `UPDATE Inventory SET Quantity = ${newQuantity}, LastOrderDate = NOW() WHERE ProductID = ${item.ProductID}`,
     { type: QueryTypes.UPDATE }
    );
   }
  });
 }
});

OrdersRouter.get('/orders-count', async (req, res) => {
 const ordersCount = await Orders.count();
 res.json(ordersCount);
});

export default OrdersRouter;
