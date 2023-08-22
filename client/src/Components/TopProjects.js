import React from 'react'
import { useNavigate } from 'react-router';

function TopProjects({position,collaborators,projectDomain, projectName, projectOverview, projectAuthor, projectCount, projectAuthorImage, projectId}) {
  const navigate = useNavigate(); 

  
  return (
    <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mx-auto sm:mt-16 sm:pt-16 sm:max-w-xs lg:mx-auto lg:max-w-sm ">
    <article className="flex max-w-xl flex-col items-start justify-between p-4">
      <div className="flex items-center gap-x-4 text-xs">
        <time dateTime="2020-03-16" className="text-gray-500">{collaborators} collaborators</time>
        <a href="#" className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-[gray-600] hover:bg-gray-100">{projectDomain}</a>
      </div>
      <div className="group relative">
        <h3 className="mt-3 text-lg font-semibold leading-6 text-[#04276a] group-hover:text-gray-600">
          <a href="#">
            <span className="absolute inset-0"></span>
            {projectName}
          </a>
        </h3>
        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{projectOverview}</p>
      </div>
      <div className="relative mt-8 flex items-center gap-x-4">
        <img src={projectAuthorImage} alt="" className="h-10 w-10 rounded-full bg-gray-50"/>
        <div className="text-sm leading-6">
          <p className="font-semibold text-[#04276a]">
            <a href="#">
              <span className="absolute inset-0"></span>
              {projectAuthor}
            </a>
          </p>
          <p className="text-[#386cdb]">Rank {position} with {projectCount} projects</p>
        </div>
      </div>
    </article>
  </div>
  )
}

export default TopProjects