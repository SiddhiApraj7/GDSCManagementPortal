import React, { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';
import { db } from '../config/firebase';
import Google from "./Google";
import MoreProjectCard from "./MoreProjectCard";
import { motion } from "framer-motion";
import Loader from './Loader';

function MoreProjects({ name }) {
  const [topProjects, setTopProjects] = useState({
    'Web Development': [],
    'App Development': [],
    'ML/AI': [],
    'Data Science': [],
  });
  const [selectedDomain, setSelectedDomain] = useState("Web Development");

  useEffect(() => {
    const fetchTopProjectsByDomain = async () => {
      try {
        const projectsCollection = collection(db, 'Projects');
        const querySnapshot = await getDocs(projectsCollection);

        const projectsByDomain = {
          'Web Development': [],
          'App Development': [],
          'ML/AI': [],
          'Data Science': [],
        };

        querySnapshot.forEach((doc) => {
          const projectData = doc.data();
          const projectDomain = projectData.projectDomain;

          if (!projectsByDomain[projectDomain]) {
            projectsByDomain[projectDomain] = [];
          }

          projectsByDomain[projectDomain].push({
            id: doc.id,
            projectName: projectData.projectName,
            projectManager: projectData.fullName,
            collaboratorsCount: projectData.collaborators ? projectData.collaborators.length : 0,
          });
        });

        for (const domain in projectsByDomain) {
          projectsByDomain[domain].sort((a, b) => b.collaboratorsCount - a.collaboratorsCount);
          topProjects[domain] = projectsByDomain[domain].slice(0, 4);
        }

        setTopProjects({ ...topProjects });
        console.log('Top projects by domain:', topProjects);
      } catch (error) {
        console.error('Error fetching top projects by domain:', error);
      }
    };

    fetchTopProjectsByDomain();
  }, []);



  return (
    <div id={name}>
      <Google />
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 ">
          <h1 className="flex items-center text-5xl font-extrabold text-[#05276a] justify-center p-5 mb-4">
            Explore
            <span className="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">
              PROJECTS
            </span>
          </h1>
          <div className="mx-auto text-center p-8 grid grid-cols-2 items-center sm:flex sm:mx-auto sm:justify-center">

            <button onClick={() => setSelectedDomain("Web Development")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Web Development
              </span>
            </button>
            <button onClick={() => setSelectedDomain("App Development")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                App Development
              </span>
            </button>
            <button onClick={() => setSelectedDomain("ML/AI")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Machine Learning
              </span>
            </button>
            <button onClick={() => setSelectedDomain("Data Science")} className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                Data Science
              </span>
            </button>
          </div>



          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {topProjects ? (
            // Render projects based on the selected domain
            topProjects[selectedDomain].map((project,i) => (
              <MoreProjectCard
               key={project.id}
               rank ={i+1}
               projectDomain={selectedDomain}
              projectName={project.projectName}
              projectManager ={project.projectManager}
              collaboratorsCount={project.collaboratorsCount} 
               id ={project.id} 
              />
            )))
            :
            (
              <Loader/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MoreProjects;
