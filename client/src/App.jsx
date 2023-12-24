import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './routes/Home.jsx';

const App = () => {
 return (
  <div className="App">
   <Router>
    <Routes>
     <Route path="/" exact element={Home()} />
    </Routes>
   </Router>
  </div>
 );
};

export default App;
