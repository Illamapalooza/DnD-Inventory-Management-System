import Navbar from '../components/NavBar.jsx';
import Hero from '../components/Hero.jsx';
import Menu from '../components/Menu.jsx';
import Contact from '../components/Contact.jsx';

const Home = () => {
 return (
  <div className="bg-bone2">
   <Hero />
   <Menu />
   <Contact />
   <Navbar />
  </div>
 );
};

export default Home;
