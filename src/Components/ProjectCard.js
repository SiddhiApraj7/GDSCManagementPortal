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

export default function ProjectCard() {
  return (
    
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        className="bg-[#dfe9f7] z-50 shadow-md rounded-xl"
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
            <Chip label="Difiiculty" variant="outlined" className="text-[#4284f3] border-[#4284f3] bg-white" />
            <Chip label="Domain" className="text-[#f2f0f0] bg-[#4284f3] text-right justify-end" />
          </Grid>
          <Typography variant="h4" component="h2" className="text-[#013593] font-semibold mb-2">
            GDSC ChatBot
          </Typography>
          <Typography gutterBottom variant="h7" component="h2" className="text-[#0067d3] font-light">
            KARTIK TIWARI & YASHASV PRAJAPATI
          </Typography>

          <Typography variant="h9" component="h3" className="text-[#4284f3] text-sm font-light">

          </Typography>
        </CardContent>
        <CardActions >
          <Button size="small" className="text-neutral-500 ml-60">Explore More</Button>
        </CardActions>
      </Card>
   
  )
}

