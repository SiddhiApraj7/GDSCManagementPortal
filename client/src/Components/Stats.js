import React from 'react'
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../config/firebase";
import { useEffect, useState } from 'react';

function Stats() {

    const [numberOfProjects, setNumberOfProjects] = useState('');
    const [numberOfCollaborators, setNumberOfCollaborators] = useState('');
    const [numberOfRequests, setNumberOfRequests] = useState('');
    const [numberOfManagers, setNumberOfManagers] = useState('');


    const allStats = async () => {
        try {
            const projectsRef = collection(db, "Projects");
           
            const query1Snapshot = await getDocs(projectsRef);
            setNumberOfProjects(query1Snapshot.size);
            

            const requestsRef = collection(db, "RequestsAdmin");
            
            const query2Snapshot = await getDocs(requestsRef);
            setNumberOfRequests(query2Snapshot.size);
            

            const clientRef = collection(db, "Client");
            
            const query3Snapshot = await getDocs(clientRef);
            let collaboratorCount = 0;
            let managerCount=0;

            query3Snapshot.forEach((doc) => {
                const isCollaborator = doc.data().isCollaborator;
                const isManager = doc.data().isProjectManager;
                if (isCollaborator) {
                    collaboratorCount++;
                }
                if (isManager) {
                    managerCount++;
                }
            });

            setNumberOfCollaborators(collaboratorCount);
            setNumberOfManagers(managerCount);

            
        } catch (error) {
            console.error("Error fetching projects:", error);
        }
    };

    useEffect(() => {
        allStats();
    }, []);

    return (
        <div >

            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <img src="connection.jpg" alt="Connection" className="absolute inset-0 -z-10 h-full w-full object-cover object-right md:object-center" />
                <div className="absolute inset-0 -z-10 bg-black opacity-50"></div>
                <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu" aria-hidden="true">
                    <div className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
                </div>
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h2 className="ml-4 text-3xl font-bold tracking-tight text-[#e6f0ff] sm:text-5xl">Community</h2>
                    </div>
                    <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                        <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                            <div className="ml-4 flex flex-col-reverse">
                                <dt className="text-base leading-7 text-[#e6f0ff]">Innovative Projects</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{numberOfProjects}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-[#e6f0ff]">Enthusiastic Collaborators</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{numberOfCollaborators}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-[#e6f0ff]">Project Requests So Far</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{numberOfRequests}</dd>
                            </div>
                            <div className="flex flex-col-reverse">
                                <dt className="text-base leading-7 text-[#e6f0ff]">Project Managers</dt>
                                <dd className="text-2xl font-bold leading-9 tracking-tight text-white">{numberOfManagers}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats