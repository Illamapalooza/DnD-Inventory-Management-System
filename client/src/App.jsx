import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Landing from './routes/Landing.jsx';

const App = () => {
 return (
  <div className="App">
   <Router>
    <Routes>
     <Route path="/" exact element={Landing()} />
    </Routes>
   </Router>
  </div>
 );
};

export default App;
