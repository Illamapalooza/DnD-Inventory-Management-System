import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './routes/Login.jsx';
import Registration from './routes/Register.jsx';
import Dashboard from './routes/Dashboard.jsx';
import Products from './routes/Products.jsx';
import AddProducts from './routes/AddProducts.jsx';

const App = () => {
 return (
  <div className="App">
   <Router>
    <Routes>
     {/* <Route path="/" exact element={Login()} /> */}
     <Route path="/register" exact element={Registration()}></Route>
     <Route path="/dashboard" exact element={Dashboard()}></Route>
     <Route path="/products" exact element={Products()}></Route>
     <Route path="/add-products" exact element={AddProducts()}></Route>
    </Routes>
   </Router>
  </div>
 );
};

export default App;
