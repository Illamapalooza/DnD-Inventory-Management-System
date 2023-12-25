import { useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import cafe from '../assets/cafe.png';

export default function Example() {
 const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

 return (
  <div className="bg-fixed bg-cover bg-[url('https://images.unsplash.com/photo-1497515114629-f71d768fd07c?q=80&w=884&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] ">
   <div className="relative isolate px-6 pt-14 lg:px-8">
    <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
     <div className="hidden sm:mb-8 sm:flex sm:justify-center">
      <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-linen-600 ring-2 ring-linen hover:ring-bone1">
       Booking here here.{' '}
       <a href="#" className="font-medium text-munsell">
        <span className="absolute inset-0" aria-hidden="true" />
        Book Now <span aria-hidden="true">&rarr;</span>
       </a>
      </div>
     </div>
     <div className="text-center">
      <h1 className="text-4xl font-bold tracking-tight text-linen sm:text-6xl">
       Where Bytes and Brews Converge
      </h1>
      <p className="mt-6 text-lg leading-8 text-bone1-600">
       Where Bytes and Brews Converge
      </p>
      <div className="mt-10 flex items-center justify-center gap-x-6">
       <a
        href="#"
        className="rounded-md bg-munsell px-3.5 py-2.5 text-md font-medium text-white shadow-sm hover:bg-munsell-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-munsell-600"
       >
        Browse Our Menu
       </a>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}
