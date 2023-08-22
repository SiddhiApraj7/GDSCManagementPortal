import React, { useState, useEffect } from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, getDoc } from 'firebase/firestore';

import { db } from "../config/firebase";

export default function CollaboratorRequests({ key, id, type, name, projectID }) {

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    });


    const [projectManagerName, setProjectManagerName] = useState('');
    const [projectName, setProjectName] = useState('');

    const getProjectDetails = async (projectID) => {
        try {
            const projectDocRef = doc(db, 'Projects', projectID);
            const projectDocSnap = await getDoc(projectDocRef);

            
            if (projectDocSnap.exists()) {
                const projectData = projectDocSnap.data();
                setProjectManagerName(projectData.fullName);
                setProjectName(projectData.projectName); 

            }
        } catch (error) {
            console.error('Error fetching project details:', error);
        }
    };

    useEffect(() => {
        if (projectID) {
            getProjectDetails(projectID);
        }
    }, [projectID]);

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        boxShadow: 24,
        p: 4,
    };


    return (
        <ThemeProvider theme={theme}>
            <div className="p-2">
                {(type == 1) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-sky-100 border-sky-100 border-2 ">

                        <div>
                            <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        </div>
                        <div className="pl-2 flex  w-full justify-between">
                            <div className="mb-2 text-base font-normal">
                                <span className="font-medium text-gray-900 dark:text-white">Your </span> request to join the project - <span className="font-medium text-gray-900 dark:text-white">{projectName} is Pending.</span>
                            </div>
                            <div align="right" className="flex gap-3">
                                
                            </div>
                        </div>
                    </div>
                )}

                {(type == 2) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-green-100 border-green-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        <div align="right" className="pl-2 w-full flex justify-between">
                            <div className="mb-2 text-base font-normal">
                                 <span className="font-medium text-gray-900 dark:text-white">Your </span>request to join the project - <span className="font-medium text-gray-900 dark:text-white">{projectName} is approved.</span>
                            </div>
                            <div align="right" className="flex gap-3 justify-end">
                                <div className="text-base font-normal text-green-400">
                                    Approved
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(type == 3) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-red-100 border-red-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        <div align="right" className="pl-2 flex w-full justify-between">
                            <div className="mb-2 text-base font-normal">
                                 <span className="font-medium text-gray-900 dark:text-white">Your </span>request to join the project <span className="font-medium text-gray-900 dark:text-white">{projectName} was declined.</span>
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
        </ThemeProvider>
    )
}

