import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Post from '../Components/Post';
import NavbarProjects from '../Components/NavbarProjects';
import { db } from "../config/firebase";
import { doc, getDoc } from 'firebase/firestore';


const theme = createTheme({
    typography: {
        fontFamily: 'Poppins, sans-serif',
    },
});

const mainFeaturedPost = {
    title: 'Blockchain Voting System',
    image: 'https://source.unsplash.com/random?wallpapers',
    imageText: 'main image description',
    difficulty: 'Advanced',
    manager: 'Tanisha Daharwal',
    domain: 'Blockchain Technology',
    startDate: '29-07-23',
    duration: '3',
    problemStatement:'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. Though not required by the orthographic conventions of any language with a writing system, paragraphs are a conventional means of organizing extended segments of prose.',
    prerequisite: 'A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea.',
};

export default function JoinProject() {
    const { projectId } = useParams();
    const [projectDetails, setProjectDetails] = useState([]);

    useEffect(() => {
      const fetchProjectDetails = async () => {
        try {
          const projectDocRef = doc(db, 'Projects', projectId);
          const projectDocSnapshot = await getDoc(projectDocRef);
          if (projectDocSnapshot.exists()) {
            setProjectDetails(projectDocSnapshot.data());
           
          } else {
            
          }
        } catch (error) {
          console.error('Error fetching project details:', error);
        }
      };
  
      fetchProjectDetails();
    }, [projectId]);
   
    return (
        <ThemeProvider theme={theme}>
            <div className="bg-[#f2f0f0] h-full flex flex-col justify-center items-center">
                <NavbarProjects />
                <Container maxWidth="lg">
                    <main>
                        <Post post={projectDetails} projectId={projectId} />
                    </main>
                </Container>
            </div>
        </ThemeProvider>
    )
}
