import React, { useState, useEffect } from "react";
import NavbarProjects from "../Components/NavbarProjects";
import Google from "../Components/Google";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";


import { createTheme, ThemeProvider } from "@mui/material/styles";

import ProjectCard from "../Components/ProjectCard";


const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
});


export default function Projects() {
  const [projectDetails, setProjectDetails] = useState([]);
  const [projectIds, setProjectIds] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");




  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const projectsCollectionRef = collection(db, "Projects");
        const projectsSnapshot = await getDocs(projectsCollectionRef);

        const projectsData = projectsSnapshot.docs
          .filter(
            (doc) =>
              doc.data().isApproved === true && doc.data().isPending === false
          )
          .map((doc) => doc.data());

        setProjectDetails(projectsData);

        const idsArray = projectsSnapshot.docs
          .filter(
            (doc) =>
              doc.data().isApproved === true && doc.data().isPending === false
          )
          .map((doc) => doc.id);

        setProjectIds(idsArray);
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  
  const cards = [...Array(projectDetails.length).keys()];
  return (
    <ThemeProvider theme={theme}>
      <div className="bg-[#f2f0f0] h-full flex flex-col justify-center items-center">
        <NavbarProjects />
        <Box
          sx={{
            bgcolor: "#f2f0f0",
            pt: 6,
            pb: 4,
          }}
        >
          <Container maxWidth="sm">
            <h1
              align="center"
              className="mb-8 text-3xl font-extrabold tracking-wide text-gray-900 dark:text-white md:text-5xl lg:text-6xl"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r to-[#0b9f6e] from-[#1b64f1]">
                Explore Projects
              </span>
            </h1>

            <Typography
              variant="h5"
              align="center"
              color="text.secondary"
              paragraph
              className="text-[#7aa5eb]"
            >
              Developers are modern-day architects, shaping the digital world
              with lines of code, creativity, and innovation. With every
              keystroke, they build the bridges that connect ideas to reality,
              turning concepts into seamless user experiences.
            </Typography>
            <div className="mt-16">
              <Google />
            </div>
          </Container>
          <div className="flex w-full lg:mb-0 items-center mb-2  p-4 text-center justify-center mt-6">
      
            <form className="flex">
              <div className="relative my-auto">
                <svg
                  className="w-4 h-4 absolute top-[35%] left-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <input
                  type="search"
                  id="default-search"
                  className="block w-72 lg:w-96 p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Search Projects"
                  required
                  onChange={(event) => {
                    setSearchTerm(event.target.value);
                  }}
                />
                <button
                  type="submit"
                  className="text-white absolute top-2 right-2 bg-[#05276a] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
        </Box>
        <Container sx={{ py: 8 }} maxWidth="lg">

          <Grid container spacing={4} columns={12}>
            {cards
              .filter((card) => {
                if (searchTerm === "") {
                  return true;
                }

                const projectInfo = projectDetails[card];
                if (
                  (projectInfo &&
                    (projectInfo.projectName || "")
                      .toLowerCase()
                      .includes(searchTerm.toLowerCase())) ||
                  (projectInfo.fullName || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase()) ||
                    (projectInfo.projectDomain || "")
                    .toLowerCase()
                    .includes(searchTerm.toLowerCase())
                ) {
                  return true;
                }

                return false;
              })
              .map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <ProjectCard
                    projectInfo={projectDetails[card]}
                    projectId={projectIds[card]}
                  />
                </Grid>
              ))}
          </Grid>
        </Container>
        <div className="mb-10">
          <Google />
        </div>
      </div>
    </ThemeProvider>
  );
}
