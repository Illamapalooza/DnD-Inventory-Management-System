import { Router } from 'express';
import Orders from '../models/Orders.js';
import Suppliers from '../models/Suppliers.js';
import Products from '../models/Products.js';
import OrderDetails from '../models/OrderDetails.js';
import { QueryTypes, Op } from 'sequelize';
import Database from '../database.js';

// Path: server/routes/OrdersRouter.js
const OrdersRouter = Router();

OrdersRouter.get('/', async (req, res) => {
 const orders = await Orders.findAll();
 res.json(orders);
});

OrdersRouter.post('/add-orders', async (req, res) => {
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
 res.json(post);
});

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

OrdersRouter.get('/edit-order-details/:id', async (req, res) => {
 const id = req.params.id;
 const orderDetails = await OrderDetails.findByPk(id);
 res.json(orderDetails);
});
export default OrdersRouter;

OrdersRouter.post('/edit-order/:id', async (req, res) => {
 const id = req.params.id;
 const post = req.body;
 await Orders.update(
  {
   PONumber: post.poNumber,
   OrderDate: post.orderDate,
   ExpectedDeliveryDate: post.expectedDeliveryDate,
   Status: post.status,
   PaymentStatus: post.paymentStatus,
   SupplierID: post.supplierID,
   InvoiceNumber: post.invoiceNumber,
  },
  { where: { OrderID: id } }
 );
 post.itemsOrdered.forEach(async (item) => {
  await OrderDetails.update(
   {
    OrderID: id,
    ProductID: item.ProductID,
    Quantity: item.Quantity,
    Price: post.totalValue,
   },
   { where: { OrderID: id } }
  );
 });

 res.json(post);
});
