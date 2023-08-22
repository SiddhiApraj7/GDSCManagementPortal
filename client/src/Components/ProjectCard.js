import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { Chip } from '@mui/material';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router';



export default function ProjectCard(props) {

  const { projectInfo, projectId } = props;

  const navigate = useNavigate();

  const handleExploreMoreClick = () => {
    navigate(`/projects/${projectId}`);
  };
  const access = "95L2lqx16TYd-kb4rVKYVMNZV9dpal-nxirqldXlAlw"
  const URL = "https://api.unsplash.com/search/photos?page=1&query=office&client_id=" + access 


  const ACCESS_KEY = "95L2lqx16TYd-kb4rVKYVMNZV9dpal-nxirqldXlAlw";
const TAG = "programming";



  return (
    
      <Card
        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
        className="bg-[#dfe9f7] z-50 shadow-md rounded-xl hover:scale-110 transition-all duration-200"
      >
        <CardMedia
          component="div"
          sx={{
            
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
            {projectInfo.fullName}
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
