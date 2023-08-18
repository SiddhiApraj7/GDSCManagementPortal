import React, { useState, useEffect } from 'react';
import NavbarProjects from '../Components/NavbarProjects';
import Google from '../Components/Google';
import { db } from "../config/firebase";
import { collection, getDocs } from 'firebase/firestore';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import ProjectCard from '../Components/ProjectCard';
// import Grid from '@mui/material/Grid';
// import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';
// import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ProjectCard from '../Components/ProjectCard';



// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });

  const projectInfo = {
    title: 'GDSC ChatBot',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'project image description',
    difficulty: 'Advanced',
    manager: 'Kartik Tiwari',
    domain: 'Machine Learning',
    startDate: '29-07-23',
};

export default function Projects() {
  const [projectDetails, setProjectDetails] = useState([]);
  const [projectIds, setProjectIds] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollectionRef = collection(db, 'Projects');
        const projectsSnapshot = await getDocs(projectsCollectionRef);

        const projectsData = projectsSnapshot.docs
          .filter((doc) => doc.data().isApproved === true && doc.data().isPending === false)
          .map((doc) => doc.data());

        setProjectDetails(projectsData);

        // Filter project IDs based on conditions
        const idsArray = projectsSnapshot.docs
          .filter((doc) => doc.data().isApproved === true && doc.data().isPending === false)
          .map((doc) => doc.id);
        
        setProjectIds(idsArray);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    };

    fetchProjects();
}, []);


  console.log(projectDetails[0]);
  const cards = [...Array(projectDetails.length).keys()];
  return (
    <ThemeProvider theme={theme}>
    <div className="bg-[#f2f0f0] h-full flex flex-col justify-center items-center" >
     <NavbarProjects />
     <Box
          sx={{
            bgcolor: '#f2f0f0',
            pt: 6,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
          <h1 align="center" className="mb-8 text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0b9f6e] from-[#1b64f1]">Explore Projects</span></h1>
            
            <Typography variant="h5" align="center" color="text.secondary" paragraph className="text-[#7aa5eb]">
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            <div className="mt-16">
            <Google/>
            </div>
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} columns={12}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <ProjectCard projectInfo={projectDetails[card]} projectId={projectIds[card]}/>
              </Grid>
            ))}
          </Grid>
        </Container>
        <div className="mb-10">
        <Google />
        </div>
    </div>
    </ThemeProvider>
  )
}
