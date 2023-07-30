import React from 'react'
import { Link } from 'react-router-dom';
import logoImg from "../media/gdsc-logo.png";
import ProjectCard from '../Components/ProjectCard';
export default function Inbox() {
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
    <h1 className='text-center text-lg'>Aman Kumar</h1>
    </div>
      <ul className="space-y-2 font-medium">
         <li>
            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
               <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z"/>
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z"/>
               </svg>
               <Link to="/collaborator-dashboard" className="ml-3">Dashboard</Link>
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
<div className="p-4 sm:ml-64 mt-20 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <time className="text-lg font-semibold text-gray-900 dark:text-white">January 13th, 2022</time>
    <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li>
            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image"/>
                <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg className="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image"/>
                <div>
                    <div className="text-base font-normal text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Bonnie Green</span> react to <span className="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg className="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
    </ol>
</div>
<div className="p-4 sm:ml-64 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
    <time className="text-lg font-semibold text-gray-900 dark:text-white">January 12th, 2022</time>
    <ol className="mt-3 divide-y divider-gray-200 dark:divide-gray-700">
        <li>
            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="Laura Romeros image"/>
                <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Laura Romeros</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg className="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="Mike Willi image"/>
                <div>
                    <div className="text-base font-normal text-gray-600 dark:text-gray-400"><span className="font-medium text-gray-900 dark:text-white">Mike Willi</span> react to <span className="font-medium text-gray-900 dark:text-white">Thomas Lean's</span> comment</div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg className="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="Jese Leos image"/>
                <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Jese Leos</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> How to start with Flowbite library</span></div>
                    <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg className="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19ZM8.374 17.4a7.6 7.6 0 0 1-5.9-7.4c0-.83.137-1.655.406-2.441l.239.019a3.887 3.887 0 0 1 2.082 2.5 4.1 4.1 0 0 0 2.441 2.8c1.148.522 1.389 2.007.732 4.522Zm3.6-8.829a.997.997 0 0 0-.027-.225 5.456 5.456 0 0 0-2.811-3.662c-.832-.527-1.347-.854-1.486-1.89a7.584 7.584 0 0 1 8.364 2.47c-1.387.208-2.14 2.237-2.14 3.307a1.187 1.187 0 0 1-1.9 0Zm1.626 8.053-.671-2.013a1.9 1.9 0 0 1 1.771-1.757l2.032.619a7.553 7.553 0 0 1-3.132 3.151Z"/>
                        </svg>
                        Public
                    </span> 
                </div>
            </a>
        </li>
        <li>
            <a href="#" className="items-center block p-3 sm:flex hover:bg-gray-100 dark:hover:bg-gray-700">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-1.jpg" alt="Bonnie Green image"/>
                <div className="text-gray-600 dark:text-gray-400">
                    <div className="text-base font-normal"><span className="font-medium text-gray-900 dark:text-white">Bonnie Green</span> likes <span className="font-medium text-gray-900 dark:text-white">Bonnie Green's</span> post in <span className="font-medium text-gray-900 dark:text-white"> Top figma designs</span></div>
                    <div className="text-sm font-normal">"I wanted to share a webinar zeroheight."</div>
                    <span className="inline-flex items-center text-xs font-normal text-gray-500 dark:text-gray-400">
                        <svg className="w-2.5 h-2.5 mr-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z"/>
                            <path d="m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z"/>
                            <path d="M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z"/>
                        </svg>
                        Private
                    </span> 
                </div>
            </a>
        </li>
    </ol>
</div>

    </div>
  )
}
