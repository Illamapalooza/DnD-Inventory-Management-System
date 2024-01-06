import React from 'react';

const RecentActivity = ({ activities }) => {
 return (
  <div className="bg-white shadow-md p-4 min-w-0 rounded-lg">
   <h2 className="font-bold text-lg mb-3">Recent Activity</h2>
   <ul>
    {activities.map((activity, index) => (
     <li key={index} className="border-b last:border-b-0 py-2">
      {activity}
     </li>
    ))}
   </ul>
  </div>
 );
};

export default RecentActivity;
