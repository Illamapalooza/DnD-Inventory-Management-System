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
import ProtectedRoute from './components/ProtectedRoute.jsx';
import Unaothorized from './routes/Unaothorized.jsx';
import RoleProtectedRoute from './components/RoleProtectedRoute.jsx';
import { AuthProvider } from './util/AuthContext.jsx';
import RedirectIfAuthenticated from './util/RedirectIfAuthenticated.jsx';

const App = () => {
 return (
  <div className="App">
   <AuthProvider>
    <Router>
     <Routes>
      <Route
       path="/auth/login"
       exact
       element={
        <RedirectIfAuthenticated>
         <Login />
        </RedirectIfAuthenticated>
       }
      />
      <Route
       path="/register"
       exact
       element={
        <RedirectIfAuthenticated>
         <Registration />
        </RedirectIfAuthenticated>
       }
      />

      <Route
       path="/dashboard"
       exact
       element={
        <ProtectedRoute>
         <Dashboard />
        </ProtectedRoute>
       }
      ></Route>
      <Route
       path="/products"
       exact
       element={
        <ProtectedRoute>
         <Products />
        </ProtectedRoute>
       }
      ></Route>
      <Route
       path="/products/add-products"
       exact
       element={
        <ProtectedRoute>
         <AddProducts />
        </ProtectedRoute>
       }
      ></Route>
      <Route
       path="/orders"
       exact
       element={
        <ProtectedRoute>
         <Orders />
        </ProtectedRoute>
       }
      ></Route>
      <Route
       path="/orders/add-orders"
       exact
       element={
        <RoleProtectedRoute allowedRoles={['Admin', 'Manager']}>
         <ProtectedRoute>
          <AddOrders />
         </ProtectedRoute>
        </RoleProtectedRoute>
       }
      ></Route>
      {/* <Route path="/orders/edit-order/:id" element={EditOrder()}></Route> */}
      <Route
       path="/suppliers"
       exact
       element={
        <ProtectedRoute>
         <Suppliers />
        </ProtectedRoute>
       }
      ></Route>
      <Route
       path="/products/edit-product/:id"
       element={
        <RoleProtectedRoute allowedRoles={['Admin', 'Manager']}>
         <ProtectedRoute>
          <EditProduct />
         </ProtectedRoute>
        </RoleProtectedRoute>
       }
      ></Route>
      <Route
       path="/suppliers/add-suppliers"
       exact
       element={
        <RoleProtectedRoute allowedRoles={['Admin']}>
         <ProtectedRoute>
          <AddSupplier />
         </ProtectedRoute>
        </RoleProtectedRoute>
       }
      ></Route>
      <Route
       path="/suppliers/edit-supplier/:id"
       element={
        <RoleProtectedRoute allowedRoles={['Admin', 'Manager']}>
         <ProtectedRoute>
          <EditSupplier />
         </ProtectedRoute>
        </RoleProtectedRoute>
       }
      ></Route>
      <Route
       path="/inventory"
       exact
       element={
        <ProtectedRoute>
         <Inventory />
        </ProtectedRoute>
       }
      ></Route>
      <Route
       path="/deliveries"
       exact
       element={
        <ProtectedRoute>
         <Deliveries />
        </ProtectedRoute>
       }
      ></Route>
      <Route path="/unauthorized" exact element={Unaothorized()}></Route>
     </Routes>
    </Router>
   </AuthProvider>
  </div>
 );
};

export default App;
