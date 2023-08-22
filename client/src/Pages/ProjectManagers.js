import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoImg from "../media/gdsc-logo.png";
import Manager from "../Components/Manager";
import ProjectCard from "../Components/ProjectCard";
import { Container } from "@mui/material";
import { useAuth } from "../contexts/AuthContext";
import { db } from "../config/firebase";
import {
    collection,
    doc,
    getDoc,
    addDoc,
    query,
    where,
    getDocs,
} from "firebase/firestore";
import { useEffect } from "react";
import user from "../media/user.png";

export default function ProjectManagers() {
    const [sidebar, showsideBar] = useState(false);
    const [name, setName] = useState("");
    const [profilepic, setProfilepic] = useState("");
    const { currentUser, logout } = useAuth();
    const [managerData, setManagerData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        //console.log(requestsArray);

        const fetchBasics = async () => {
            try {
                const clientRef = collection(db, "Client");
                const q = query(clientRef, where("email", "==", currentUser.email));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
                    setName(userData.name);
                    if (userData.profilepic) {
                        setProfilepic(userData.profilepic);
                    } else {
                        setProfilepic({ user });
                    }
                }

                const managersRef = collection(db, "Client");
                const managersQuerySnapshot = await getDocs(managersRef);

                const fetchedManagerData = [];
                managersQuerySnapshot.forEach((doc) => {
                    const managerData = doc.data();
                    if (managerData.isProjectManager) {
                        fetchedManagerData.push(managerData);
                    }
                });

                setManagerData(fetchedManagerData);
            } catch (error) {
                console.error("Error fetching Admin:", error);
            }
        };

        fetchBasics();

        // Clean up the listener when the component unmounts
        /*  return () => {
                 if (unsubscribe) {
                     unsubscribe();
                 }
                 if (unsubs) {
                     unsubs();
                 }
             }; */
    }, []);

    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between lg:justify-start w-full">
                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src={logoImg} className="h-12 mr-3" alt="GDSC Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Your Dashboard
                                </span>
                            </a>
                        </div>
                        <div>
                            {!sidebar && (
                                <svg
                                    onClick={() => {
                                        showsideBar(true);
                                    }}
                                    className="w-6 h-6 mr-2 md:hidden text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 17 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M1 1h15M1 7h15M1 13h15"
                                    />
                                </svg>
                            )}
                            {sidebar && (
                                <svg
                                    onClick={() => {
                                        showsideBar(false);
                                    }}
                                    className="w-6 h-6 text-gray-800 dark:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                            )}
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3"></div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside
                id="logo-sidebar"
                className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700"
                aria-label="Sidebar"
            >
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <div className="flex flex-col gap-4 mb-10 mt-4">
                        <img
                            className="w-20 h-20 rounded-full mx-auto"
                            src={profilepic}
                            alt="user photo"
                        />
                        <h1 className="text-center text-md text-[#05276a]">{name}</h1>
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
                                <Link to="/admin-dashboard" className="ml-3">
                                    Dashboard
                                </Link>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                </svg>
                                <Link
                                    to="/admin-dashboard/all-projects"
                                    className="flex-1 ml-3 whitespace-nowrap"
                                >
                                    All Projects
                                </Link>
                            </a>
                        </li>

                        <li>
                            <a
                                href="#"
                                className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                            >
                                <svg
                                    className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor"
                                    viewBox="0 0 22 21"
                                >
                                    <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                </svg>
                                <Link
                                    to="/admin-dashboard/project-managers"
                                    className="flex-1 ml-3 whitespace-nowrap"
                                >
                                    All Project Managers
                                </Link>
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
                                    to="/admin-dashboard/inbox"
                                    className="flex-1 ml-3 whitespace-nowrap"
                                >
                                    Inbox
                                </Link>
                            </div>
                        </li>

                        <li>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg
                                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        stroke="currentColor"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                                    />
                                </svg>
                                <button onClick={logout}>
                                    <div className="flex-1 ml-3 whitespace-nowrap">Log Out</div>
                                </button>
                            </div>
                        </li>
                        {/* <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4m6-8L7 5l4 4" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </aside>
            {sidebar && (
                <aside
                    id="logo-sidebar"
                    className="mt-20 w-full mx-auto dark:bg-gray-800 dark:border-gray-700"
                    aria-label="Sidebar"
                >
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <div className="flex flex-col gap-4 mb-10 mt-4">
                            <img
                                className="w-20 h-20 rounded-full mx-auto"
                                src={profilepic}
                                alt="user photo"
                            />
                            <h1 className="text-center text-md text-[#05276a]">{name}</h1>
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
                                    <Link to="/admin-dashboard" className="ml-3">
                                        Dashboard
                                    </Link>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                                    </svg>
                                    <Link
                                        to="/admin-dashboard/all-projects"
                                        className="flex-1 ml-3 whitespace-nowrap"
                                    >
                                        All Projects
                                    </Link>
                                </a>
                            </li>

                            <li>
                                <a
                                    href="#"
                                    className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                                >
                                    <svg
                                        className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="currentColor"
                                        viewBox="0 0 22 21"
                                    >
                                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <Link
                                        to="/admin-dashboard/project-managers"
                                        className="flex-1 ml-3 whitespace-nowrap"
                                    >
                                        All Project Managers
                                    </Link>
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
                                        to="/admin-dashboard/inbox"
                                        className="flex-1 ml-3 whitespace-nowrap"
                                    >
                                        Inbox
                                    </Link>
                                </div>
                            </li>

                            <li>
                                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg
                                        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 16"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3"
                                        />
                                    </svg>
                                    <button onClick={logout}>
                                        <div className="flex-1 ml-3 whitespace-nowrap">Log Out</div>
                                    </button>
                                </div>
                            </li>
                            {/* <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4m6-8L7 5l4 4" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
                            </a>
                        </li> */}
                        </ul>
                    </div>
                </aside>
            )}
            {!sidebar && (
                <>
                    <div className="p-4 sm:ml-64 mt-14">
                        <div className="lg:flex w-full lg:mb-0 items-center mb-2 justify-between">
                            <h1 className="text-4xl  text-[#05276a] font-semibold my-10">
                                Project Managers
                            </h1>
                            <form className="flex">
                                <div className="relative my-auto">
                                    <svg
                                        className="w-4 h-4 absolute top-[35%] left-2 text-gray-500 dark:text-gray-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 20 20"
                                    >
                                        <path
                                            stroke="currentColor"
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            stroke-width="2"
                                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                        />
                                    </svg>
                                    <input
                                        type="search"
                                        onChange={(event) => {
                                            setSearchTerm(event.target.value);
                                        }}
                                        id="default-search"
                                        className="block w-72 lg:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        placeholder="Search Project Manager"
                                        required
                                    />
                                    <button
                                        type="submit"
                                        className="text-white absolute top-2 right-2 bg-[#05276a] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Search
                                    </button>
                                </div>
                            </form>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 h-auto mb-4 rounded bg-gray-50 dark:bg-gray-800">
                            {managerData &&
                                managerData.filter((manager) => {
                                    if (searchTerm === "") {
                                        return true;
                                    }
                                    if (
                                        (manager &&
                                            (manager.name || "")
                                                .toLowerCase()
                                                .includes(searchTerm.toLowerCase())) ||
                                        (manager.email || "")
                                            .toLowerCase()
                                            .includes(searchTerm.toLowerCase())
                                    ) {
                                        return true;
                                    }
                                })


                                    .map((manager, i) => (
                                        <Manager
                                            key={i}
                                            name={manager.name}
                                            projects={manager.projectHosted.length}
                                            pic={manager.profilepic}
                                            email={manager.email}
                                        />
                                    ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}
