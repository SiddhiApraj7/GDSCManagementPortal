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
import PropTypes from 'prop-types';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router';
export default function ProjectCard(props) {

  const { projectInfo, projectId } = props;
  console.log(projectId);
  const navigate = useNavigate(); // Hook to handle navigation

  const handleExploreMoreClick = () => {
    navigate(`/projects/${projectId}`);
  };

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
          image={"https://source.unsplash.com/random?wallpapers"}
          alt={'project image description'}
        />
        <CardContent sx={{ flexGrow: 1 }}>
          <Grid gutterBottom spacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }} className="flex-row mb-2">
            <Chip label={projectInfo.difficultyLevel || "Beginner"} variant="outlined" className="text-[#004eb3] border-[#004eb3] bg-white" sx={{mr:2}}/>
            <Chip label={projectInfo.projectDomain} className="text-[#f2f0f0] bg-[#004eb3] text-right justify-end" />
          </Grid>
          <Typography variant="h4" component="h2" className="text-[#03276a] font-semibold mb-2">
            {projectInfo.projectName}
          </Typography>
          <Typography gutterBottom variant="h7" component="h2" className="text-[#004eb3] font-light">
            {projectInfo.fullName
}
          </Typography>

          <Typography variant="h9" component="h3" className="text-[#4284f3] text-sm font-light">

          </Typography>
        </CardContent>
        <CardActions >
        
        <Button size="small" className="text-[#004eb3] ml-60" onClick={handleExploreMoreClick}>
          Explore More
        </Button>
        
        </CardActions>
      </Card>
   
  )
}

ProjectCard.propTypes = {
  projectInfo: PropTypes.shape({
      image: PropTypes.string.isRequired,
      imageText: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      difficultyLevel: PropTypes.string.isRequired,
      manager: PropTypes.string.isRequired,
      domain: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
  }).isRequired,
};
