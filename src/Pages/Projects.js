import Navbar from '../Components/Navbar'
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { Chip } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

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
    <div className="bg-[#d0d7f8] h-full flex flex-col justify-center items-center" >
     <Navbar />
     <Box
          sx={{
            bgcolor: '#d0d7f8',
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
              className="font-bold text-[#3442c0]"
              gutterBottom
            >
              Explore Projects
            </Typography>
            <Typography variant="h5" align="center" color="text.secondary" paragraph className="text-[#7a85eb]">
              Something short and leading about the collection below—its contents,
              the creator, etc. Make it short and sweet, but not too short so folks
              don&apos;t simply skip over it entirely.
            </Typography>
            {/* <Stack
              sx={{ pt: 4 }}
              direction="row"
              spacing={2}
              justifyContent="center"
            >
              <Button variant="contained">Main call to action</Button>
              <Button variant="outlined">Secondary action</Button>
            </Stack> */}
          </Container>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">
          {/* End hero unit */}
          <Grid container spacing={4} columns={12}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card
                  sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                  className="bg-[#edf0fc] z-50 shadow-md rounded-xl"
                >
                  <CardMedia
                    component="div"
                    sx={{
                      // 16:9
                      pt: '56.25%',
                    }}
                    image="https://source.unsplash.com/random?wallpapers"
                  />
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Grid gutterBottom spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="flex-row mb-2">
                        <Chip label="Difiiculty" variant="outlined" className="text-[#3442c0] border-[#3442c0] bg-white"/>
                        <Chip label="Domain" className="text-[#d5d9ff] bg-[#3442c0] text-right justify-end"/>
                    </Grid>
                    <Typography variant="h4" component="h2" className="text-[#3442c0] font-semibold mb-2">
                      GDSC ChatBot
                    </Typography>
                    <Typography gutterBottom variant="h7" component="h2" className="text-[#7a85eb] font-light">
                      KARTIK TIWARI & YASHASV PRAJAPATI
                    </Typography>
                    
                    <Typography variant="h9" component="h3" className="text-[#3442c0] text-sm font-light">
                      
                    </Typography>
                  </CardContent>
                  <CardActions >
                    <Button size="small" className="text-neutral-500">Explore More</Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
    </div>
    </ThemeProvider>
  )
}
