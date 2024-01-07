import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Registration from './routes/Register.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Products from './routes/Products.jsx';
import AddProducts from './routes/AddProducts.jsx';
import Orders from './routes/Orders.jsx';
import AddOrders from './routes/AddOrders.jsx';
import Suppliers from './routes/Suppliers.jsx';
import EditProduct from './routes/EditProduct.jsx';
import AddSupplier from './routes/AddSupplier.jsx';
import EditSupplier from './routes/EditSupplier.jsx';
import Inventory from './routes/Inventory.jsx';
import EditOrder from './routes/EditOrder.jsx';
import Deliveries from './routes/Deliveries.jsx';

const App = () => {
 return (
  <div className="App">
   <Router>
    <Routes>
     <Route path="/login" exact element={Login()} />
     <Route path="/register" exact element={Registration()}></Route>
     <Route path="/dashboard" exact element={Dashboard()}></Route>
     <Route path="/products" exact element={Products()}></Route>
     <Route path="/products/add-products" exact element={AddProducts()}></Route>
     <Route path="/orders" exact element={Orders()}></Route>
     <Route path="/orders/add-orders" exact element={AddOrders()}></Route>
     {/* <Route path="/orders/edit-order/:id" element={EditOrder()}></Route> */}
     <Route path="/suppliers" exact element={Suppliers()}></Route>
     <Route path="/products/edit-product/:id" element={EditProduct()}></Route>
     <Route
      path="/suppliers/add-suppliers"
      exact
      element={AddSupplier()}
     ></Route>
     <Route
      path="/suppliers/edit-supplier/:id"
      element={EditSupplier()}
     ></Route>
     <Route path="/inventory" exact element={Inventory()}></Route>
     <Route path="/deliveries" exact element={Deliveries()}></Route>
    </Routes>
   </Router>
  </div>
 );
};

export default App;
