import React from 'react';
import bannerImage from '../assets/cafe.png';

const Banner = () => {
 return (
  <div
   className="w-full h-[32rem] bg-cover bg-center drop-shadow-xl rounded"
   style={{ backgroundImage: `url(${bannerImage})` }}
  ></div>
 );
};

export default Banner;
