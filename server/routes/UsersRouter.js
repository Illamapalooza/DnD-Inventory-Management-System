import express from 'express';
import { Router } from 'express';
import Users from '../models/Users.js';

const UsersRouter = Router();

UsersRouter.get('/', async (req, res) => {
 const users = await Users.findAll();
 res.json(users);
});

UsersRouter.post('/', async (req, res) => {
 const post = req.body;
 await Users.create(post);
 res.json(post);
});

export default UsersRouter;
