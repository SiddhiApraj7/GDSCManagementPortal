import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Container from '@mui/material/Container';

function Post(props) {
    const { post } = props;

    return (
        <div>
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: '#f2f0f0',
                color: '#f2f0f0',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${post.image})`,
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
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
                        <Chip label={post.difficulty} variant="outlined" className="text-[#4284f3] border-[#4284f3] bg-white mb-4" />
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>

                    </Box>
                </Grid>
            </Grid>
        </Paper>
         <Container maxWidth="xl" align="left" className="ml-8" >
         <div className="flex justify-between">
             <div>
                 <Typography
                     component="h1"
                     variant="h5"
                     align="left"
                     color="text.primary"
                     className="text-[#004eb3] font-semibold"
                     gutterBottom
                 >
                     {post.manager}
                 </Typography>
                 <Typography variant="h7" align="left" color="text.secondary" paragraph className="text-[#7aa5eb] font-light mb-16">
                     {post.domain}
                 </Typography>
             </div>
             <div>
                 <Typography variant="h7" align="right" color="text.secondary" paragraph className="text-neutral-500 font-light mr-16">
                     {post.startDate}  |  {post.duration} months
                 </Typography>
             </div>
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
        difficulty: PropTypes.string.isRequired,
        manager: PropTypes.string.isRequired,
        domain: PropTypes.string.isRequired,
        startDate: PropTypes.string.isRequired,
        duration: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;