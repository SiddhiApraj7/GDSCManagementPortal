import React from 'react'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import logoImg from "../media/gdsc-logo.png";
import ProjectCard from '../Components/ProjectCard';
import { db } from "../config/firebase";
import { collection, addDoc, query, where, getDocs, unsubscribe } from 'firebase/firestore';
import { useEffect } from 'react';
import { onSnapshot } from 'firebase/firestore';
import CollaboratorRequests from '../Components/CollaboratorRequests';
import { useAuth } from '../contexts/AuthContext';

export default function CollaboratorInbox() {
    const [sidebar, showsideBar] = useState(false);
    const [requestsArray, setRequestsArray] = useState([]);
    const [isManager, setIsManager] = useState(false);
    const [name, setName] = useState('');
    const [profilepic, setProfilepic] = useState("");


    const { currentUser,logout } = useAuth();

    const allRequests = async () => {
        try {
            const requestsRef = collection(db, "RequestsProjectManager");
            console.log(requestsRef);

            const q = query(requestsRef, where("email", "==", currentUser.email));
            return onSnapshot(q, (snapshot) => {
                const newArray = []; // Rename the array to avoid confusion

                snapshot.forEach((doc) => {
                    const requestId = doc.id;
                    const request = doc.data();
                    newArray.push({ id: requestId, ...request });
                });

                console.log("Fetched requests:", newArray);
                setRequestsArray(newArray); // Update the state with fetched data
                console.log("heee", requestsArray);
            });
        } catch (error) {
            console.error("Error fetching requests:", error);
        }
    };

    useEffect(() => {
        setUnsubscribe(() => allRequests());
        //console.log(requestsArray);

        const fetchIsManager = async () => {
            try {
                const clientRef = collection(db, "Client");
                const q = query(clientRef, where("email", "==", currentUser.email));
                const querySnapshot = await getDocs(q);

                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
                    setIsManager(userData.isProjectManager);
                    setName(userData.name);
                    if (userData.profilepic) {
                        setProfilepic(userData.profilepic);
                    }
                    else {
                        setProfilepic("user.png");
                    }
                }
            } catch (error) {
                console.error('Error fetching isManager:', error);
            }
        };

        fetchIsManager();

        // Clean up the listener when the component unmounts
        return () => {
            if (unsubscribe) {
                unsubscribe();
            }
            console.log(requestsArray);
        };
    }, []);

    const [unsubscribe, setUnsubscribe] = useState(null);

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
                        <img className="w-20 h-20 rounded-full mx-auto" src={profilepic} alt="user photo" />
                        <h1 className='text-center text-md text-[#05276a]'>{name}</h1>
                    </div>
                    <ul className="space-y-2 font-medium">
                        <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <Link to="/collaborator-dashboard"><span className="ml-3">Dashboard</span></Link>
                            </a>

                        </li>

                        {isManager && (<li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                </svg>
                                <Link to="/manager-dashboard" className="flex-1 ml-3 whitespace-nowrap">Manager</Link>
                            </a>
                        </li>)}

                        <li>
                            <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                </svg>
                                <Link to="/collaborator-dashboard/inbox" className="flex-1 ml-3 whitespace-nowrap">Inbox</Link>
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
                        {/* <li>
                            <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4m6-8L7 5l4 4" />
                                </svg>
                                <span className="flex-1 ml-3 whitespace-nowrap">Back</span>
                            </a>
                        </li> */}
                    </ul>
                </div>
            </aside>
            {sidebar && (
                <aside id="logo-sidebar" className="mt-20 w-full mx-auto dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
                    <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                        <div className='flex flex-col gap-4 mb-10 mt-4'>
                            <img className="w-20 h-20 rounded-full mx-auto" src={profilepic} alt="user photo" />
                            <h1 className='text-center text-md text-[#05276a]'>{name}</h1>
                        </div>
                        <ul className="space-y-2 font-medium">
                            <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <Link to="/collaborator-dashboard"><span className="ml-3">Dashboard</span></Link>
                                </a>

                            </li>

                            {isManager && (<li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 21">
                                        <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                                        <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                                    </svg>
                                    <Link to="/manager-dashboard" className="flex-1 ml-3 whitespace-nowrap">Manager</Link>
                                </a>
                            </li>)}

                            <li>
                                <div className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                                    </svg>
                                    <Link to="/collaborator-dashboard/inbox" className="flex-1 ml-3 whitespace-nowrap">Inbox</Link>
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
                            {/* <li>
                                <a href="#" className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
                                    <svg className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-[#05276a] dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 12 10">
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
                <><div className="p-4 sm:ml-64 mt-20 mb-4 border border-gray-100 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
                    {requestsArray && requestsArray.map((request, i) => (

                        <CollaboratorRequests
                            key={i}
                            id={request.id}
                            type={determineType(request.isPending, request.isApproved)}
                            name={request.fullName}
                            projectID={request.projectID} />
                    ))}
                </div></>
            )}


        </div>
    )
}
