import React from 'react'
import logoImg from "../media/gdsc-logo.png";
import { Link } from 'react-router-dom';
import ProjectCardDashboard from '../Components/ProjectCardDashboard';
export default function Collaborator_dashboard() {
    
  return (
    <div>
      


      <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
  <div className="px-3 py-3 lg:px-5 lg:pl-3">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-start">
        
        <a href="/" className="flex ml-2 md:mr-24">
          <img src={logoImg} className="h-12 mr-3" alt="GDSC Logo" />
          <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Your Dashboard</span>
        </a>
      </div>
      <div className="flex items-center">
          <div className="flex items-center ml-3">
            
           
                
<form className='lg:flex hidden'>   
    <label for="default-search" className="mb-2 text-sm  font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" className="block w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Projects, Collaborators..." required/>
        <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

           
          </div>
        </div>
    </div>
  </div>
</nav>

<aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
   <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
    <div className='flex flex-col gap-4 mb-10 mt-4'>
    <img className="w-20 h-20 rounded-full mx-auto" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo"/>
    <h1 className='text-center text-lg'>Yash Rai</h1>
    </div>
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <span className="ml-3">Dashboard</span>
            </a>
         </li>
        
         <li>
            <div  className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z"/>
               </svg>
              <Link to="/collaborator-dashboard/inbox" className="flex-1 ml-3 whitespace-nowrap">Inbox</Link>
               <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
            </div>
         </li>
        
         
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"/>
  </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
            </a>
         </li>
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4m6-8L7 5l4 4"/>
  </svg>
               <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
            </a>
         </li>
      </ul>
   </div>
</aside>

<div className="p-4 sm:ml-64">
   <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
      
      <div className="grid grid-cols-2 gap-4 mb-4">
         
         <div className=" h-auto p-2 rounded bg-gray-50 dark:bg-gray-800">
            <h1 className="lg:text-2xl text-sm lg:p-4 p-2 font-semibold text-gray-800 dark:text-gray-500">
              Projects Completed
            </h1>
            <h1 className="lg:text-2xl text-sm lg:px-4 px-2 font-semibold text-gray-800 dark:text-gray-500">4</h1>
         </div>
         <div className=" h-auto p-2 rounded bg-gray-50 dark:bg-gray-800">
            <h1 className="lg:text-2xl text-sm lg:p-4 p-2 font-semibold text-gray-800 dark:text-gray-500">
              Skills
            </h1>
           <div className='grid lg:grid-cols-3 grid-cols-1 gap-4 '>
                <div className='rounded-2xl p-2 border-[#487fe6] border-2  bg-blue-100'><h1 className="text-center ">ML</h1></div>
                <div className='rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-50'><h1 className="text-center">Web Dev</h1></div>
                <div className='rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-100'><h1 className="text-center">App Dev</h1></div>
                <div className='rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-100'><h1 className="text-center">ML</h1></div>
                <div className='rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-50'><h1 className="text-center">Web Dev</h1></div>
                <div className='rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-100'><h1 className="text-center">App Dev</h1></div>
           </div>
         </div>
      </div>
      <h1 className='text-4xl font-semibold my-10'>Active Projects</h1>
      <div className="grid grid-cols-3 gap-6 h-auto mb-4 rounded bg-gray-50 dark:bg-gray-800">
        <ProjectCardDashboard />
        <ProjectCardDashboard />
        <ProjectCardDashboard />
        <ProjectCardDashboard />
        <ProjectCardDashboard />
        <ProjectCardDashboard />
      </div>
      
   </div>
</div>

    </div>
  )
}
