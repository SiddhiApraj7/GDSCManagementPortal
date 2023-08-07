import React from "react";
import { motion } from "framer-motion";

function MoreProjectCard() {
  return (
    <motion.div
    whileInView={{ opacity: 1 }}
    whileHover={{ scale: 1.1 }}
    transition={{ duration: 0.5, type: 'tween' }}
  >
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-blue-950 dark:border-gray-700">
      <a href="#" className="group">
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src="https://source.unsplash.com/random?wallpapers"
            alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-[#05276a] dark:text-white">
            Noteworthy technology acquisitions 2021
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Apurva Mudgal
        </p>
        <a
          href="#"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-[#386cdb] rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="w-3.5 h-3.5 ml-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
    </motion.div>
  );
}

export default MoreProjectCard;
