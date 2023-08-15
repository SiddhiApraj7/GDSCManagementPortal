import React from 'react';
import { Link } from 'react-router-dom';

export default function Request({ key, id, type, name, projectName, contactNumber, resume, email, githubLinkOfProject, githubProfileLink, linkedinProfileLink,
    prerequisites, problemStatement, projectDomain, projectOverview, slackLink, startDateOfProject, techStack }) {
    console.log("Id", id);


    return (
        <div className="p-2">
              {type === "1" && ( 
                <div className="items-center block p-3 sm:flex rounded-lg bg-sky-100 border-sky-100 border-2 my-2">

                    <div>
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                    </div>
                    <div className="pl-2 flex gap-48">
                        <div className="mb-2 text-base font-normal">
                            <span className="font-medium text-gray-900 dark:text-white">{name} </span> wants to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}.</span>
                        </div>
                        <div align="right" className="flex gap-3 justify-end">
                            <div>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-[#00a04f] "> Approve </button>
                            </div>
                            <div>
                                <button className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500  rounded-lg hover:bg-red-600 "> Decline </button>
                            </div>
                            <div>
                                <button data-modal-target="defaultModal" data-modal-toggle="defaultModal" className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 text-center dark:bg-blue-600 " type="button">Read More</button>
                                <div id="defaultModal" tabIndex="-1" aria-hidden="true" className="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
                                    <div className="relative w-full max-w-2xl max-h-full">

                                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">

                                            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                                    Terms of Service
                                                </h3>
                                                <button type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="defaultModal">
                                                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                                    </svg>
                                                    <span className="sr-only">Close modal</span>
                                                </button>
                                            </div>

                                            <div className="p-6 space-y-6">
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    With less than a month to go before the European Union enacts new consumer privacy laws for its citizens, companies around the world are updating their terms of service agreements to comply.
                                                </p>
                                                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                                                    The European Union’s General Data Protection Regulation (G.D.P.R.) goes into effect on May 25 and is meant to ensure a common set of data rights in the European Union. It requires organizations to notify users as soon as possible of high-risk data breaches that could personally affect them.
                                                </p>
                                            </div>

                                            <div className="flex items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                                                <button data-modal-hide="defaultModal" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">I accept</button>
                                                <button data-modal-hide="defaultModal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Decline</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
             )}  

            {type === "2" && (
                <div className="items-center block p-3 sm:flex rounded-lg bg-green-100 border-green-100 border-2 my-2">
                    <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                    <div className="pl-2 flex gap-36">
                        <div className="mb-2 text-base font-normal">
                            You allowed <span className="font-medium text-gray-900 dark:text-white">{name}</span> to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}.</span>
                        </div>
                        <div align="right" className="flex gap-3 justify-end">
                            <div className="text-base font-normal text-green-400">
                                Approved
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {type === "3" && (
                <div className="items-center block p-3 sm:flex rounded-lg bg-red-100 border-red-100 border-2 my-2">
                    <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                    <div className="pl-2 flex gap-14">
                        <div className="mb-2 text-base font-normal">
                            You declined <span className="font-medium text-gray-900 dark:text-white">{name} </span>'s request to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}.</span>
                        </div>
                        <div align="right" className="flex gap-3 justify-end">
                            <div className="text-base font-normal text-red-500">
                                Declined
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

