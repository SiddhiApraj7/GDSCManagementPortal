import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { Modal, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { doc, getDoc } from 'firebase/firestore';
import { db } from "../config/firebase";


export default function ManagerRequest({ key, id, type, name, contactNumber, resume, email, projectID, projectName, githubProfileLink, linkedinProfileLink,
    hoursCanDedicate, reasonToJoin }) {


    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    });

    const [projectNameReq, setProjectNameReq] = useState('');

    const getProjectDetails = async (projectID) => {
        try {
            const projectDocRef = doc(db, 'Projects', projectID);
            const projectDocSnap = await getDoc(projectDocRef);

            
            if (projectDocSnap.exists()) {
                const projectData = projectDocSnap.data();
                setProjectNameReq(projectData.projectName); 
 
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

    

    const handleApproveClick = async () => {
        try {


            const response = await axios.post(
                'http://localhost:3000/requests/approve-collaborator-request',
                {
                    requestID: id,
                }
            );

            
        } catch (error) {
            console.error("Error calling API:", error);
        } finally {

        }
    };

    const handleDeclineClick = async () => {
        try {
  

            const response = await axios.post(
                'http://localhost:3000/requests/decline-collaborator-request',
                {
                    requestID: id,
                }
            );

           

        } catch (error) {
            console.error("Error calling API:", error);
        } finally {
            
        }
    };

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
                {(type === 1) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-sky-100 border-sky-100 border-2 ">

                        <div>
                            <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        </div>
                        <div className="pl-2 flex  w-full justify-between">
                            <div className="mb-2 text-base font-normal">
                                <span className="font-medium text-gray-900 dark:text-white">{name} </span> wants to join the project <span className="font-medium text-gray-900 dark:text-white">{projectNameReq}.</span>
                            </div>
                            <div align="right" className="flex gap-3">
                                <div>
                                    <button onClick={handleApproveClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-green-400 rounded-lg hover:bg-[#00a04f] "> Approve </button>
                                </div>
                                <div>
                                    <button onClick={handleDeclineClick} className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-500  rounded-lg hover:bg-red-600 "> Decline </button>
                                </div>
                                <div>
                                    <button onClick={handleOpen} className="block text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2 text-center " type="button">Read More</button>
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <Box sx={style} className="rounded-lg w-max ">
                                            <Typography align="center" id="modal-modal-title" variant="h6" component="h2" className="text-blue-700">
                                                {projectNameReq}
                                            </Typography>

                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Name:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {name}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Contact Number:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {contactNumber}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Email:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {email}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Resume:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {resume}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Linked In:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {linkedinProfileLink}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Github:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {githubProfileLink}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Hours Can Dedicate:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {hoursCanDedicate}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Reason to Join:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {reasonToJoin}
                                                </Typography>
                                            </div>



                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(type === 2) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-green-100 border-green-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        <div align="right" className="pl-2 w-full flex justify-between">
                            <div className="mb-2 text-base font-normal">
                                You allowed <span className="font-medium text-gray-900 dark:text-white">{name}</span> to join the project <span className="font-medium text-gray-900 dark:text-white">{projectNameReq}.</span>
                            </div>
                            <div align="right" className="flex gap-3 justify-end">
                                <div className="text-base font-normal text-green-400">
                                    Approved
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(type === 3) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-red-100 border-red-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        <div align="right" className="pl-2 flex w-full justify-between">
                            <div className="mb-2 text-base font-normal">
                                You declined <span className="font-medium text-gray-900 dark:text-white">{name} </span>'s request to join the project <span className="font-medium text-gray-900 dark:text-white">{projectNameReq}.</span>
                            </div>
                            <div align="right" className="flex gap-3 justify-end">
                                <div className="text-base font-normal text-red-500">
                                    Declined
                                </div>
                            </div>
                        </div>
                    </div>
                )}
                {(type === 4) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-sky-100 border-sky-100 border-2 ">

                        <div>
                            <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        </div>
                        <div className="pl-2 flex  w-full justify-between">
                            <div className="mb-2 text-base font-normal">
                                <span className="font-medium text-gray-900 dark:text-white"></span> Your request to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}</span> is pending.
                            </div>
                        </div>
                    </div>
                )}

                {(type === 5) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-green-100 border-green-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        <div align="right" className="pl-2 w-full flex justify-between">
                            <div className="mb-2 text-base font-normal">
                                Your request to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}</span> has been approved.
                            </div>
                            <div align="right" className="flex gap-3 justify-end">
                                <div className="text-base font-normal text-green-400">
                                    Approved
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(type === 6) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-red-100 border-red-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Bonnie Green image" />
                        <div align="right" className="pl-2 flex w-full justify-between">
                            <div className="mb-2 text-base font-normal">
                                Your request to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}</span> has been declined.
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

