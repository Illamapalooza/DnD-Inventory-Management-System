import express from 'express';
import OrdersRouter from './routes/OrdersRouter.js';
import UsersRouter from './routes/UsersRouter.js';

const app = express();

const PORT = 3000;

app.use(express.json());

app.use('/orders', OrdersRouter);
app.use('/users', UsersRouter);

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});
