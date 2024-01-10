import express from 'express';
import { Router } from 'express';
import Users from '../models/Users.js';
import bcrypt from 'bcrypt';

const UsersRouter = Router();

UsersRouter.post('/auth/login', async (req, res) => {
 const { email, password } = req.body;

 const user = await Users.findOne({
  where: { Email: email },
 });

 if (!user) return res.status(404).send('User not found');

 bcrypt.compare(password, user.Password).then((result) => {
  if (!result) {
   return res.status(404).send('Password is Incorrect');
  }
  res.status(200).send('You are logged in');
 });
});

UsersRouter.post('/register', async (req, res) => {
 const post = req.body;

 const password = post.password;
 const user = await Users.findOne({
  where: { Email: post.email },
 });

 if (user) return res.status(404).send('Email already used');

 bcrypt.hash(password, 10).then(async (hash) => {
  await Users.create({
   Name: post.name,
   Password: hash,
   Address: post.address,
   Phone: post.phone,
   Email: post.email,
   Role: post.role,
   DateCreated: Date.now(),
  });
 });

 res.json(post);
});

export default UsersRouter;
