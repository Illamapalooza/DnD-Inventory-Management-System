import { motion } from 'framer-motion';

const CoffeeCard = ({ id, imgUrl, title, price, active, handleClick }) => {
 return (
  <motion.div
   className={`${
    active == id ? 'flex-[10]' : 'flex-[2]'
   } relative flex items-center justify-center min-w-44 h-[450px] cursor-pointer transition-[flex] ease-in-out duration-700 overflow-hidden rounded-xl`}
   onClick={() => handleClick(id)}
  >
   <img
    src={imgUrl}
    alt={title}
    fill
    className="rounded-xl object-cover w-full h-full"
   />

   {active != id ? (
    <div className="absolute bottom-0 w-24 h-36 text-linen text-2xl font-medium rotate-[-90deg]">
     {title}
    </div>
   ) : (
    <div className="absolute p-6 w-full  h-36 bottom-0 left-0 rounded-b-xl bg-bistre text-linen">
     <h2 className="text-3xl font-medium">{title}</h2>
     <p className="text-2xl font-normal">{price}</p>
    </div>
   )}
  </motion.div>
 );
};

export default CoffeeCard;
