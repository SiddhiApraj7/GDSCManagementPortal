import React from 'react'

function TopProjects({date,tag,projectName,projectDescription,projectAuthor,projectAuthorRole,projectAuthorImage}) {
  return (
    <div class="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none ">
    <article class="flex max-w-xl flex-col items-start justify-between p-4">
      <div class="flex items-center gap-x-4 text-xs">
        <time datetime="2020-03-16" class="text-gray-500">{date}</time>
        <a href="#" class="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-[gray-600] hover:bg-gray-100">{tag}</a>
      </div>
      <div class="group relative">
        <h3 class="mt-3 text-lg font-semibold leading-6 text-[#04276a] group-hover:text-gray-600">
          <a href="#">
            <span class="absolute inset-0"></span>
            {projectName}
          </a>
        </h3>
        <p class="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{projectDescription}</p>
      </div>
      <div class="relative mt-8 flex items-center gap-x-4">
        <img src={projectAuthorImage} alt="" class="h-10 w-10 rounded-full bg-gray-50"/>
        <div class="text-sm leading-6">
          <p class="font-semibold text-[#04276a]">
            <a href="#">
              <span class="absolute inset-0"></span>
              {projectAuthor}
            </a>
          </p>
          <p class="text-[#386cdb]">{projectAuthorRole}</p>
        </div>
      </div>
    </article>
  </div>
  )
}

export default TopProjects