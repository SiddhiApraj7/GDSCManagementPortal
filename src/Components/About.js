import React from 'react';
import { motion } from 'framer-motion';
import TopProjects from './TopProjects';
const projects = [
  {
    date: '26th july 2023',
    tag: 'Web Development',
    projectName: 'Lorem ipsum dolor ',
    projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    projectAuthor: 'John Doe',
    projectAuthorRole: 'Web Developer',
    projectAuthorImage: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  },
  {
   date: '26th july 2023',
    tag: 'Web Development',
    projectName: 'Lorem ipsum dolor sit .',
    projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    projectAuthor: 'John Doe',
    projectAuthorRole: 'Web Developer',
    projectAuthorImage: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'

  },
  {
   date: '26th july 2023',
    tag: 'Web Development',
    projectName: 'Lorem ipsum dolor sit ',
    projectDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.',
    projectAuthor: 'John Doe',
    projectAuthorRole: 'Web Developer',
    projectAuthorImage: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
  }
]

const About = () => {

  return (
<div class="bg-white py-24 sm:py-32">
  <div class="mx-auto max-w-7xl px-6 lg:px-8">
    <div class="mx-auto items-center lg:mx-0 lg:text-center ">
      <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl md:tracking-wide">Top <span className='text-[#386cdb]'>Projects</span></h2>
      <p class="mt-2 text-lg leading-8 text-gray-600"><span className='border-b-2 border-red-500 '>Learn how</span> <span className='border-b-2 border-blue-500 ' >to upskill </span> <span className='border-b-2 border-yellow-400 '>from our top</span> <span className='border-b-2 border-green-400 '>Tech Leads</span></p>
    </div>
    <div class="mt-2 flex flex-col md:flex-row">
      {projects.map((project,i) => (
        <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            key={project.projectName + i}
          >
        <TopProjects
          key={i}
          date={project.date}
          tag={project.tag}
          projectName={project.projectName}
          projectDescription={project.projectDescription}
          projectAuthor={project.projectAuthor}
          projectAuthorRole={project.projectAuthorRole}
          projectAuthorImage={project.projectAuthorImage}
        />
          </motion.div>
          ))}
        </div>
  </div>
</div>
  );
};

export default About;


