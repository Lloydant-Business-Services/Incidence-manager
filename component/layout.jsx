'use client'
import React, { useEffect } from 'react'
import { initFlowbite } from "flowbite";
// import { Button } from 'flowbite-react';
import { FaArrowUpFromBracket } from "react-icons/fa6";




const layout=({children})=> {

  useEffect(() => {
    initFlowbite();
  
  }, []);

  return (
    <>

    <div className="antialiased bg-white dark:bg-gray-800">
  <header>
    <nav className="bg-white border-gray-200 px-4 py-3 dark:bg-gray-800">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center">
          <a href="https://flowbite.com" className="flex mr-6">
            <img
              src="https://flowbite.s3.amazonaws.com/logo.svg"
              className="mr-3 h-8"
              alt="Flowbite Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Issues
            </span>
          </a>
        </div>
        <div className="flex justify-between items-center text-sm space-x-4 lg:order-2">
          {/* <a
            href="#"
            className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            My profile
          </a>
          <div className="h-4 w-px mx-2 border dark:border-gray-700" /> */}
          <a
            href="#"
            className=" font-medium text-blue-600 dark:text-blue-500 hover:underline"
          >
            Logout
          </a>
        </div>
      </div>
    </nav>
    <nav
      id="toggleMobileMenu"
      className="bg-gray-50 border-b border-gray-200 dark:bg-gray-700 dark:border-gray-800"
    >
      <div className="px-4 py-2">
        <div className=" items-center">
          <ul className="flex items-center text-center justify-center text-sm text-gray-600 font-medium gap-1">
            <li className="block lg:inline">
              <a
                href="#"
                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
              >
                Payment Related
              </a>
            </li>
            <li className="block lg:inline">
              <a
                href="#"
                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
              >
                Course Related
              </a>
            </li>
            <li className="block lg:inline">
              <a
                href="#"
                className="inline-block px-3 py-2 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
              >
                Others
              </a>
            </li>
           
            <li className="block md:hidden">
              <button
                id="navigationDropdownButton"
                aria-expanded="false"
                data-dropdown-toggle="navigationDropdown"
                className="inline-flex items-center justify-center px-2 py-2 rounded-xl hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </button>
              <div
                className="hidden z-50 my-4 w-56 text-base list-none bg-white rounded-xl divide-y divide-gray-100 shadow dark:bg-gray-700 dark:divide-gray-600"
                id="navigationDropdown"
              >
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>

  <div className="flex flex-col gap-2 px-4">
                <label htmlFor="message" className='mt-5 text-sm font-bold text-gray-700'>Your Message</label>
                <textarea className="h-60 shadow-md  p-8 border max-w-4xl border-slate-300" id="message" placeholder="Type your message here..."></textarea>
            </div>
            <div className='box-border m-0 p-0 flex flex-row'>
              <input type='file' id='uploadBtn' className='hidden' />
              <label htmlFor='uploadBtn' className='inline-block uppercase text-white text-center text-md bg-blue-500 shadow-md p-2 mt-4 ml-4'> <FaArrowUpFromBracket className='font-normal mr-2'/> Upload file</label>
              
            </div>

            
            
            
  <main className="flex-1 p-4 space-y-4">
    {children}
  </main>
</div>

   </>
  )
}

export default layout;
