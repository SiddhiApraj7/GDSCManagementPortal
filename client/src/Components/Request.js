import React from 'react';
import axios from 'axios';
import { Modal, Box, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';



export default function Request({ key, id, type, name, projectName, contactNumber, resume, email, githubLinkOfProject, githubProfileLink, linkedinProfileLink,
    prerequisites, problemStatement, projectDomain, projectOverview, slackLink, startDateOfProject, techStack }) {


    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const theme = createTheme({
        typography: {
            fontFamily: 'Poppins, sans-serif',
        },
    });

    const handleApproveClick = async () => {
        try {
            

            const response = await axios.post(
                'http://localhost:3000/requests/approve-project-request',
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
                'http://localhost:3000/requests/decline-project-request',
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
                    <div className="items-center block p-3 md:flex rounded-lg bg-sky-100 border-sky-100 border-2 ">

                        <div>
                            <img className="w-12 h-12 lg:mb-3 lg:mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Person Profile" />
                        </div>
                        <div className="md:pl-2 md:flex  md:w-full md:justify-between">
                            <div className="mb-2 text-base font-normal">
                                <span className="font-medium text-gray-900 dark:text-white">{name} </span> wants to host the project <span className="font-medium text-gray-900 dark:text-white">{projectName}.</span>
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
                                        <Box sx={style} className="rounded-lg w-[80%]">
                                            <Typography align="center" id="modal-modal-title" variant="h6" component="h2" className="text-blue-700">
                                                {projectName}
                                            </Typography>


                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }} className="text-slate-900 font-semibold">
                                                    Domain:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                    {projectDomain}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Project Overview:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {projectOverview}
                                                </Typography>
                                            </div>

                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1}} className="text-slate-900 font-semibold">
                                                    Problem Statement:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {problemStatement}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Tech Stack:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {techStack}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Prerequisites:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {prerequisites}
                                                </Typography>
                                            </div>
                                            {startDateOfProject &&<div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Start Date:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {startDateOfProject.slice(0, 10)}
                                                </Typography>
                                            </div>}
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Project Github Link:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {githubLinkOfProject}
                                                </Typography>
                                            </div>
                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Project Slack Link:
                                                </Typography>
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }}>
                                                    {slackLink}
                                                </Typography>
                                            </div>

                                            <div className="flex gap-3">
                                                <Typography id="modal-modal-description" sx={{ mt: 1 }} className="text-slate-900 font-semibold">
                                                    Project Manager:
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



                                        </Box>
                                    </Modal>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {(type === 2) && (
                    <div className="items-center block p-3 sm:flex rounded-lg bg-green-100 border-green-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Person Profile" />
                        <div align="right" className="pl-2 w-full md:flex justify-between">
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

                {(type === 3) && ( 
                    <div className="items-center block p-3 sm:flex rounded-lg bg-red-100 border-red-100 border-2 ">
                        <img className="w-12 h-12 mb-3 mr-3 rounded-full sm:mb-0" src="https://flowbite.com/docs/images/people/profile-picture-2.jpg" alt="Person Profile" />
                        <div align="right" className="pl-2 flex w-full justify-between">
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
        </ThemeProvider>
    )
}

