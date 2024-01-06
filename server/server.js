import express from 'express';
import OrdersRouter from './routes/OrdersRouter.js';
import UsersRouter from './routes/UsersRouter.js';
import ProductsRouter from './routes/ProductsRouter.js';
import cors from 'cors';
import SuppliersRouter from './routes/SuppliersRouter.js';
import InventoryRouter from './routes/InventoryRouter.js';

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/orders', OrdersRouter);
app.use('/', UsersRouter);
app.use('/products', ProductsRouter);
app.use('/suppliers', SuppliersRouter);
app.use('/inventory', InventoryRouter);

app.listen(PORT, () => {
 console.log(`Server is running on port ${PORT}.`);
});
