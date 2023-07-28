import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Post from '../Components/Post';
import Navbar from '../Components/Navbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button'

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
};

export default function JoinProject() {
    return (
        <ThemeProvider theme={theme}>
            <div className="bg-[#f2f0f0] h-full flex flex-col justify-center items-center">
                <Navbar />
                <Container maxWidth="lg">
                    <main>
                        <Post post={mainFeaturedPost} />
                        
                        <Container align="center">
                            <Button variant="contained" className="text-white bg-[#4284f3]">Apply Now</Button>
                        </Container>
                    </main>
                </Container>
            </div>
        </ThemeProvider>
    )
}
