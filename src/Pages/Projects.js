import Navbar from '../Components/Navbar'
import * as React from 'react';

/* import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Link from '@mui/material/Link';
import { Chip } from '@mui/material';
import Stack from '@mui/material/Stack';
import Toolbar from '@mui/material/Toolbar'; */

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import ProjectCard from '../Components/ProjectCard';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// TODO remove, this demo shouldn't need to reset the theme.
const theme = createTheme({
    typography: {
      fontFamily: 'Poppins, sans-serif',
    },
  });

export default function Projects() {
  return (
    <ThemeProvider theme={theme}>
    <div className="bg-[#f2f0f0] h-full flex flex-col justify-center items-center" >
     <Navbar />
     <Box
          sx={{
            bgcolor: '#f2f0f0',
            pt: 6,
            pb: 6,
          }}
        >
          <Container maxWidth="sm">
            
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="text.primary"
              className="font-bold text-[#004eb3]"
              gutterBottom
            >
              Explore Projects
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph className="text-[#7aa5eb]">
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} columns={12}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <ProjectCard/>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
    </ThemeProvider>
  )
}
