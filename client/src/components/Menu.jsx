import { useState } from 'react';
import CoffeeCard from './CoffeeCard.jsx';

const menu = [
 {
  id: '1',
  imgUrl:
   'https://images.unsplash.com/photo-1512568400610-62da28bc8a13?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Cappuccino',
  price: '$5.00',
 },
 {
  id: '2',
  imgUrl:
   'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Americano',
  price: '$5.00',
 },
 {
  id: '3',
  imgUrl:
   'https://images.unsplash.com/photo-1485808191679-5f86510681a2?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Latte',
  price: '$5.00',
 },
 {
  id: '4',
  imgUrl:
   'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Macchiato',
  price: '$5.00',
 },
 {
  id: '5',
  imgUrl:
   'https://images.unsplash.com/photo-1648867134727-0b868ba73eb4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Mocha',
  price: '$5.00',
 },
];

const OurMenu = () => {
 const [active, setActive] = useState('3');

 return (
  <div
   className="min-h-screen w-screen overflow-x-hidden relative px-40 py-4"
   id="menu"
  >
   <div className="text-3xl font-bold text-center mt-32 mb-12">Our Menu</div>
   <div className="text-2xl mt-8 flex flex-row min-h-[70vh] gap-2">
    {menu.map((coffee, index) => (
     <CoffeeCard
      key={coffee.id}
      {...coffee}
      active={active}
      handleClick={setActive}
     ></CoffeeCard>
    ))}
   </div>
  </div>
 );
};

export default OurMenu;
