import React from 'react'

export default function Request(key, type, name, projectName, contactNumber, resume, email, githubLinkOfProject, githubProfileLink, linkedinProfileLink,
    prerequisites, problemStatement, projectDomain, projectOverview, slackLink, startDateOfProject, techStack) {
    console.log(name);
    return (
        <div className="p-2">
            {/* {type==="1" && ( */}
            <div className="items-center block p-3 sm:flex rounded-lg bg-sky-100 border-sky-100 border-2 my-2">
                
                    <div>
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                    </div>
                    <div className="pl-2 flex gap-48">
                        <div className="mb-2 text-base font-normal">
                            <span className="font-medium text-gray-900 dark:text-white">{name} Heather </span> wants to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName} Blockchain Technology.</span>
                        </div>
                        <div align="right" className="flex gap-3 justify-end">
                            <div>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-[#00a04f] "> Approve </button>
                            </div>
                            <div>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500  rounded-lg hover:bg-red-600 "> Decline </button>
                            </div>
                            <div>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-lg">Read More</button>
                            </div>
                        </div>
                </div>
            </div>
            {/* )} */}

            <div className="items-center block p-3 sm:flex rounded-lg bg-green-100 border-green-100 border-2 my-2">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                <div className="pl-2 flex gap-36">
                    <div className="mb-2 text-base font-normal">
                        You allowed <span className="font-medium text-gray-900 dark:text-white">{name} Heather </span> to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName} Blockchain Technology.</span>
                    </div>
                    <div align="right" className="flex gap-3 justify-end">
                        <div className="text-base font-normal text-green-400">
                            Approved
                        </div>
                    </div>
                </div>
            </div>

            <div className="items-center block p-3 sm:flex rounded-lg bg-red-100 border-red-100 border-2 my-2">
                <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                <div className="pl-2 flex gap-14">
                    <div className="mb-2 text-base font-normal">
                        You declined <span className="font-medium text-gray-900 dark:text-white">{name} Heather </span>'s request to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName} Blockchain Technology.</span>
                    </div>
                    <div align="right" className="flex gap-3 justify-end">
                        <div className="text-base font-normal text-red-500">
                            Declined
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

