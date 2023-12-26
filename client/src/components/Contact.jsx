import React from 'react';
import logo from '../assets/logo.png';

const Contact = () => {
 //  return (
 //   <section>
 //    <div className="bg-licorice h-[70vh]">
 //     <div className="container px-6 py-12 mx-auto">
 //      <div className="text-center">
 //       <p className="font-medium text-munsell">Get in Touch</p>

 //       <h1 className="mt-2 text-2xl font-semibold text-linen-800 md:text-3xl ">
 //        Contact Us
 //       </h1>

 //       <p className="mt-3 text-bone2">
 //        Our friendly staff is always here to chat.
 //       </p>
 //      </div>

 //      <div className="grid grid-cols-1 gap-12 mt-10 md:grid-cols-2 lg:grid-cols-3">
 //       <div className="flex flex-col items-center justify-center text-center">
 //        <span className="p-3 text-bistre-500 rounded-full bg-munsell">
 //         <svg
 //          xmlns="http://www.w3.org/2000/svg"
 //          fill="none"
 //          viewBox="0 0 24 24"
 //          stroke-width="1.5"
 //          stroke="currentColor"
 //          className="w-6 h-6"
 //         >
 //          <path
 //           stroke-linecap="round"
 //           stroke-linejoin="round"
 //           d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
 //          />
 //         </svg>
 //        </span>

 //        <h2 className="mt-4 text-lg font-medium text-linen ">Email</h2>
 //        <p className="mt-2 text-bone2-500 ">
 //         Our friendly team is here to help.
 //        </p>
 //        <p className="mt-2 text-munsell-500 ">codeXcafe@email.com</p>
 //       </div>

 //       <div className="flex flex-col items-center justify-center text-center">
 //        <span className="p-3 text-bistre-500 rounded-full bg-munsell ">
 //         <svg
 //          xmlns="http://www.w3.org/2000/svg"
 //          fill="none"
 //          viewBox="0 0 24 24"
 //          stroke-width="1.5"
 //          stroke="currentColor"
 //          className="w-6 h-6"
 //         >
 //          <path
 //           stroke-linecap="round"
 //           stroke-linejoin="round"
 //           d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
 //          />
 //          <path
 //           stroke-linecap="round"
 //           stroke-linejoin="round"
 //           d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
 //          />
 //         </svg>
 //        </span>

 //        <h2 className="mt-4 text-lg font-medium text-linen ">Location</h2>
 //        <p className="mt-2 text-bone2-500 ">Come visit our cafe location.</p>
 //        <p className="mt-2 text-munsell-500 ">
 //         100 Smith Street Collingwood VIC 3066 AU
 //        </p>
 //       </div>

 //       <div className="flex flex-col items-center justify-center text-center">
 //        <span className="p-3 text-bistre-500 rounded-full bg-munsell ">
 //         <svg
 //          xmlns="http://www.w3.org/2000/svg"
 //          fill="none"
 //          viewBox="0 0 24 24"
 //          stroke-width="1.5"
 //          stroke="currentColor"
 //          className="w-6 h-6"
 //         >
 //          <path
 //           stroke-linecap="round"
 //           stroke-linejoin="round"
 //           d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
 //          />
 //         </svg>
 //        </span>

 //        <h2 className="mt-4 text-lg font-medium text-linen ">Phone</h2>
 //        <p className="mt-2 text-bone2 ">Mon-Fri from 8am to 6pm.</p>
 //        <p className="mt-2 text-munsell-500 ">+63 91234556</p>
 //       </div>
 //      </div>
 //     </div>
 //    </div>
 //    <div className="bg-raw_umber h-[30vh]"></div>
 //   </section>
 //  );

 return (
  <section className=" bg-buff min-h-screen">
   {/* Qoute */}
   <div className="flex h-[25vh] p-6 justify-center items-center">
    <div className="text-bistre text-5xl font-bold">
     Experience the best coffee over!
    </div>
   </div>

   {/* Contact Us */}
   <div className="flex text-linen gap-[2px] h-[65vh]">
    <div className="flex-1 bg-bistre"></div>
    <div className=" bg-bistre flex flex-col justify-center items-center px-6 m-0">
     <div className="flex bg-buff h-60 w-full border-4 border-linen justify-center items-center">
      <div className="text-6xl text-medium text-licorice-100"> CodexCafe</div>
     </div>
     <div className="text-linen font-normal text-2xl py-10 my-4">
      Enjoy Better and Quality Coffee with Codex
     </div>
    </div>
    <div className="bg-bistre flex flex-col justify-center px-6">
     <div className="text-linen font-medium text-3xl py-8">Contact Us</div>
     <div className="text-linen font-normal text-2xl">codexcafe@gmail.com</div>
     <div className="text-linen font-normal text-2xl">
      Call us: <span className="text-munsell">+63 91234556</span>
     </div>
     <div className="text-munsell font-normal my-10">
      Tuscania, St. Ignatius Street, Kauswagan, CDO 9000
     </div>
     <div></div>
    </div>
    <div className="bg-bistre flex flex-col justify-center items-center px-6">
     <img
      src="https://images.unsplash.com/photo-1589879171634-dc628cc021f9?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt=""
      className="h-40 w-60 object-cover outline outline-3 outline-bone2-400 rounded-[1px] my-5"
     />
     <div className="place-self-start text-2xl font-thin">Follow Us</div>
     <div className="flex flex-row justify-start w-full">
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 24 24"
       className="mr-4 h-6 w-6 mt-4"
      >
       <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
      </svg>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 24 24"
       className="mr-4 h-6 w-6 mt-4"
      >
       <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
      </svg>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 24 24"
       className="mr-4 h-6 w-6 mt-4"
      >
       <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
      <svg
       xmlns="http://www.w3.org/2000/svg"
       fill="currentColor"
       viewBox="0 0 24 24"
       className="mr-4 h-6 w-6 mt-4"
      >
       <path d="M12 0c-6.627 0-12 5.372-12 12 0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146 1.124.347 2.317.535 3.554.535 6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z" />
      </svg>
     </div>
    </div>
    <div className="bg-bistre flex-1"></div>
   </div>

   {/* Footer */}
   <div className="p-8 bg-bistre text-linen flex justify-center flex-col items-center font-sans text-sm border-t-2 border-buff">
    <p>Enjoy Better And Better Quality Coffee With CodexCafe.</p>
    <p>Copyright: 2023 Tophats Agency</p>
   </div>
  </section>
 );
};

export default Contact;
