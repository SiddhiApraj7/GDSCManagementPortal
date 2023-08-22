import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Web  from "../media/Web.jpg"
import App  from "../media/App.jpg"
import Web3  from "../media/Web3.jpg"
import Ai  from "../media/Ai.jpg"
import Ds  from "../media/Ds.jpg"

function MoreProjectCard({id,projectName,projectManager,collaboratorsCount,rank,projectDomain}) {
  const navigate = useNavigate(); // Hook to handle navigation

  const domainImageMap = {
    'Web Development': Web,
    'App Development': App,
    'Web3 Development': Web3,
    'ML/AI': Ai,
    'Data Science': Ds,
  };


  const handleExploreMoreClick = () => {
    navigate(`/projects/${id}`);
  };
  return (
    <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
  >
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-950 dark:border-gray-700">
      <div className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={domainImageMap[projectDomain] || 'https://source.unsplash.com/random?wallpapers'}
            alt={'project description cover'}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </div>
      <div className="p-5">
        <div>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#05276a] dark:text-white">
           {projectName} 
          </h5>
        </div>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {projectManager}
        </p>
        <div
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#386cdb] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
        <button onClick={handleExploreMoreClick}>
        Read more
        </button>
          
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
    </motion.div>
  );
}

export default MoreProjectCard;
