import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router';
import { db } from "../config/firebase";
import { useAuth } from '../contexts/AuthContext';
import { collection, query, where, getDocs, getDoc, doc} from "firebase/firestore";
import { useState, useEffect } from 'react';
function Post(props) {
    const [collaboratorsData, setCollaboratorsData] = useState([]);
    const [isCollaboratorOfProject, setIsCollaboratorOfProject] = useState(false);
    const [isHostOfProject, setIsHostOfProject] = useState(false);
    const { currentUser } = useAuth();
    const emailid = currentUser?.email;
    const navigate = useNavigate();
    const { post, projectId } = props;

    const handleApplyNowClick = () => {
        navigate(`/join-project-form/${projectId}`);
      };

useEffect(() => {
    async function fetchCollaboratorsData() {
        const collaborators = post.collaborators;

        if (!Array.isArray(collaborators)) {
            console.error('Collaborators is not an array:', collaborators);
            return; 
        }

        const collaboratorsDataArray = [];

        for (const collaboratorDocID of collaborators) {
            try {
                const collaboratorDocRef = doc(db, "Client", collaboratorDocID);
                const collaboratorDoc = await getDoc(collaboratorDocRef);

                if (collaboratorDoc.exists()) {
                    const collaboratorData = collaboratorDoc.data();
                    collaboratorsDataArray.push(collaboratorData);
                }
            } catch (error) {
                console.error('Error fetching collaborator data:', error);
            }
        }
        setCollaboratorsData(collaboratorsDataArray);
    }
        async function checkUserRole() {
            try {
                const usersCollectionRef = collection(db, "Client");
                const querySnapshot = await getDocs(query(usersCollectionRef, where("email", "==", emailid)));
        
                if (!querySnapshot.empty) {
                    const userData = querySnapshot.docs[0].data();
        
                    if (userData.projectCollaborated && userData.projectCollaborated.includes(projectId)) {
                        setIsCollaboratorOfProject(true);
                    }
                    if (userData.projectHosted && userData.projectHosted.includes(projectId)) {
                        setIsHostOfProject(true);
                    }
                    
                }
            } catch (error) {
                console.error('Error checking user role:', error);
            }
        
       
        

    }

    fetchCollaboratorsData();
    checkUserRole();
}, [post.collaborators, emailid, projectId]);


    return (
        <div className='w-full'>
            <Paper
                sx={{
                    position: 'relative',
                    backgroundColor: '#f2f0f0',
                    color: '#f2f0f0',
                    mb: 4,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    backgroundImage: `url(${"https://source.unsplash.com/random?wallpapers"})`,
                }}
            >
                
                {<img style={{ display: 'none' }} src={"https://source.unsplash.com/random?wallpapers"} alt={"main image description"} />}
                <Box
                    sx={{
                        position: 'absolute',
                        top: 0,
                        bottom: 0,
                        right: 0,
                        left: 0,
                        backgroundColor: 'rgba(0,0,0,.3)',
                    }}
                />
                <Grid container>
                    <Grid item md={6}>
                        <Box
                            sx={{
                                position: 'relative',
                                p: { xs: 3, md: 6 },
                                pr: { md: 0 },
                            }}
                        >
                            <Chip label={post.difficultyLevel || "Beginner"} className="text-[#f2f0f0] bg-[#004eb3] text-right mb-4" />
                            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                                {post.projectName}
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
            </Paper>
            <Container maxWidth="xl" align="left" className="lg:ml-8" >
                <div className="md:flex lg:justify-between">
                    <div>
                        <Typography
                            component="h1"
                            variant="h5"
                            align="left"
                            color="text.primary"
                            className="text-[#004eb3] font-semibold"
                            gutterBottom
                        >
                            {post.FullName}
                        </Typography>
                      
                        <Typography variant="h7" align="left" color="text.secondary" paragraph className="text-[#004eb3] font-light mb-6">
                            Domain : {post.projectDomain}
                        </Typography>
                    </div>
                    <div>
                        {post.startDateOfProject && (
    <Typography variant="h7" align="right" color="text.secondary" paragraph className="text-neutral-500 font-light lg:mr-6">Start Date :   {post.startDateOfProject.slice(0, 10)}   |   Duration :   {post.durationOfProject} months
    </Typography>
  )}
                    </div>
                </div>
            </Container>
            <div className="mb-16 ml-6">
                <p className='mb-4 text-xl lg:ml-8 font-semibold leading-none tracking-tight text-[#004eb3] md:text-sm lg:text-2xl dark:text-white'>Tech Stack</p>
    <Container>
    
    
    {post.techStack && post.techStack.split(',').map((tech, index) => (
        <Chip
            key={index}
            label={tech.trim()} 
            variant="outlined"
            className={`bg-white-white border ${
                index % 4 === 0 ? "text-[#ea4335] border-[#ea4335]" :
                index % 4 === 1 ? "text-[#4284f3] border-[#4284f3] " :
                index % 4 === 2 ? "text-[#E79005] border-[#E79005]" :
                "text-[#33a852] border-[#33a852]"
            } lg:m-1`}
            sx={{ marginRight: 2 }}
        />
    ))}



    </Container>
</div>
            <div>
        

        {isCollaboratorOfProject || isHostOfProject ? (
            <div>
                 <span className='lg:ml-[33%]  text-xs  leading-none tracking-tight text-neutral-500 md:text-sm lg:text-2xl dark:text-white'>You {isCollaboratorOfProject ? "are a Collaborator on this project" : "are the Project Manager of this project"}</span>
                <Container className='flex mt-4 lg:mx-[45%] mx-[30%] md:mx-[35%] gap-4'>
            
            <a target="_blank" rel="noopener noreferrer" href={`${post.githubLinkOfProject}`}> <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              className="w-10 h-10  fill-[#05276a]"

            >
              <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
            </svg></a>
            
            <a target="_blank" rel="noopener noreferrer" href={`${post.slackLinkOfProject}`}>
            <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" className="fill-[#05276a] w-10 h-10" viewBox="0 0 50 50">
<path d="M31 24c-2.757 0-5-2.243-5-5V7c0-2.757 2.243-5 5-5s5 2.243 5 5v12C36 21.757 33.757 24 31 24zM43 24h-4c-.553 0-1-.447-1-1v-4c0-2.757 2.243-5 5-5s5 2.243 5 5S45.757 24 43 24zM19 24H7c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S21.757 24 19 24zM23 12h-4c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5v4C24 11.553 23.553 12 23 12zM19 48c-2.757 0-5-2.243-5-5V31c0-2.757 2.243-5 5-5s5 2.243 5 5v12C24 45.757 21.757 48 19 48zM7 36c-2.757 0-5-2.243-5-5s2.243-5 5-5h4c.553 0 1 .447 1 1v4C12 33.757 9.757 36 7 36zM43 36H31c-2.757 0-5-2.243-5-5s2.243-5 5-5h12c2.757 0 5 2.243 5 5S45.757 36 43 36zM31 48c-2.757 0-5-2.243-5-5v-4c0-.553.447-1 1-1h4c2.757 0 5 2.243 5 5S33.757 48 31 48z"></path>
</svg></a>
        </Container>
                </div>
            
        ) : (
            <Container align="center">
                
                <Button onClick={handleApplyNowClick} variant="contained" className="text-white bg-[#03276a] hover:text-[#03276a] hover:bg-[#86adea] mb-10">
                    Apply Now
                </Button>
            </Container>
        )}

       
    </div>
            <Container align="left" maxWidth="lg" className=" mt-10 mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white"> Problem Statement</h5>

                <div className="mr-2">
                    <Typography className="mt-5 text-[#485e70] text-lg" gutterBottom>
                        {post.problemStatement}
                    </Typography>
                </div>

            </Container>
            <Container align="left" maxWidth="lg" className=" mt-10 mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white"> Problem Overview</h5>

                <div className="mr-2">
                    <Typography className="mt-5 text-[#485e70] text-lg" gutterBottom>
                        {post.projectOverview}
                    </Typography>
                </div>

            </Container>
            <Container align="left" maxWidth="lg" className="mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white">Plan/Timeline</h5>
                
                <Container>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-[#03276a] dark:text-white">Subtask 1</h3>
                            <time className="block ml-2 mb-2 text-sm font-normal leading-none text-[#004eb3] dark:text-gray-500">By {post.subtask1Deadline?.slice(0, 10)}</time>
                            <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">{post.subtask1}</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-[#03276a] dark:text-white">Subtask 2</h3>
                            {post.subtask2Deadline && (<time className="block ml-2 mb-2 text-sm font-normal leading-none text-[#004eb3] dark:text-gray-500">By {post.subtask2Deadline.slice(0, 10)}</time>)}
                            <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">{post.subtask2}</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-[#03276a] dark:text-white">Subtask 3 </h3>
                            <time className="block ml-2 mb-2 text-sm font-normal leading-none text-[#004eb3] dark:text-gray-500">By {post.subtask3Deadline?.slice(0, 10)}</time>
                            <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">{post.subtask3}</p>
                        </li>
                    </ol>
                </Container>
            </Container>
            <Container align="center" maxWidth="lg" className="mb-10">
                <Paper elevation={2} sx={{ p: 2, bgcolor: '#ffffff' }} className="" gutterBottom>
                <h5 align="center" className="mb-4 mt-3 text-4xl font-semibold leading-none tracking-tight text-[#7aa5ea] md:text-2xl lg:text-4xl dark:text-white"> Required Prerequisites</h5>
                    
                    
                    <div className="mb-16 mt-10 mx-auto">
                
                    <Container>
                    {post.prerequisites && post.prerequisites.split(',').map((tech, index) => (
        <Chip
            key={index}
            label={tech.trim()} 
            variant="outlined"
            className={`bg-white-white border ${
                index % 4 === 0 ? "text-[#ea4335] border-[#ea4335]" :
                index % 4 === 1 ? "text-[#4284f3] border-[#4284f3] " :
                index % 4 === 2 ? "text-[#E79005] border-[#E79005]" :
                "text-[#33a852] border-[#33a852]"
            } m-1`}
            sx={{ marginRight: 2 }}
        />
    ))}
</Container>

</div>
                    
                </Paper>
            </Container>

            <Container align="left" maxWidth="lg" className="mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white"> Contributors</h5>
                

<div>
            
            {collaboratorsData.length === 0 ? (
        <p className="text-[#03276a] text-lg mt-6 ml-2">
            No collaborators yet, be the first to join!
        </p>
    ) : (<div className="ml-2">
                
    <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        
        {collaboratorsData.map((collaborator, index) => (
            <li key={index}>
                <div className="flex items-center gap-x-6 m-6">
                    <img className="h-16 w-16 rounded-full" src={collaborator.profilepic} alt="Person Profile" />
                    <div>
                        <h3 className="text-base font-semibold leading-7 tracking-tight text-[#03276a]">{collaborator.name}</h3>
                        
                    </div>
                </div>
            </li>
        ))}
        
    </ul>
</div>)}
            
        </div>
            </Container>

        </div>
    );
}

Post.propTypes = {
    post: PropTypes.shape({
        image: PropTypes.string.isRequired,
        imageText: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        difficultyLevel: PropTypes.string.isRequired,
        manager: PropTypes.string.isRequired,
        domain: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
        problemStatement: PropTypes.string.isRequired,
        projectOverview : PropTypes.string.isRequired,
        prerequisites : PropTypes.string.isRequired,
        techStack: PropTypes.string.isRequired,
        subtask1: PropTypes.string.isRequired,
        subtask2: PropTypes.string.isRequired,
        subtask3: PropTypes.string.isRequired,
        subtask1Deadline: PropTypes.string.isRequired,
        subtask2Deadline: PropTypes.string.isRequired,
        subtask3Deadline: PropTypes.string.isRequired,
        collaborators: PropTypes.arrayOf(PropTypes.string).isRequired,

    }).isRequired,
};

export default Post;