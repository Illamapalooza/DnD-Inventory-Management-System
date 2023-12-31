import React from 'react';
import Sidebar from '../components/Sidebar';
import NavBar from '../components/NavBar';
import Stats from '../components/Stats';

const Dashboard = () => {
 return (
  <div>
   <NavBar />
   <Sidebar />
   <Stats />
  </div>
 );
};

export default Dashboard;
