import React from "react";
import logoImg from "../media/gdsc-logo.png";
import { Link } from "react-router-dom";
import ProjectCardDashboard from "../Components/ProjectCardDashboard";
import Sidebar from "../Components/Sidebar";
import { useAuth } from "../contexts/AuthContext";

export default function CollDashboard() {
  const { currentUser,logout } = useAuth();
  
  return (
    <div>
      <Sidebar />

      <aside
        id="logo-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
          <div className="flex flex-col gap-4 mb-10 mt-4">
            <img
              className="w-20 h-20 rounded-full mx-auto"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="user photo"
            />
            <h1 className="text-center text-lg">Yash Rai</h1>
          </div>
          <ul className="space-y-2 font-medium">
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </a>
            </li>

            <li>
              <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <Link
                  to="/collaborator-dashboard/inbox"
                  className="flex-1 ml-3 whitespace-nowrap"
                >
                  Inbox
                </Link>
                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                  3
                </span>
              </div>
            </li>

            <li>
            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                        <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                           <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                        </svg>
                        <button onClick={logout}>
                        <div className="flex-1 ml-3 whitespace-nowrap">Log Out</div>
                        </button>
                     </div>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 12 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M5 1 1 5l4 4m6-8L7 5l4 4"
                  />
                </svg>
                <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
              </a>
            </li>
          </ul>
        </div>
      </aside>

      <div className="p-4 sm:ml-64">
        <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex h-auto p-2 rounded bg-gray-50 dark:bg-gray-800">
              <div>
                <h1 className="lg:text-2xl text-sm lg:p-4 p-2 font-semibold text-gray-800 dark:text-gray-500">
                  Projects Completed
                </h1>
                <div className="rounded-full flex justify-center w-32 h-32 border-8 border-[#487fe6]">
                  <h1 className="text-center text-4xl font-semibold my-auto">
                    4
                  </h1>
                </div>
              </div>
              <div className="flex mt-14 flex-col gap-4 h-auto w-2/3">
                <h1 className="text-gray-600">Beginner</h1>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-[#16a75f] h-2 rounded-full w-[80%] text-xs text-center"></div>
                </div>
                <h1 className="text-gray-600">Intermediate</h1>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-[#ffba01] h-2 rounded-full w-[25%] text-xs text-center"></div>
                </div>
                <h1 className="text-gray-600">Advanced</h1>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-gray-700">
                  <div className="bg-[#fe2c25] h-2 rounded-full w-[15%] text-xs text-center"></div>
                </div>
              </div>
            </div>

            <div className=" h-auto p-2 rounded bg-gray-50 dark:bg-gray-800">
              <h1 className="lg:text-2xl text-sm lg:p-4 p-2 font-semibold text-gray-800 dark:text-gray-500">
                Skills
              </h1>
              <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 ">
                <div className="rounded-2xl p-2 border-[#487fe6] border-2  bg-blue-100">
                  <h1 className="text-center ">ML</h1>
                </div>
                <div className="rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-50">
                  <h1 className="text-center">Web Dev</h1>
                </div>
                <div className="rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-100">
                  <h1 className="text-center">App Dev</h1>
                </div>
                <div className="rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-100">
                  <h1 className="text-center">ML</h1>
                </div>
                <div className="rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-50">
                  <h1 className="text-center">Web Dev</h1>
                </div>
                <div className="rounded-2xl p-2 border-[#487fe6] border-2 bg-blue-100">
                  <h1 className="text-center">App Dev</h1>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-semibold my-10">Active Projects</h1>
          <div className="grid grid-cols-3 gap-16 h-auto mb-4 rounded bg-gray-50 dark:bg-gray-800">
            <ProjectCardDashboard />
            <ProjectCardDashboard />
            <ProjectCardDashboard />
            <ProjectCardDashboard />
            <ProjectCardDashboard />
            <ProjectCardDashboard />
          </div>
        </div>
      </div>
    </div>
  );
}
