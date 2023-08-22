import React from 'react'
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import Web  from "../media/Web.jpg"
import App  from "../media/App.jpg"
import Web3  from "../media/Web3.jpg"
import Ai  from "../media/Ai.jpg"
import Ds  from "../media/Ds.jpg"

export default function ProjectCardDashboard({key, name, problem, domain, github, slack}) {

  const domainImageMap = {
    'Web Development': Web,
    'App Development': App,
    'Web3 Development': Web3,
    'ML/AI': Ai,
    'Data Science': Ds,
  };


  return (
    <div>


      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <a href="#">
        <img
            src={domainImageMap[domain] || 'https://source.unsplash.com/random?wallpapers'}
            alt={'project description cover'}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </a>
        <div className="p-5">
          <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#05276a] dark:text-white">{name}</h5>
            <h7 className="mb-2 text-l font-bold tracking-tight text-[#05276a] dark:text-white">{domain}</h7>
          </a>
          <p className="mt-2 line-clamp-3 mb-3 font-normal text-gray-700 dark:text-gray-400">{problem}</p>
          <div className="flex justify-between">
          <div className='flex gap-2 my-4'>
            <Link to={github} target="_blank"><GitHubIcon className='h-6 w-8' /></Link>
            <Link to={slack}><a target="_blank" rel="noopener noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="w-8 h-6" viewBox="0 0 50 50">
<path d="M31 24c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v12C36 21.757 33.757 24 31 24zM43 24h-4c-.553 0-1-.447-1-1v-4c0-2.757 2.243-5 5-5s5 2.243 5 5S45.757 24 43 24zM19 24H7c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S21.757 24 19 24zM23 12h-4c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5v4C24 11.553 23.553 12 23 12zM19 48c-2.757 0-5-2.243-5-5V31c0-2.757 2.243-5 5-5s5 2.243 5 5v12C24 45.757 21.757 48 19 48zM7 36c-2.757 0-5-2.243-5-5s2.243-5 5-5h4c.553 0 1 .447 1 1v4C12 33.757 9.757 36 7 36zM43 36H31c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S45.757 36 43 36zM31 48c-2.757 0-5-2.243-5-5v-4c0-.553.447-1 1-1h4c2.757 0 5 2.243 5 5S33.757 48 31 48z"></path>
</svg></a></Link>
          </div>
          {/* <div className="flex mb-5 -space-x-4 pr-2 mt-2">
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="" />
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="" />
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-3.jpg" alt="" />
            <img className="w-10 h-10 border-2 border-white rounded-full dark:border-gray-800" src="https://flowbite.com/docs/images/people/profile-picture-4.jpg" alt="" />
          </div> */}
          <div>
          <a href="#" className="mt-3 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
            </svg>
          </a>
          </div>
          </div>
          
        </div>
      </div>


    </div>
  )
}
