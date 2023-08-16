import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoImg from "../media/gdsc-logo.png";
import ProjectCard from '../Components/ProjectCard';
import { db } from "../config/firebase";
import { collection, doc, getDoc, addDoc, query, where, getDocs } from 'firebase/firestore';
import { useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import ManagerRequest from '../Components/ManagerRequest';
import { useAuth } from '../contexts/AuthContext';

export default function ManagerInbox() {
    const [sidebar, showsideBar] = useState(false);
    const [collaboratorRequestsArray, setCollaboratorRequestsArray] = useState([]);
    const [managerRequestsArray, setManagerRequestsArray] = useState([]);

    const { currentUser } = useAuth();


    const allCollaboratorRequests = async () => {
        try {
            const currentUserEmail = currentUser.email; // Replace with the actual email

            const requestsRef = collection(db, "RequestsProjectManager");
            const querySnapshot = await getDocs(
                query(requestsRef, where("projectManagerEmail", "==", currentUserEmail))
            );

            return onSnapshot(requestsRef, (snapshot) => {
                const Array = [];

                snapshot.forEach((doc) => {
                    const requestId = doc.id;
                    const request = doc.data();
                    Array.push({ id: requestId, ...request });
                });
                console.log("hello", Array);

                setCollaboratorRequestsArray(Array);

                // Now you have all requests in the requestsArray
                console.log("second", collaboratorRequestsArray);

                // If you want to perform further operations with the array, you can do so here
            });

            /* const Array = querySnapshot.docs.map((doc) => {
              const requestId = doc.id;
              const request = doc.data();
              return { id: requestId, ...request };
            }); */

            //setCollaboratorRequestsArray(Array);
        } catch (error) {
            console.error("Error fetching requests:", error);
        }
    };

    const allManagerRequests = async () => {
        try {
            const currentUserEmail = currentUser.email; // Replace with the actual email

            const requestsRef = collection(db, "RequestsAdmin");
            const querySnapshot = await getDocs(
                query(requestsRef, where("projectManagerEmail", "==", currentUserEmail))
            );

            return onSnapshot(requestsRef, (snapshot) => {
                const Array = [];

                snapshot.forEach((doc) => {
                    const requestId = doc.id;
                    const request = doc.data();
                    Array.push({ id: requestId, ...request });
                });
                console.log("hello", Array);

                setManagerRequestsArray(Array);

                // Now you have all requests in the requestsArray
                console.log("second", managerRequestsArray);

                // If you want to perform further operations with the array, you can do so here
            });

            /* const Array = querySnapshot.docs.map((doc) => {
              const requestId = doc.id;
              const request = doc.data();
              return { id: requestId, ...request };
            }); */

            //setCollaboratorRequestsArray(Array);
        } catch (error) {
            console.error("Error fetching requests:", error);
        }
    };

    const determineName = async (projectID) => {
        
        const projectsRef = collection(db, "Projects");
        const projectDocRef = doc(projectsRef, projectID);
        
        try {
            const projectSnapshot = await getDoc(projectDocRef);
            console.log("sakshi",projectSnapshot);

            if (projectSnapshot.exists()) {
                // The document exists, and you can access its data using projectSnapshot.data()
                const projectData = projectSnapshot.data();
                console.log("Project data:", projectData);
                
                //return projectData.projectName;
            } else {
                console.log("Project not found.");
            }
        } catch (error) {
            console.error("Error fetching project:", error);
        }
    };


    useEffect(() => {
        setUnsubscribe(() => allCollaboratorRequests());
        setUnsubs(() => allManagerRequests());
        //console.log(requestsArray);

        // Clean up the listener when the component unmounts
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
            if(unsubs) {
                unsubs();
            }
            console.log(collaboratorRequestsArray);
            console.log(managerRequestsArray);
        };
    }, []);

    const [unsubscribe, setUnsubscribe] = useState(null);
    const [unsubs, setUnsubs] = useState(null);

    const determineType = (pending, approved) => {
        if (pending && !approved) {
            return 1;
        }
        else if (!pending && approved) {
            return 2;
        }
        else if (!pending && !approved) {
            return 3;
        }
    }

    const determineType2 = (pending, approved) => {
        if (pending && !approved) {
            return 4;
        }
        else if (!pending && approved) {
            return 5;
        }
        else if (!pending && !approved) {
            return 6;
        }
    }


    return (
        <div>
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-between lg:justify-start w-full">

                            <a href="/" className="flex ml-2 md:mr-24">
                                <img src={logoImg} className="h-12 mr-3" alt="GDSC Logo" />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Your Dashboard</span>
                            </a>
                        </div>
                        <div>
                            {!sidebar && (<svg onClick={() => { showsideBar(true) }} className="w-6 h-6 mr-2 md:hidden text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>)}
                            {sidebar && (<svg onClick={() => { showsideBar(false) }} className="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            )
                            }

                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center ml-3">

                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                    <div className='flex flex-col gap-4 mb-10 mt-4'>
                        <img className="w-20 h-20 rounded-full mx-auto" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                        <h1 className='text-center text-lg'>Yash Rai</h1>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <span className="ml-3">Dashboard</span>
                            </a>

                        </li>

                        <li>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <Link to="/manager-dashboard/inbox" className="flex-1 ml-3 whitespace-nowrap">Inbox</Link>
                                <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                            </div>
                        </li>


                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4m6-8L7 5l4 4" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
                            </a>
                        </li>
                    </ul>
                </div>
            </aside>
            {sidebar && (
                <aside id="logo-sidebar" className="mt-20 w-full mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <div className='flex flex-col gap-4 mb-10 mt-4'>
                            <img className="w-20 h-20 rounded-full mx-auto" src="https://flowbite.com/docs/images/people/profile-picture-5.jpg" alt="user photo" />
                            <h1 className='text-center text-lg'>Yash Rai</h1>
                        </div>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <span className="ml-3">Dashboard</span>
                                </a>

                            </li>

                            <li>
                                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <Link to="/manager-dashboard/inbox" className="flex-1 ml-3 whitespace-nowrap">Inbox</Link>
                                    <span className="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-800 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">3</span>
                                </div>
                            </li>


                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 16">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h11m0 0-4-4m4 4-4 4m-5 3H3a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h3" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Log Out</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4m6-8L7 5l4 4" />
                                    </svg>
                                    <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            )}
            {!sidebar && (
                <><div className="p-4 sm:ml-64 mt-20 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    {collaboratorRequestsArray && collaboratorRequestsArray.map((request, i) => (

                        <ManagerRequest
                            key={i}
                            id={request.id}
                            type={determineType(request.isPending, request.isApproved)}
                            name={request.fullName}
                            contactNumber={request.contactNumber}
                            resume={request.driveLinkForResume}
                            email={request.emailInstituteId}
                            projectID={request.projectID}
                            projectName="Blockchain Technology"
                            githubProfileLink={request.githubProfileLink}
                            linkedinProfileLink={request.linkedinProfileLink}
                            hoursCanDedicate={request.hoursCanDedicate}
                            reasonToJoin={request.ReasonToJoin} />

                            
                    ))}
                    
                </div>
                <div className="p-4 sm:ml-64 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    {managerRequestsArray && managerRequestsArray.map((request, i) => (

                        <ManagerRequest
                            key={i}
                            id={request.id}
                            type={determineType2(request.isPending, request.isApproved)}
                            projectName={request.projectName}
                         />

                            
                    ))}
                    
                </div></>
            )}


        </div>
    )
}
