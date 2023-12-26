import { Fragment, useState, useEffect } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import logo from '../assets/logo.png';

const navigation = [
 { id: 'home', name: 'Home', href: '#', current: false },
 { id: 'menu', name: 'Menu', href: '#menu', current: false },
 { id: 'booking', name: 'Booking', href: '#', current: false },
 { id: 'contact', name: 'Contact', href: '#', current: false },
];

function classNames(...classes) {
 return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 const [hasScrolled, setHasScrolled] = useState(false);
 const [current, setCurrent] = useState('home');

 useEffect(() => {
  const handleScroll = () => {
   const viewportHeight = window.innerHeight;
   const scrollPosition = window.scrollY;

   if (scrollPosition >= viewportHeight - 100) {
    setHasScrolled(true);
   } else {
    setHasScrolled(false);
   }
  };

  window.addEventListener('scroll', handleScroll);

  return () => {
   window.removeEventListener('scroll', handleScroll);
  };
 }, []);

 return (
  <header
   className={
    hasScrolled
     ? 'bg-bistre-200 top-0 fixed w-full bg-opacity-80'
     : 'bg-transparent top-0 fixed w-full'
   }
  >
   <nav
    className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8 md:px-6"
    aria-label="Global"
   >
    <div className="sm:hidden"></div>
    <div className="flex sm:flex-1">
     <a href="#" className="-m-1.5 p-1.5">
      <span className="sr-only">Your Company</span>
      <img className="h-10 w-auto" src={logo} alt="Codex Coffee" />
     </a>
    </div>
    <div className="flex sm:hidden">
     <button
      type="button"
      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-linen-700"
      onClick={() => setMobileMenuOpen(true)}
     >
      <span className="sr-only">Open main menu</span>
      <Bars3Icon className="h-8 w-8" aria-hidden="true" />
     </button>
    </div>
    <div className="hidden sm:flex sm:gap-x-12">
     {navigation.map((item) => (
      <a
       key={item.name}
       href={item.href}
       className={classNames(
        current === item.id
         ? 'text-large font-medium leading-6 text-linen overline overline-offset-[0.4rem] decoration-2'
         : 'text-large font-medium leading-6 text-linen hover:overline overline-offset-[0.4rem] decoration-2'
       )}
       onClick={() => setCurrent(item.id)}
       aria-current={item.current ? 'page' : undefined}
      >
       {item.name}
      </a>
     ))}
    </div>
    <div className="hidden sm:flex sm:flex-1 sm:justify-end">
     <a href="#" className="text-large font-medium leading-6 text-linen-900">
      Log in <span aria-hidden="true">&rarr;</span>
     </a>
    </div>
   </nav>

   {/* small size screen*/}
   <Dialog
    as="div"
    className="sm:hidden"
    open={mobileMenuOpen}
    onClose={setMobileMenuOpen}
   >
    <div className="fixed inset-0 z-10" />
    <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-linen px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-linen">
     <div className="flex justify-between">
      <div></div>
      <a href="#" className="-m-1.5 p-1.5 place-self-center">
       <span className="sr-only">Your Company</span>
       <img className="h-10 w-auto " src={logo} alt="" />
      </a>
      <button
       type="button"
       className="-m-2.5 rounded-md p-2.5 text-bistre-700 justify-self-end"
       onClick={() => setMobileMenuOpen(false)}
      >
       <span className="sr-only">Close menu</span>
       <XMarkIcon className="h-8 w-8" aria-hidden="true" />
      </button>
     </div>
     <div className="mt-6 flow-root">
      <div className="-my-6 divide-y divide-gray-500/10">
       <div className="space-y-2 py-6">
        {navigation.map((item) => (
         <a
          key={item.name}
          href={item.href}
          className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-bistre hover:bg-bone1"
          aria-current={item.current ? 'page' : undefined}
         >
          {item.name}
         </a>
        ))}
       </div>
      </div>
     </div>
    </Dialog.Panel>
   </Dialog>
  </header>
 );
}
