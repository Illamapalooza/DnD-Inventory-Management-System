import express from 'express';
import OrdersRouter from './routes/OrdersRouter.js';
import UsersRouter from './routes/UsersRouter.js';
import Users from './models/Users.js';
import cors from 'cors';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/orders', OrdersRouter);
app.use('/', UsersRouter);

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});
