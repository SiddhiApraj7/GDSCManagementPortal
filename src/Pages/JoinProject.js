import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Container } from '@mui/material';
import Post from '../Components/Post';
import Navbar from '../Components/Navbar';


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
    return (
        <ThemeProvider theme={theme}>
            <div className="bg-[#f2f0f0] h-full flex flex-col justify-center items-center">
                <Navbar />
                <Container maxWidth="lg">
                    <main>
                        <Post post={mainFeaturedPost} />
                    </main>
                </Container>
            </div>
        </ThemeProvider>
    )
}
