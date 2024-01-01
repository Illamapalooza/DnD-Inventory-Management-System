import express from 'express';
import { Router } from 'express';
import Users from '../models/Users.js';

const UsersRouter = Router();

UsersRouter.post('/login', async (req, res) => {
 const users = await Users.findOne({
  where: { Email: req.body.email, Password: req.body.password },
 })
  .then((user) => {
   if (!user) {
    res.status(404).send('User not found');
   } else {
    if (user.Password === req.body.password) {
     res.status(200).json(user);
    } else {
     res.status(401).send('Incorrect password');
    }
   }
  })
  .catch((err) => {
   console.log('Error: ', err);
  });
 res.json(users);
});

UsersRouter.post('/register', async (req, res) => {
 const post = req.body;
 await Users.create({
  Name: post.name,
  Password: post.password,
  Address: post.address,
  Phone: post.phone,
  Email: post.email,
  Role: post.role,
 });
 res.json(post);
});

export default UsersRouter;
