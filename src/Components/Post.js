import * as React from 'react';
import PropTypes from 'prop-types';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Chip } from '@mui/material';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';


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
                            <Chip label={post.difficulty} className="text-[#f2f0f0] bg-[#004eb3] text-right mb-4" />
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
                        <Typography variant="h7" align="left" color="text.secondary" paragraph className="text-[#7aa5eb] font-light mb-6">
                            {post.domain}
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h7" align="right" color="text.secondary" paragraph className="text-neutral-500 font-light mr-6">
                            {post.startDate}  |  {post.duration} months
                        </Typography>
                    </div>
                </div>
            </Container>
            <div className="mb-16 ml-6">
                <Container>
                    <Chip label="Machine Learning" variant="outlined" className="text-[#ea4335] border-[#ea4335] bg-white m-1" sx={{ mr: 2 }} />
                    <Chip label="Blockchain Technology" variant="outlined" className="text-[#4284f3] border-[#4284f3] bg-white m-1" sx={{ mr: 2 }} />
                    <Chip label="Web Development" variant="outlined" className="text-[#E79005] border-[#E79005] bg-white m-1" sx={{ mr: 2 }} />
                    <Chip label="Finance" variant="outlined" className="text-[#33a852] border-[#33a852] bg-white m-1" sx={{ mr: 2 }} />
                </Container>
            </div>
            <Container align="center">
                <Button variant="contained" className="text-white bg-[#03276a] hover:text-[#03276a] hover:bg-[#86adea] mb-10">Apply Now</Button>
            </Container>

            <Container align="left" maxWidth="lg" className="mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white"> <span className="underline underline-offset-9 decoration-8 decoration-[#6095f5] dark:decoration-blue-600">Problem Statement</span></h5>

                <div className="mr-2">
                    <Typography className="mt-5 text-[#485e70] text-lg" gutterBottom>
                        {post.problemStatement}
                    </Typography>
                </div>

            </Container>
            <Container align="left" maxWidth="lg" className="mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white"> <span className="underline underline-offset-9 decoration-8 decoration-[#ea4335] dark:decoration-blue-600">Plan/Timeline</span></h5>
                {/* <Typography className="mt-10 font-semibold text-[#004eb3] mb-6" variant="h4" >
                    Plan/Timeline
                </Typography> */}
                <Container>
                    <ol className="relative border-l border-gray-200 dark:border-gray-700">
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-[#03276a] dark:text-white"> Sub Task 1 </h3>
                            <time className="block ml-2 mb-2 text-sm font-normal leading-none text-[#004eb3] dark:text-gray-500">By January 13th, 2022</time>
                            <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">Brief description of the job to be done by this time.</p>
                        </li>
                        <li className="mb-10 ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-[#03276a] dark:text-white"> Sub Task 2 </h3>
                            <time className="block ml-2 mb-2 text-sm font-normal leading-none text-[#004eb3] dark:text-gray-500">By July 13th, 2022</time>
                            <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">Brief description of the job to be done by this time.</p>
                        </li>
                        <li className="ml-6">
                            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                <svg className="w-2.5 h-2.5 text-blue-800 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                                </svg>
                            </span>
                            <h3 className="flex items-center ml-2 mb-1 text-lg font-semibold text-[#03276a] dark:text-white"> Sub Task 3 </h3>
                            <time className="block ml-2 mb-2 text-sm font-normal leading-none text-[#004eb3] dark:text-gray-500">By Dec 2nd, 2022</time>
                            <p className="mb-4 ml-2 text-base font-normal text-gray-500 dark:text-gray-400">Brief description of the job to be done by this time.</p>
                        </li>
                    </ol>
                </Container>
            </Container>
            <Container align="left" maxWidth="lg" className="mb-10">
                <Paper elevation={2} sx={{ p: 2, bgcolor: '#ffffff' }} className="" gutterBottom>
                <h5 align="center" className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#7aa5ea] md:text-2xl lg:text-4xl dark:text-white"> <span className="underline underline-offset-9 decoration-8 decoration-[#fabc05] dark:decoration-blue-600">Required Prerequisites</span></h5>
                    
                    {/* <Typography align="center" className="mt-10 font-semibold text-[#7aa5ea]" variant="h4" >
                        Required Prerequisites
                    </Typography> */}
                    <Typography className="mt-5 text-[#03276a] text-lg mb-7 m-3" gutterBottom>
                        {post.prerequisite}
                    </Typography>
                    <div className="mb-5">
                        <Typography className="text-[#03276a] text-lg ml-4" > -  Machine Learning: Experience in 2+ projects </Typography>
                        <Typography className="text-[#03276a] text-lg ml-4" > -  Machine Learning: Experience in 2+ projects </Typography>
                        <Typography className="text-[#03276a] text-lg ml-4" > -  Machine Learning: Experience in 2+ projects </Typography>
                        <Typography className="text-[#03276a] text-lg ml-4" > -  Machine Learning: Experience in 2+ projects </Typography>
                        <Typography className="text-[#03276a] text-lg ml-4" > -  Machine Learning: Experience in 2+ projects </Typography>
                    </div>
                </Paper>
            </Container>

            <Container align="left" maxWidth="lg" className="mb-16">
            <h5 className="mb-4 text-4xl font-semibold leading-none tracking-tight text-[#004eb3] md:text-2xl lg:text-4xl dark:text-white"> <span className="underline underline-offset-9 decoration-8 decoration-[#33a852] dark:decoration-blue-600">Contributors</span></h5>
                {/* <Typography className="mt-10 font-semibold text-[#004eb3]" variant="h4" >
                    Contributors
                </Typography> */}

                <div className="ml-2">
                <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
                    <li>
                        <div className="flex items-center gap-x-6 m-6">
                            <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-[#03276a]">Leslie Alexander</h3>
                                    <p className="text-sm font-semibold leading-6 text-[#7aa5e9]">Co-Founder / CEO</p>
                                </div>
                                <img className="h-16 w-16 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
                                <div>
                                    <h3 className="text-base font-semibold leading-7 tracking-tight text-[#03276a]">Leslie Alexander</h3>
                                    <p className="text-sm font-semibold leading-6 text-[#7aa5e9]">Co-Founder / CEO</p>
                                </div>
                        </div>
                    </li>
                    </ul>
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
        problemStatement: PropTypes.string.isRequired,
        prerequisite: PropTypes.string.isRequired,
    }).isRequired,
};

export default Post;