import { Router } from 'express';
import express from 'express';
import Orders from '../models/Orders.js';

// Path: server/routes/OrdersRouter.js
const OrdersRouter = Router();

OrdersRouter.get('/', (req, res) => {
 res.json('Hello orders');
});

OrdersRouter.post('/', async (req, res) => {
 const post = req.body;
 await Orders.create(post);
 res.json(post);
});

export default OrdersRouter;
